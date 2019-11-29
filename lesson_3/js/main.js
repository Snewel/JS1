// 1 задание 
/* Так и не понял, как и зачем делать через while, мы же знаем, что цикл должен
проверить числа от 2 до 100. Соответственно, нам известно кол-во его итераций */
start:
    for (let i = 2, n = 100; i <= n; i++) { 
        for (let j = 2; j < i; j++) { 
            if (i % j == 0) continue start
        }
        console.log(i) 
    }

console.log('/===================/') // конец 1 задания

// 2 задание
for (let index = 0; index < 10; console.log(index++)) {
}

console.log('/===================/') // конец 2 задания

// 3 задание
let simbol = 'x'
for (let i = 0; i <= 20; i++) {
    console.log(simbol)
    simbol += 'x'
}

console.log('/===================/') // конец 3 задания

//4 задание
function randomWeapon() {
    return Math.floor ( Math.random () * 3 )
}

function translateWeapon(numberWeapon) {
    if (numberWeapon == 0) {
        return 'Камень'
    }
    else if (numberWeapon == 1) {
        return 'Ножницы'
    }
    else {
        return 'Бумага'
    }
}

//реализация через while
let playing = true
while (playing) {
    let player = +prompt ('Выберите оружие: \n 0 - камень \n 1 - ножницы \n 2 - бумага ')
    let pc = randomWeapon ()
        if ((pc == 0 && player == 1) || (pc == 1 && player == 2) || (pc == 2 && player == 0)) {
            console.log('Вы проиграли!' + '\n' + 'Ваше оружие: ' + translateWeapon(player) + '\n' + 'Оружие противника: ' + translateWeapon(pc))
        }
        else if (pc == player) {
            console.log('Ничья!' + '\n' + 'Ваше оружие: ' + translateWeapon(player) + '\n' + 'Оружие противника: ' + translateWeapon(pc))
        }
        else {
            console.log('Вы победили!' + '\n' + 'Ваше оружие: ' + translateWeapon(player) + '\n' + 'Оружие противника: ' + translateWeapon(pc))
        }
    playing = +prompt('Хочешь сыграть ещё? \n 0 - нет \n 1 - да')
}

// реализация через рекурсию 
game ()
function game() {
    let player = +prompt ('Выберите оружие: \n 0 - камень \n 1 - ножницы \n 2 - бумага ')
    let pc = randomWeapon ()
    if ((pc == 0 && player == 1) || (pc == 1 && player == 2) || (pc == 2 && player == 0)) {
        console.log('Вы проиграли!' + '\n' + 'Ваше оружие: ' + translateWeapon(player) + '\n' + 'Оружие противника: ' + translateWeapon(pc))
    }
    else if (pc == player) {
        console.log('Ничья!' + '\n' + 'Ваше оружие: ' + translateWeapon(player) + '\n' + 'Оружие противника: ' + translateWeapon(pc))
    }
    else {
        console.log('Вы победили!' + '\n' + 'Ваше оружие: ' + translateWeapon(player) + '\n' + 'Оружие противника: ' + translateWeapon(pc))
    }
    let playing = +prompt('Хочешь сыграть ещё? \n 0 - нет \n 1 - да')
    if (playing == 1) {
        game()
    }
    else {
        return
    }
}

console.log('/===================/') // конец 4 задания