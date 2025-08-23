const WORKOUT_API = "http://localhost:8082/api/workouts";
const userId = 1; // Replace with actual user ID if dynamic

// 🚀 Submit Workout Form
document.getElementById("workout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const exercise = document.getElementById("exercise").value.trim();
  const calories = parseInt(document.getElementById("calories").value);

  if (!exercise || isNaN(calories) || calories <= 0) {
    alert("Please enter valid workout details.");
    return;
  }

  const workoutData = {
    userId: userId,
    exerciseName: exercise,
    caloriesBurned: calories,
    date: new Date().toISOString().split("T")[0]
  };

  fetch(WORKOUT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(workoutData)
  })
    .then(res => res.json())
    .then(() => {
      alert("Workout saved successfully!");
      document.getElementById("workout-form").reset();
      loadWorkoutHistory();
    })
    .catch(() => {
      alert("Failed to save workout.");
    });
});
function loadWorkoutHistory() {
  fetch(`${WORKOUT_API}/user/${userId}`)
    .then(res => res.json())
    .then(logs => {
      const historyBox = document.getElementById("workout-history");
      historyBox.innerHTML = "";

      if (logs.length === 0) {
        historyBox.innerHTML = "<p>No workouts yet.</p>";
        return;
      }

      logs.reverse().forEach(log => {
        const div = document.createElement("div");
        div.className = "history-entry";
        div.innerHTML = `
          <strong>${log.exerciseName}</strong> - ${log.caloriesBurned} kcal<br>
          <small>${log.date}</small><br>
          <button class="delete-btn" onclick="deleteWorkout(${log.id})">Delete</button>
        `;
        historyBox.appendChild(div);
      });
    })
    .catch(() => {
      alert("Failed to load workout history.");
    });
}
function deleteWorkout(id) {
  fetch(`${WORKOUT_API}/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      alert("Workout deleted.");
      loadWorkoutHistory();
    })
    .catch(() => {
      alert("Error deleting workout.");
    });
}

// 🔁 Load on page open
window.onload = loadWorkoutHistory;
