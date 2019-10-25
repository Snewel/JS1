//1 задание (решение нашёл в интернете, но разобрался в нём)
let n = 100;
start:
    for (let i = 2; i <= n; i++) { // Для всех i...
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue start; // не подходит, берём следующее
        }
        console.log(i); // простое число
    }

//2 и 3 задание  (не могу понять почему выводится NaN)
let goods = [1, 2, 3, 4, 5],
    sum = 0;
for (let i = 0; i <= goods.length; i++) {
    sum += goods[i];
}
alert(sum);    

//4 задание
for (let i = 0; i < 10; console.log(i++)) {
}

//5 задание
let q = 20,
    x = "";
for (let i = 1; i <= q; i++) {
    x += "x";
    console.log(x);
}