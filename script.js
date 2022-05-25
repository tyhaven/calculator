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
let firstNum = ''
let secondNum = ''
let currentTotal = ''
let calcOp = ''

function test() {
    console.log(firstNum)
    console.log(secondNum)
    console.log(currentTotal)
    console.log(runningDisplay)
    console.log(calcOp)
}

function operate () {
    if (currentTotal === '') {
        console.log('first')
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
    } else if (currentTotal !== '') {
        console.log('second')
        switch(calcOp) {
            case '+':
                return +currentTotal + +secondNum
                break;
            case '-':
                return +currentTotal - +secondNum
                break;
            case 'x':
                return +currentTotal * +secondNum
                break;
            case '/':
                return +currentTotal / +secondNum
                break;
            default:
                return "this isn't working right"
                break;
        }
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
         if (firstNum === '') { //Fixes bug when doing string of calculations where the following line overwrites the total
        firstNum = runningDisplay.toString()
                                .replace(/[^-.\d]/g, '')
         }
        if (firstNum !== '' && calcOp !== ''){ //if initial calculation has been done, write display number to second variable instead of  first
            secondNum = runningDisplay.toString()
                                    .replace(/[^-.\d]/g, '')
            currentTotal = operate()
            display.textContent = currentTotal
        }
        if (currentTotal === '') { 
            display.textContent = firstNum
        }
        calcOp = button.textContent.toString()
        runningDisplay = []
        button.style.backgroundColor = '#757575'
    })
})

allClear.addEventListener('click', () => { //Clear all variables and display
    runningDisplay = []
    display.textContent = runningDisplay.toString()
                                            .replace(/[^-.\d]/g, '')
    firstNum = ''
    secondNum = ''
    calcOp = ''
    currentTotal = ''
    runningDisplay = []
})

clear.addEventListener('click', () => { //Pop last number added to runningDisplay
    runningDisplay.pop()
    display.textContent = runningDisplay.toString()
                                            .replace(/[^-.\d]/g, '')
})

decimal.addEventListener('click', ()  => {
    runningDisplay.push(decimal.textContent)
    display.textContent = runningDisplay.toString()
                                            .replace(/[^-.\d]/g, '')
})

negative.addEventListener('click', () => { 
    runningDisplay.unshift('-') 
    display.textContent = runningDisplay.toString()
                                        .replace(/[^-.\d]/g, '')
})

equals.addEventListener('click', () => {
    
    if (calcOp === '') {
        return
    } else {
    secondNum = runningDisplay.toString()
                            .replace(/[^-.\d]/g, '')
    currentTotal = operate()
    display.textContent = currentTotal
    secondNum = ''
    symbols.forEach(button => {
        button.style.backgroundColor = '65, 104, 93'
    })
    }
    test()
})