var event, ok, money = 0;

do { //Первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    } else {
        ok = isAnswer(works.a0, event);
    }
}
while (!ok);
if (event !== 1) {
    alert("Вы проиграли, но Ваш выигрыш составил: " + money + " $");
} else {
    money++;
    alert("Правильно! Следующий вопрос");
    do { //Второй вопрос
        ok = false;
        event = +prompt(works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        } else {
            ok = isAnswer(works.b0, event);
        }
    }
    while (!ok);
    if (event !== 4) {
        alert("Вы проиграли, но Ваш выигрыш составил: " + money + " $");
    } else {
        money++;
        alert("Правильно! Следующий вопрос");
        do { //Третий вопрос
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + works.c3 + works.c4 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            } else {
                ok = isAnswer(works.c0, event);
            }
        }
        while (!ok);
        if (event !== 2) {
            alert("Вы проиграли, но Ваш выигрыш составил: " + money + " $");
        } else {
            alert("Вы выиграли, Ваш выигрыш составил: " + ++money + " $")
        }
    }
}
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
