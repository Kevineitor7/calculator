const calculation =  document.querySelector('.calc')
const result = document.querySelector('.result')
const one = document.querySelector('.key.one')
const two = document.querySelector('.key.two')
const three = document.querySelector('.key.three')
const four = document.querySelector('.key.four')
const five = document.querySelector('.key.five')
const six = document.querySelector('.key.six')
const seven = document.querySelector('.key.seven')
const eight = document.querySelector('.key.eight')
const nine = document.querySelector('.key.nine')
const zero = document.querySelector('.key.zero')
const equal = document.querySelector('.key.equal')
const clear = document.querySelector('.key.clear')
const plus = document.querySelector('.key.plus')
const minus = document.querySelector('.key.minus')
const multiplication = document.querySelector('.key.multiply')
const division = document.querySelector('.key.divide')
const root = document.querySelector('.key.root')
const remainder = document.querySelector('.key.remainder')
const dot = document.querySelector('.key.dot')

let x = ''
let y = ''
let operator = []
let change = false
let resultado 

one.addEventListener('click', () => {
    calculation.innerHTML += 1
    if (change == true) {
        y += '1'
        console.log(x,y)

    } else {
        x += '1'
        console.log(x,y)
    }
})

two.addEventListener('click', () => {
    calculation.innerHTML += 2
    if (change == true) {
        y += '2'
        console.log(x,y)
    } else {
        x += '2'
        console.log(x,y)
    }
})

three.addEventListener('click', () => {
    calculation.innerHTML += 3
    if (change == true) {
        y += '3'
        console.log(x,y)
    } else {
        x += '3'
        console.log(x,y)
    }
})

four.addEventListener('click', () => {
    calculation.innerHTML += 4
    if (change == true) {
        y += '4'
        console.log(x,y)
    } else {
        x += '4'
        console.log(x,y)
    }
})

five.addEventListener('click', () => {
    calculation.innerHTML += 5
    if (change == true) {
        y += '5'
        console.log(x,y)
    } else {
        x += '5'
        console.log(x,y)
    }
})

six.addEventListener('click', () => {
    calculation.innerHTML += 6
    if (change == true) {
        y += '6'
        console.log(x,y)
    } else {
        x += '6'
        console.log(x,y)
    }
})

seven.addEventListener('click', () => {
    calculation.innerHTML += 7
    if (change == true) {
        y += '7'
        console.log(x,y)
    } else {
        x += '7'
        console.log(x,y)
    }
})

eight.addEventListener('click', () => {
    calculation.innerHTML += 8
    if (change == true) {
        y += '8'
        console.log(x,y)
    } else {
        x += '8'
        console.log(x,y)
    }})

nine.addEventListener('click', () => {
    calculation.innerHTML += 9
    if (change == true) {
        y += '9'
        console.log(x,y)
    } else {
        x += '9'
        console.log(x,y)
    }
})

zero.addEventListener('click', () => {
    calculation.innerHTML += 0
    if (change == true) {
        y += '0'
        console.log(x,y)
    } else {
        x += '0'
        console.log(x,y)
    }
})

dot.addEventListener('click', () => {
    calculation.innerHTML += '.'
    if (change == true) {
        y += '.'
        console.log(x,y)
    } else {
        x += '.'
        console.log(x,y)
    }
})

clear.addEventListener('click', () => {
    calculation.innerHTML = ''
    result.innerHTML = ''
    x = ''
    y = ''
    operator = []
    change = false
    console.clear()
})

plus.addEventListener('click', () => {
    calculation.innerHTML += '+'
    if (change == false) {
        change = true
    } else if (change == true) {
        if (operator[operator.length - 1] == 'sum') {
            add(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'sub') {
            subtract(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'mul') {
            multiply(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'div') {
            divide(Number(x), Number(y))
            x = resultado
            y = 0
        }
    }
    operator.push('sum')
    console.log(operator)
})

minus.addEventListener('click', () => {
    calculation.innerHTML += '-'
    if (change == false) {
        change = true
    } else if (change == true) {
        if (operator[operator.length - 1] == 'sum') {
            add(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'sub') {
            subtract(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'mul') {
            multiply(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'div') {
            divide(Number(x), Number(y))
            x = resultado
            y = 0
        }
    }
    operator.push('sub')
    console.log(operator)
})

multiplication.addEventListener('click', () => {
    calculation.innerHTML += '*'
    if (change == false) {
        change = true
    } else if (change == true) {
        if (operator[operator.length - 1] == 'sum') {
            add(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'sub') {
            subtract(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'mul') {
            multiply(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'div') {
            divide(Number(x), Number(y))
            x = resultado
            y = 0
        }
    }
    operator.push('mul')
    console.log(operator)
})

division.addEventListener('click', () => {
    calculation.innerHTML += '/'
    if (change == false) {
        change = true
    } else if (change == true) {
        if (operator[operator.length - 1] == 'sum') {
            add(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'sub') {
            subtract(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'mul') {
            multiply(Number(x), Number(y))
            x = resultado
            y = 0
        } else if (operator[operator.length - 1] == 'div') {
            divide(Number(x), Number(y))
            x = resultado
            y = 0
        }
    }
    operator.push('div')
    console.log(operator)
})

root.addEventListener('click', () => {
    calculation.innerHTML += '√'
})

remainder.addEventListener('click', () => {
    calculation.innerHTML += '%'
})

equal.addEventListener('click', () => {
       operate(operator[operator.length - 1], Number(x), Number(y))
})

function add(a, b) {
    resultado = a + b
    result.textContent = resultado
}

function subtract(a, b) {
    resultado = a - b
    result.textContent = resultado
}

function multiply(a, b) {
    resultado =  a * b
    result.textContent = resultado
}

function divide(a, b) {
    resultado = a / b
    result.textContent = resultado
}

function operate(op, a, b) {
    if (op === 'sum') {
        add(a, b)
    } else if (op === 'sub') {
        subtract(a, b)
    } else if (op === 'mul') {
        multiply(a, b) 
    } else {
        divide(a, b)
    }

    if (!b || !op) {
        resultado = a
        result.textContent = resultado
    }
}



