let buttons = document.querySelectorAll('.numbers')
let symbols = document.querySelectorAll('.symbols')
let plus = document.querySelector('#add')
let minus = document.querySelector('#subtract')
let times = document.querySelector('#multiply')
let divide = document.querySelector('#divide')
let clear = document.querySelector('#clear')
let allClear = document.querySelector('#allClear')
let equals = document.querySelector('#equals')
let decimal = document.querySelector('#decimal')
let negative = document.querySelector('#negative')
let display = document.querySelector('.display')
let runningDisplay = []
let firstNum = 5
let secondNum = 2
let calcOp = '-'

function operate () {
    switch(calcOp) {
        case '+':
            return +firstNum + +secondNum
            break;
        case '-':
            return +firstNum - +secondNum
            break;
        case 'x':
            return +firstNum * +secondNum
            break;
        case '/':
            return +firstNum / +secondNum
            break;
        default:
            return "this isn't working right"
            break;
    }
}

//Add event listener to each number, push number to display array
buttons.forEach(button => {
    button.addEventListener('click', () => {
        runningDisplay.push(button.textContent)
        console.log(runningDisplay)
        display.textContent = runningDisplay.toString()
                                            .replace(/[^-.\d]/g, '') //concatenate arr of nums to single num
    })
})

//Push display number to num1  for storage on operator click
symbols.forEach(button => {
    button.addEventListener('click', () => {
        firstNum = runningDisplay.toString()
                                .replace(/[^-.\d]/g, '')
        calcOp = button.textContent.toString()
        display.textContent = ''
        runningDisplay = []
        button.style.backgroundColor = '#757575'
    })
})

allClear.addEventListener('click', () => {
    runningDisplay = []
    display.textContent = runningDisplay.toString()
                                            .replace(/[^-.\d]/g, '')
    firstNum = ''
    secondNum = ''
    calcOp = ''
    console.log(runningDisplay)
})

clear.addEventListener('click', () => {
    runningDisplay.pop()
    display.textContent = runningDisplay.toString()
                                            .replace(/[^-.\d]/g, '')
    console.log(runningDisplay)
})

decimal.addEventListener('click', ()  => {
    runningDisplay.push(decimal.textContent)
    console.log(runningDisplay)
    display.textContent = runningDisplay.toString()
                                            .replace(/[^-.\d]/g, '')
})

negative.addEventListener('click', () => {
    runningDisplay.unshift('-') 
    console.log(runningDisplay)
    display.textContent = runningDisplay.toString()
                                        .replace(/[^-.\d]/g, '')
})

equals.addEventListener('click', () => {
    secondNum = runningDisplay.toString()
                            .replace(/[^-.\d]/g, '')
    display.textContent = operate()
    symbols.forEach(button => {
        button.style.backgroundColor = '#ffffff'
    })

})