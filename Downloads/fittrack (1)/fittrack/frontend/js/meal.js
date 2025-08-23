document.getElementById("meal-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const meal = document.getElementById("meal").value.trim();
  const calories = parseInt(document.getElementById("calories").value);

  if (!meal || isNaN(calories)) {
    alert("Please enter valid meal details.");
    return;
  }

fetch("http://localhost:8082/api/meals", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    userId: 1,
    mealName: mealName,
    calories: calories,
    date: new Date().toISOString().split("T")[0]
  })
});

  fetch("http://localhost:8082/api/meals/user/1")
    .then(res => res.json())
    .then(logs => {
      logs.forEach(log => {
        // display on screen
      });
    });

  mealLogs.push({
    meal,
    calories,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("mealLogs", JSON.stringify(mealLogs));

  alert("Meal saved successfully!");
  location.reload(); // reload to show updated history
});

window.onload = function () {
  const historyBox = document.getElementById("meal-history");
  const mealLogs = JSON.parse(localStorage.getItem("mealLogs")) || [];

  if (mealLogs.length > 0) {
    mealLogs.slice().reverse().forEach((log, index) => {
      const div = document.createElement("div");
      div.className = "history-entry";
      div.innerHTML = `
        <strong>${log.meal}</strong> - ${log.calories} kcal<br>
        <small>${log.date}</small>
        <br><button onclick="deleteMeal(${index})" class="delete-btn">Delete</button>
      `;
      historyBox.appendChild(div);
    });
  } else {
    historyBox.innerHTML = "<p>No meals yet.</p>";
  }
};

function deleteMeal(index) {
  let mealLogs = JSON.parse(localStorage.getItem("mealLogs")) || [];
  fetch(`http://localhost:8082/api/meals/${mealId}`, {
    method: "DELETE"
  })
  .then(() => {
    // update UI
  });


  // Adjust calorie count
  let total = parseInt(localStorage.getItem("caloriesConsumed")) || 0;
  total -= removed.calories;
  localStorage.setItem("caloriesConsumed", total);

  location.reload();
}
