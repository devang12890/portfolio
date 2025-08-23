document.getElementById("sleep-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const hours = parseFloat(document.getElementById("hours").value);
  if (isNaN(hours) || hours <= 0) {
    alert("Please enter valid sleep hours.");
    return;
  }

  let totalSleep = parseFloat(localStorage.getItem("totalSleep")) || 0;
  totalSleep += hours;
  localStorage.setItem("totalSleep", totalSleep);

  const sleepLogs = JSON.parse(localStorage.getItem("sleepLogs")) || [];
  sleepLogs.push({
    hours,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("sleepLogs", JSON.stringify(sleepLogs));

  alert("Sleep record saved!");
  location.reload();
});

window.onload = function () {
  const historyBox = document.getElementById("sleep-history");
  const logs = JSON.parse(localStorage.getItem("sleepLogs")) || [];

  if (logs.length > 0) {
    logs.slice().reverse().forEach((log, index) => {
      const div = document.createElement("div");
      div.className = "history-entry";
      div.innerHTML = `
        <strong>${log.hours} hours</strong><br>
        <small>${log.date}</small><br>
        <button class="delete-btn" onclick="deleteSleep(${index})">Delete</button>
      `;
      historyBox.appendChild(div);
    });
  } else {
    historyBox.innerHTML = "<p>No sleep data yet.</p>";
  }
};

function deleteSleep(index) {
  const logs = JSON.parse(localStorage.getItem("sleepLogs")) || [];
  const removed = logs.splice(index, 1)[0];
  localStorage.setItem("sleepLogs", JSON.stringify(logs));

  let total = parseFloat(localStorage.getItem("totalSleep")) || 0;
  total -= removed.hours;
  localStorage.setItem("totalSleep", total);

  location.reload();
}
