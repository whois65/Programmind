const qi = (x) => document.getElementById(x);
const qs = (x) => document.querySelector(x);

function toggleDark() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    qi("ToggleDarkicon").classList = "ti ti-sun";
  }
});
