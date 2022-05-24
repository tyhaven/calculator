let buttons = document.querySelectorAll('.numbers')
let display = document.querySelector('.display')
let runningDisplay = []

function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        runningDisplay.push(button.textContent)
        console.log(runningDisplay)
        display.textContent = runningDisplay.toString()
                                            .replace(/\D/g, '')
    })
})