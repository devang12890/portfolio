document.getElementById("step-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const steps = parseInt(document.getElementById("steps").value);
  if (isNaN(steps) || steps <= 0) {
    alert("Please enter a valid step count.");
    return;
  }

  let totalSteps = parseInt(localStorage.getItem("totalSteps")) || 0;
  totalSteps += steps;
  localStorage.setItem("totalSteps", totalSteps);

  const logs = JSON.parse(localStorage.getItem("stepLogs")) || [];
  logs.push({
    steps,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("stepLogs", JSON.stringify(logs));

  alert("Steps saved successfully!");
  location.reload();
});

window.onload = function () {
  const historyBox = document.getElementById("step-history");
  const logs = JSON.parse(localStorage.getItem("stepLogs")) || [];

  if (logs.length > 0) {
    logs.slice().reverse().forEach((log, index) => {
      const div = document.createElement("div");
      div.className = "history-entry";
      div.innerHTML = `
        <strong>${log.steps} steps</strong><br>
        <small>${log.date}</small><br>
        <button class="delete-btn" onclick="deleteStep(${index})">Delete</button>
      `;
      historyBox.appendChild(div);
    });
  } else {
    historyBox.innerHTML = "<p>No step data yet.</p>";
  }
};

function deleteStep(index) {
  const logs = JSON.parse(localStorage.getItem("stepLogs")) || [];
  const removed = logs.splice(index, 1)[0];
  localStorage.setItem("stepLogs", JSON.stringify(logs));

  let total = parseInt(localStorage.getItem("totalSteps")) || 0;
  total -= removed.steps;
  localStorage.setItem("totalSteps", total);

  location.reload();
}
