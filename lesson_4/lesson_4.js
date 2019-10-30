let a = 0,
    b = 999;
let x = String(parseInt(Math.random() * (b - a) + a));
//let x = 1002;
let xm = number;

function number(x) {
    if (x > 999) {
        alert("Ошибка");
        return xm = null;
    }
    xm = x.split("");
    if (xm.length == 3) {
        xm.sotni = xm[0];
        xm.desyatki = xm[1];
        xm.edinicy = xm[2];
        return xm;
    } 
    else if (xm.length == 2) {
        xm.sotni = 0;
        xm.desyatki = xm[0];
        xm.edinicy = xm[1];
        return xm;
    } 
    else if (xm.length == 1) {
        xm.sotni = 0;
        xm.desyatki = 0;
        xm.edinicy = xm[0];
        return xm;
    }
}

number(x);
console.log(xm);
