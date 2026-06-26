const qi = (x) => document.getElementById(x);
const qs = (x) => document.querySelector(x);

function toggleDark() {
  document.body.classList.toggle("dark");
  let a = document.body.classList.contains("dark");
  if (a) {
    qi("toggleDarkIcon").classList = "ti ti-sun";
    qi("toggleDarkIcon").style = "color: #fff;";
  } else {
    qi("toggleDarkIcon").classList = "ti ti-moon";
    qi("toggleDarkIcon").style = "color: #000;";
  }
  localStorage.setItem("darkMode", a);
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
    qi("toggleDarkIcon").style = "color: #fff;";
    qi("toggleDarkIcon").classList = "ti ti-sun";
  }
});
