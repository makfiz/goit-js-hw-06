const inputNum = document.querySelector('#controls input')
const btnCreate = document.querySelector('[data-create]')
const btnDestroy = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')
let boxesConteiner

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(boxesConteiner)
function createBoxesContainer(totalBoxs) {
  if (boxesConteiner !== undefined) return alert("Click button Destroy")
  boxesConteiner = document.createElement('div')
  boxesConteiner.classList.add("boxes-container")
  boxes.append(boxesConteiner)
  boxesConteiner.append(...totalBoxs)
  
  // if (boxesConteiner == 'div') return console.log("huitebe")
}

function createBoxes(amount) {
  let totalBoxs = []
  for (let i = 0; i < amount; i++) {
    let randomColor = getRandomHexColor()
    totalBoxs[i] = document.createElement('div')
    totalBoxs[i].style.width = `${30 + (10 * i)}px`
    totalBoxs[i].style.height = `${30 + (10 * i)}px`
    totalBoxs[i].style.backgroundColor = randomColor
  }

  createBoxesContainer(totalBoxs)
  totalBoxs = []
}

 
function destroyBoxes() {
  boxesConteiner.remove();
  boxesConteiner = undefined
}

btnCreate.addEventListener('click', () => {
createBoxes(inputNum.value)
})

btnDestroy.addEventListener('click', () => {
destroyBoxes()
})

