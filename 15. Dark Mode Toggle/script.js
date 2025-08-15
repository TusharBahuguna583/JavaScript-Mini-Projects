let darkModeEnabled = false;

const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", () => {
  darkModeEnabled = !darkModeEnabled;
  document.body.classList.toggle("dark-mode", darkModeEnabled);
});
