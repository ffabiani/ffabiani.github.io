document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const lightStylesheet = document.getElementById("theme-light");
  const darkStylesheet = document.getElementById("theme-dark");

  // Sync button visual state on page load
  if (localStorage.getItem("theme") === "dark") {
    icon.className = "fas fa-sun";
  }

  toggleBtn.addEventListener("click", function () {
    if (localStorage.getItem("theme") !== "dark") {
      // Switch to Night Mode
      lightStylesheet.disabled = true;
      darkStylesheet.disabled = false;
      localStorage.setItem("theme", "dark");
      icon.className = "fas fa-sun";
    } else {
      // Switch to Day Mode
      lightStylesheet.disabled = false;
      darkStylesheet.disabled = true;
      localStorage.setItem("theme", "light");
      icon.className = "fas fa-moon";
    }
  });
});
