window.onload = function () {
  const user = JSON.parse(localStorage.getItem('userData'));
  const burned = localStorage.getItem('caloriesBurned');
  const consumed = localStorage.getItem('caloriesConsumed');

  // Set calories summary if available
  if (burned || consumed) {
    document.getElementById('summary-section').style.display = 'block';
    if (burned) document.getElementById('calories-burned').textContent = burned;
    if (consumed) document.getElementById('calories-consumed').textContent = consumed;
  }

  // Load user data safely
  if (user) {
    document.getElementById('username').textContent = user.name || "User";
    document.getElementById('height-value').textContent = user.height || "--";
    document.getElementById('weight-value').textContent = user.weight || "--";

    const heightInput = document.getElementById('height-input');
    const weightInput = document.getElementById('weight-input');

    if (heightInput) heightInput.value = user.height || "";
    if (weightInput) weightInput.value = user.weight || "";
  } else {
    alert("No user data found. Redirecting to home.");
    window.location.href = "index.html";
  }
};

function editField(field) {
  const user = JSON.parse(localStorage.getItem('userData'));

  const display = document.getElementById(`${field}-display`);
  const input = document.getElementById(`${field}-input`);
  const valueSpan = document.getElementById(`${field}-value`);
  const savedMsg = document.getElementById(`${field}-saved`);

  display.style.display = 'none';
  input.style.display = 'inline-block';
  input.focus();

  input.addEventListener('change', () => {
    const newValue = input.value;
    valueSpan.textContent = newValue;
    display.style.display = 'block';
    input.style.display = 'none';

    user[field] = newValue;
    localStorage.setItem('userData', JSON.stringify(user));

    savedMsg.style.display = 'block';
    setTimeout(() => savedMsg.style.display = 'none', 1500);
  });
}

document.getElementById('goal-select').addEventListener('change', function () {
  const goal = this.value;
  const user = JSON.parse(localStorage.getItem('userData'));
  const weight = parseFloat(user.weight);

  if (!goal || !weight) return;

  const bmr = 22 * weight;
  let calorie = bmr;

  if (goal === 'loss') calorie = bmr - 500;
  if (goal === 'gain') calorie = bmr + 300;
  if (goal === 'muscle') calorie = bmr + 500;

  const protein = (weight * 1.7).toFixed(1);
  const fats = ((calorie * 0.25) / 9).toFixed(1);
  const proteinCalories = protein * 4;
  const fatCalories = fats * 9;
  const carbs = ((calorie - proteinCalories - fatCalories) / 4).toFixed(1);

  document.getElementById('goal-output').style.display = 'block';
  document.getElementById('calories').textContent = Math.round(calorie);
  document.getElementById('protein').textContent = protein;
  document.getElementById('carbs').textContent = carbs;
  document.getElementById('fats').textContent = fats;

  user.goal = goal;
  user.nutrition = {
    calories: Math.round(calorie),
    protein,
    carbs,
    fats
  };
  localStorage.setItem('userData', JSON.stringify(user));
});
const steps = localStorage.getItem("totalSteps");
if (steps) {
  document.getElementById("step-summary").textContent = steps;
  document.getElementById("summary-section").style.display = "block";
}
const sleep = localStorage.getItem("totalSleep");
if (sleep) {
  document.getElementById("sleep-summary").textContent = sleep;
  document.getElementById("summary-section").style.display = "block";
}
document.getElementById('theme-toggle').addEventListener('change', function () {
  document.body.classList.toggle('light-mode');
});
