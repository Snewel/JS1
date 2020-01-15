let gameStonePaperScissors = {
    tools: [
        'img/stone.jpg', 'img/scissors.jpg','img/paper.jpg'
    ],
    randomWeapon() {
        return Math.floor ( Math.random () * 3 )
    },
    translateWeapon(numberWeapon) {
        switch (numberWeapon) {
            case 0:
                return 'Камень'
            case 1:
                return 'Ножницы'
            case 2:
                return 'Бумага'
            default:
                return 'Error'
        }
    },
    resultPlay(player, pc) {
        if ((pc == 0 && player == 1) || (pc == 1 && player == 2) || (pc == 2 && player == 0)) {
            return 0 // проигрыш
        }
        else if (pc == player) {
            return 2 //ничья
        }
        else {
            return 1 //победа
        }
    },
    totalPlayers(result) {
        let result_game = document.querySelector('.result-game')
        if (!result) {  // +1 очко компьютеру
            document.querySelector('.pc-total').innerHTML = ++pc_total
            result_game.innerHTML = 'Увы, но ты проиграл!'
            result_game.style.color = "red"
        }
        else if (result == 2) { // очки никому не начисляются
            result_game.innerHTML = 'Ничья!'
            result_game.style.color = "black"
        }
        else if (result == 1) { // +1 очко игроку
            document.querySelector('.player-total').innerHTML = ++player_total
            result_game.innerHTML = 'Победа вместо обеда!'
            result_game.style.color = "limegreen"
        }
    },
    toolsPlayers (player, pc) {
        document.querySelector('.element-namePlayer').innerHTML = this.translateWeapon(player)
        document.querySelector('.element-namePc').innerHTML = this.translateWeapon(pc)
    },
    toolsImgPlayers (imgPlayer, imgPc) {
        document.querySelector('.element-player').src = this.tools[imgPlayer]
        document.querySelector('.element-pc').src = this.tools[imgPc]
    }
}
let date = new Date() 
document.querySelector('.footer-rights').innerHTML += date.getFullYear()
var player_total = 0
var pc_total = 0
let user_number = Math.floor ( Math.random () * 99999 )
let player_nick = prompt (`Привет! Давай знакомиться! Как тебя зовут?`) //
if ((player_nick == null) || player_nick == "") {
    player_nick = `User number ${user_number}`
}
document.querySelector('.player-nick').innerHTML = player_nick

    function startGame(player) {
        var pc = gameStonePaperScissors.randomWeapon ()
        var result = gameStonePaperScissors.resultPlay(player, pc) 
        gameStonePaperScissors.toolsImgPlayers(player, pc)
        gameStonePaperScissors.toolsPlayers(player, pc)   
        gameStonePaperScissors.totalPlayers(result)
        document.querySelector('.game').style.display = "flex"
    }                   