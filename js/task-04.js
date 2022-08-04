const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const counter = document.querySelector('#value')

let counterValue = 0

function increment () {
    counterValue += 1
    counter.textContent = counterValue
}

function decrement () {
    counterValue -= 1
    counter.textContent = counterValue
}


btnIncrement.addEventListener('click', increment)
btnDecrement.addEventListener('click', decrement)
