// 1 задание из ДЗ
let obj = {}
let number = prompt ('Введите число от 0 до 999')
number >= 0 && number <= 999 ? console.log(translateObj (number)) : console.log(`Неккоректное число ${obj}`)

function translateObj (x) {
    if (x >= 100) {
       return obj = {
            сотни: x[0],
            десятки: x[1],
            единицы: x[2]
        }
    }
    else if (x <= 99 && x >= 10) {
        return obj = {
            сотни: 0,
            десятки: x[0],
            единицы: x[1]
        }
    }
    else {
        return obj = {
            сотни: 0,
            десятки: 0,
            единицы: x[0]
        }
    }
}

// Попробовал передлать под ООП :) //
let gameStonePaperScissors = {
    randomWeapon() {
        return Math.floor ( Math.random () * 3 )
    },
    translateWeapon(numberWeapon) {
        switch (numberWeapon) {
            case 0:
                return 'Камень'
                break;
            case 1:
                return 'Ножницы'
                break;
            case 2:
                return 'Бумага'
                break;
            default:
                return 'Error'
                break;
        }
    },
    play(player, pc) {
        if ((pc == 0 && player == 1) || (pc == 1 && player == 2) || (pc == 2 && player == 0)) {
            return 0
        }
        else if (pc == player) {
            return 2
        }
        else {
            return 1
        }
    },
    result(result) {
        if (!result) { // Шаблонные строки тоооп! Очень удобно! А код то как красиво смотрится
            console.log(`Вы проиграли! \n Ваше оружие: ${this.translateWeapon(player)} \n Оружие противника: ${this.translateWeapon(pc)}`) 
        }
        else if (result == 2) {
            console.log(`Ничья! \n Ваше оружие: ${this.translateWeapon(player)} \n Оружие противника: ${this.translateWeapon(pc)}`)
        }
        else if (result == 1) {
            console.log(`Вы победили! \n Ваше оружие: ${this.translateWeapon(player)} \n Оружие противника: ${this.translateWeapon(pc)}`)
        }
    }
}

let playing = true
while (playing) {
    var player = +prompt (`Выберите оружие: \n 0 - камень \n 1 - ножницы \n 2 - бумага `) // использовал var, ибо с let не работает функция которая находится в объекте 
    var pc = gameStonePaperScissors.randomWeapon ()                                          
    var result = gameStonePaperScissors.play(player, pc)
    gameStonePaperScissors.result(result)
    playing = +prompt(`Хочешь сыграть ещё? \n 0 - нет \n 1 - да`) // Эту проверку, наверное, уже не стоит выносить в отдельную функцию?
    if (playing !== 0 && playing !== 1) {
        alert('Error!')
        break
    }
}
