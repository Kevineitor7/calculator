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
const back = document.querySelector('.key.backspace')
const dot = document.querySelector('.key.dot')
const key = document.querySelector('.key')

let x = ''
let y = ''
let operator = []
let change = false
let resultado 

one.addEventListener('click', uno)
two.addEventListener('click', dos)
three.addEventListener('click', tres)
four.addEventListener('click', cuatro)
five.addEventListener('click', cinco)
six.addEventListener('click', seis)
seven.addEventListener('click', siete)
eight.addEventListener('click', ocho)
nine.addEventListener('click', nueve)
zero.addEventListener('click', cero)
dot.addEventListener('click', punto)
clear.addEventListener('click', ac)
plus.addEventListener('click', suma)
minus.addEventListener('click', resta)
multiplication.addEventListener('click', multiplicacion)
division.addEventListener('click', dividir)
equal.addEventListener('click', igual)
back.addEventListener('click', backspace) 

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

document.addEventListener('keydown', (e) => {
    if (e.key == 1) { uno() } 
    else if (e.key == 2) { dos() }
    else if (e.key == 3) { tres() }
    else if (e.key == 4) { cuatro() }
    else if (e.key == 5) { cinco() }
    else if (e.key == 6) { seis() }
    else if (e.key == 7) { siete() }
    else if (e.key == 8) { ocho() }
    else if (e.key == 9) { nueve() }
    else if (e.key == 0) { cero() }
    else if (e.key == '.') { punto() }
    else if (e.key == 'c' || e.key == 'C') { ac() }
    else if (e.key == '+') { suma() }
    else if (e.key == '-') { resta() }
    else if (e.key == '*') { multiplicacion() }
    else if (e.key == '/') { dividir() }
    else if (e.key == '=' || e.key == 'Enter') { igual() }
    else if (e.key == 'Backspace') { backspace()}
  });

function uno() {
    calculation.innerHTML += 1
    if (change == true) {
        y += '1'
        console.log(x,y)
    } else {
        x += '1'
        console.log(x,y)
    }
}

function dos() {
    calculation.innerHTML += 2
    if (change == true) {
        y += '2'
        console.log(x,y)
    } else {
        x += '2'
        console.log(x,y)
    }
}

function tres() {
    calculation.innerHTML += 3
    if (change == true) {
        y += '3'
        console.log(x,y)
    } else {
        x += '3'
        console.log(x,y)
    }
}

function cuatro() {
    calculation.innerHTML += 4
    if (change == true) {
        y += '4'
        console.log(x,y)
    } else {
        x += '4'
        console.log(x,y)
    }
}

function cinco() {
    calculation.innerHTML += 5
    if (change == true) {
        y += '5'
        console.log(x,y)
    } else {
        x += '5'
        console.log(x,y)
    }
}

function seis() {
    calculation.innerHTML += 6
    if (change == true) {
        y += '6'
        console.log(x,y)
    } else {
        x += '6'
        console.log(x,y)
    }
}

function siete() {
    calculation.innerHTML += 7
    if (change == true) {
        y += '7'
        console.log(x,y)
    } else {
        x += '7'
        console.log(x,y)
    }
}

function ocho() {
    calculation.innerHTML += 8
    if (change == true) {
        y += '8'
        console.log(x,y)
    } else {
        x += '8'
        console.log(x,y)
    }
}

function nueve() {
    calculation.innerHTML += 9
    if (change == true) {
        y += '9'
        console.log(x,y)
    } else {
        x += '9'
        console.log(x,y)
    }
}

function cero() {
    calculation.innerHTML += 0
    if (change == true) {
        y += '0'
        console.log(x,y)
    } else {
        x += '0'
        console.log(x,y)
    }
}

function punto() {
    calculation.innerHTML += '.'
    if (change == true) {
        y += '.'
        console.log(x,y)
    } else {
        x += '.'
        console.log(x,y)
    }
}

function ac() {
    calculation.innerHTML = ''
    result.innerHTML = ''
    x = ''
    y = ''
    operator = []
    change = false
    console.clear()
}

function backspace() {    
    result.textContent = ''
    
    if (calculation.innerHTML.substring(calculation.innerHTML.length - 1) == '+' ||
    calculation.innerHTML.substring(calculation.innerHTML.length - 1) == '-' ||
    calculation.innerHTML.substring(calculation.innerHTML.length - 1) == '*' ||
    calculation.innerHTML.substring(calculation.innerHTML.length - 1) == '/') {
        operator.pop()
    } 

calculation.innerHTML = calculation.innerHTML.substring(0, calculation.innerHTML.length - 1)

    if (change == true) {
        y = y.substring(0, y.length - 1)
        console.log(x,y)
    } else if (change == false) {
        x = x.substring(0, x.length - 1)
        console.log(x,y)
    }

    if (operator.length == 0) {
        change = false
        console.log(change)
        x = calculation.innerHTML
    }

    if (y.length == 0 && operator.length >= 1) {
        x = eval(calculation.innerHTML.substring(0, calculation.innerHTML.length - 1))
    }
}

function suma() {
    calculation.innerHTML += '+'
    if (change == false) {
        change = true
    } else if (change == true) {
        if (operator[operator.length - 1] == 'sum') {
            add(Number(x), Number(y))
            x = resultado
            y = ''
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
}

function resta() {
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
}

function multiplicacion() {
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
}

function dividir() {
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
}

function igual() {
    operate(operator[operator.length - 1], Number(x), Number(y))
}

