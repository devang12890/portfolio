document.getElementById("user-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const height = document.getElementById("height").value.trim();
  const weight = document.getElementById("weight").value.trim();

  const userData = {
    name,
    email,
    age,
    height,
    weight
  };

  localStorage.setItem("userData", JSON.stringify(userData));
  window.location.href = "dashboard.html";
});
