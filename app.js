const field = document.querySelector('.field')
let totalNum = document.querySelector('.total__num')
let remainingNum = document.querySelector('.remaining__num')

field.addEventListener("keyup", (e) => {
    let charactersCounter = field.value.length
    totalNum.innerHTML = charactersCounter
    remainingNum.innerHTML = parseInt(field.getAttribute("maxlength")) - charactersCounter
})