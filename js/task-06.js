const input = document.querySelector("#validation-input")

input.addEventListener("blur", () => {
    const {value, dataset, style} = input
    value.length >= dataset.length ? style.borderColor = 'green' : style.borderColor = 'red'
})