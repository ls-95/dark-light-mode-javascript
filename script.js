function darkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
  const firstButton = document.getElementById("first-button");
  const secondButton = document.getElementById("second-button");

  if (element.classList.contains("dark-mode")) {
    firstButton.innerHTML = "Light Mode";
    secondButton.innerHTML = "Light Mode";
  } else {
    firstButton.innerHTML = "Dark Mode";
    secondButton.innerHTML = "Dark Mode";
  }
}

function colourButton() {
  const element = document.body;
  element.classList.toggle("colourful-mode");
  const colourButton = document.getElementById("colour-button");
  if (element.classList.contains("colourful-mode")) {
    colourButton.innerHTML = "Back";
  } else {
    colourButton.innerHTML = "Colourful Mode";
  }
}
