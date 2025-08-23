window.onload = function () {
  const workoutLogs = JSON.parse(localStorage.getItem("workoutLogs")) || [];
  const mealLogs = JSON.parse(localStorage.getItem("mealLogs")) || [];
  const waterLogs = JSON.parse(localStorage.getItem("waterLogs")) || [];

  const getLast7 = (logs, key) => {
    return logs.slice(-7).map(log => ({
      date: new Date(log.date).toLocaleDateString(),
      value: log[key]
    }));
  };

  const burnedData = getLast7(workoutLogs, "calories");
  const consumedData = getLast7(mealLogs, "calories");
  const waterData = getLast7(waterLogs, "amount");

  const labels = Array.from(new Set([
    ...burnedData.map(d => d.date),
    ...consumedData.map(d => d.date),
    ...waterData.map(d => d.date)
  ])).slice(-7);

  const burned = labels.map(date => {
    const log = burnedData.find(l => l.date === date);
    return log ? log.value : 0;
  });

  const consumed = labels.map(date => {
    const log = consumedData.find(l => l.date === date);
    return log ? log.value : 0;
  });

  const water = labels.map(date => {
    const log = waterData.find(l => l.date === date);
    return log ? log.value : 0;
  });

  // Calorie Chart
  new Chart(document.getElementById('calorieChart'), {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Calories Burned',
          data: burned,
          backgroundColor: '#4bc0c0'
        },
        {
          label: 'Calories Consumed',
          data: consumed,
          backgroundColor: '#ff9f40'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Calories Burned vs Consumed (Last 7 Entries)'
        }
      }
    }
  });

  // Water Chart
  new Chart(document.getElementById('waterChart'), {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Water Intake (ml)',
        data: water,
        borderColor: '#a182ff',
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Water Intake Trend (Last 7 Entries)'
        }
      }
    }
  });
};
