function darkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
  const firstButton = document.getElementById("first-button");
  const secondButton = document.getElementById("second-button");

  if (
    firstButton.innerHTML === "Dark Mode" &&
    secondButton.innerHTML === "Dark Mode"
  ) {
    firstButton.innerHTML = "Light Mode";
    secondButton.innerHTML = "Light Mode";
  } else {
    firstButton.innerHTML = "Dark Mode";
    secondButton.innerHTML = "Dark Mode";
  }
}
