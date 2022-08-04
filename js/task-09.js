const body = document.querySelector("body")
const curColor = document.querySelector(".color")
const btn = document.querySelector(".change-color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  const randomColor = getRandomHexColor()
  curColor.innerText = randomColor
  body.style.backgroundColor = randomColor
}

btn.addEventListener("click", changeColor)