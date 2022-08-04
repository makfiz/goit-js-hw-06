const input = document.querySelector("#font-size-control")
const textContiner = document.querySelector("#text")

input.addEventListener('input', () => { 
    let fontSizeValue = input.value
    textContiner.style.fontSize = fontSizeValue + 'px'
    
})