/*  Первое задание расписывать не стал, оно очевидное, начал со 2 задания. 
    Каждое новое задание - новая функция, как Вы и рекомендовали на первом уроке, не 5 же архивов делать :D */

//2 задание
Task2 ()
function Task2 () {
    let a = 2  
    let x = 1 + (a *= 2)
    console.log(x)
} 

console.log('/===================/') // конец 2 задания

//3 задание
let a = randomNumber (-100, 100)
let b = randomNumber (-100, 100)
Task3 (a, b)

// Функция для выполнения условий в зависомости от знака a и b
function Task3 (x, y) {
    if (x >= 0 && y>= 0) {
        console.log (x - y)
    }
    else if (x <= 0 && y <= 0) {
        console.log (x * y)
    }
    else {
        console.log (x + y)
    }
}
// Функция для генерирования чисел а и b 
function randomNumber (min, max) {
   return Math.floor (Math.random () * (max - min) + min)
}

console.log('/===================/') // конец 3 задания

//4 задание
let s =  randomNumber (0, 16)
switch (s) {
    case 0:
        console.log(0)
    case 1:
        console.log(1)
    case 2:
        console.log(2)
    case 3:
        console.log(3)
    case 4:
        console.log(4)
    case 5:
        console.log(5)
    case 6:
        console.log(6)
    case 7:
        console.log(7)
    case 8:
        console.log(8)
    case 9:
        console.log(9)
    case 10:
        console.log(10)
    case 11:
        console.log(11)
    case 12:
        console.log(12)
    case 13:
        console.log(13)
    case 14:
        console.log(14)
    case 15:
        console.log(15)
    break
    default:
        console.log('Error')
}

console.log('/===================/') // конец 4 задания

//5 задание
function sum (x, y) {
    return x + y
}

function sub (x, y) {
    return x - y
}

function mul (x, y) {
    return x * y
}

function div (x, y) {     
    return  y == 0 ? console.log('На 0 делить нельзя, но JS может, но всё же не стоит') : x / y
}

//console.log('/===================/') // конец 5 задания

//6 задание
let ch1 = +prompt ('Введите первое число')
let ch2 = +prompt ('Введите второе число')
let op = +prompt ('Выберите нужную операцию: \n 1 - сложение \n 2 - вычитание \n 3 - умножение \n 4 - деление ')
mathOps (ch1, ch2, op)

function mathOps(arg1, arg2, op) {
    switch (op) {
        case 1:
            console.log (sum(arg1, arg2))
            break;
        case 2:
            console.log (sub(arg1, arg2))
            break;
        case 3:
            console.log (mul(arg1, arg2))
            break;
        case 4:
            console.log (div(arg1, arg2))
            break;
        default:
            console.log ('Error')
            break;
    }
}

console.log('/===================/') // конец 6 задания

//7 задание
console.log(0 == null) // Потому что null это ничего, а 0 число, которое получилось после каких-либо вычислений
console.log(0 === null)// Число != Ничего

console.log('/===================/') // конец 7 задания

//8 задание
let x = +prompt ('Введите число, которое хотите возвести в степень')
let y = +prompt ('Введите степень, в которую хотите возвести число')
let t = 1
pow (x, y)

function pow(w, z) {
    if (z == 0) {
        return console.log (1)
    }
    else { 
        t *= w
        z--
        if (z == 0) {
            return console.log (t)
        }
        else {
            pow (w, z)
        }
    }
}

console.log('/===================/') // конец 8 задания