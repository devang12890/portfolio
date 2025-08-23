document.getElementById("workout-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const exercise = document.getElementById("exercise").value.trim();
  const calories = parseInt(document.getElementById("calories").value);

  if (!exercise || isNaN(calories)) {
    alert("Please enter valid workout details.");
    return;
  }

  let totalBurned = parseInt(localStorage.getItem("caloriesBurned")) || 0;
  totalBurned += calories;
  localStorage.setItem("caloriesBurned", totalBurned);

  const logs = JSON.parse(localStorage.getItem("workoutLogs")) || [];
  logs.push({
    exercise,
    calories,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("workoutLogs", JSON.stringify(logs));

  alert("Workout saved successfully!");
  location.reload(); // reload to show updated history
});

// ✅ Load Workout History with Delete
window.onload = function () {
  const historyBox = document.getElementById("workout-history");
  const logs = JSON.parse(localStorage.getItem("workoutLogs")) || [];

  if (logs.length > 0) {
    logs.slice().reverse().forEach((log, reverseIndex) => {
      const index = logs.length - 1 - reverseIndex; // Get actual index from reverse
      const div = document.createElement("div");
      div.className = "history-entry";
      div.innerHTML = `
        <strong>${log.exercise}</strong> - ${log.calories} kcal<br>
        <small>${log.date}</small>
        <br><button onclick="deleteWorkout(${index})" class="delete-btn">Delete</button>
      `;
      historyBox.appendChild(div);
    });
  } else {
    historyBox.innerHTML = "<p>No workouts yet.</p>";
  }
};

// ✅ Delete Workout Handler
function deleteWorkout(index) {
  const logs = JSON.parse(localStorage.getItem("workoutLogs")) || [];
  const removed = logs.splice(index, 1)[0];
  localStorage.setItem("workoutLogs", JSON.stringify(logs));

  // Recalculate calories
  let total = parseInt(localStorage.getItem("caloriesBurned")) || 0;
  total -= removed.calories;
  localStorage.setItem("caloriesBurned", total);

  location.reload();
}
