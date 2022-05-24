let buttons = document.querySelectorAll('.numbers')
let symbols = document.querySelectorAll('.symbols')
let clear = document.querySelector('#clear')
let allClear = document.querySelector('#allClear')
let equals = document.querySelector('#equals')
let decimal = document.querySelector('#decimal')
let display = document.querySelector('.display')
let runningDisplay = []
let num1 = []
let num2 = []

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

function operate () {

}

//Add event listener to each number, push number to display array
buttons.forEach(button => {
    button.addEventListener('click', () => {
        runningDisplay.push(button.textContent)
        console.log(runningDisplay)
        display.textContent = runningDisplay.toString()
                                            .replace(/\D/g, '') //concatenate arr of nums to single num
    })
})

//Push display number to num1  for storage on operator click
symbols.forEach(button => {
    button.addEventListener('click', () => {
        num1.push(runningDisplay.toString()
                                .replace(/\D/g, ''))
        console.log(num1)
    })

})

allClear.addEventListener('click', () => {
    runningDisplay = []
    display.textContent = runningDisplay.toString()
                                            .replace(/\D/g, '')
    console.log(runningDisplay)
})

clear.addEventListener('click', () => {
    runningDisplay.pop()
    display.textContent = runningDisplay.toString()
                                            .replace(/\D/g, '')
    console.log(runningDisplay)
    

})



