/* //1 задание
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  //сначала переменную с увеличиваем на 1, а после уже выводим в алерт, тк используется префиксная форма
d = b++; alert(d);           // 1  //сначала выводим переменную b, а после увелчиваем на 1, тк используется пост префиксная форма
c = (2+ ++a); alert(c);      // 5  //переменная а=2, увеличиваем её на 1, а=3 -> 2+3=5
d = (2+ b++); alert(d);      // 4  //переменная b=2, 2+b=2+2=4, вывели на экран 4, а после увеличили b на 1
alert(a);                    // 3  //a=3, тк мы прибавляли до этого в 4 строке
alert(b);                    // 3  //b=3, тк мы прибавляли до этого в 5 строке */

////2 задание
var a = 2;
var x = 1 + (a *= 2); // 1 + (2 * 2) = 5
alert(x);

//3 задание
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var x = randomNumber(-999, 999),
    y = randomNumber(-999, 999);
alert(x + "\n" + y);
if (x>=0 && y>=0) {
    alert(x-y);
}
else if (x<0 && y<0) {
    alert(x*y);
}
else {
   alert(x+y); 
}

//4 задание  
var a = randomNumber(0,15); 

switch(a) {
    case 0:
        alert("0");
    case 1:
        alert("1");
    case 2:
        alert("2");
    case 3:
        alert("3");
    case 4:
        alert("4");
    case 5:
        alert("5");
    case 6:
        alert("6");
    case 7:
        alert("7");
    case 8:
        alert("8");
    case 9:
        alert("9");
    case 10:
        alert("10");
    case 11:
        alert("11");
    case 12:
        alert("12");
    case 13:
        alert("13");
    case 14:
        alert("14");
    case 15:
        alert("15");       
}

//5 задание 
function add(x,y) {
    return x+y;
}

function sub(x,y) {
    return x-y;
}

function mul(x,y) {
    return x*y;
}

function div(x,y) {
    return x/y;
}

//6 задание  //мне кажется, я неправильно понял задание, вероятно, нужно было сделать по другому 
function mathOperation(x, y, op) {
    switch(op) {
        case "add":
            return add(x,y);
        break;           
        case "sub":
            return sub(x,y);
        break;            
        case "mul":
            return mul(x,y);
        break;            
    }
}

var x = randomNumber(-999, 999),
    y = randomNumber(-999, 999);
alert(x + "\n" + y);
alert (mathOperation(x,y,"mul"));


//7 задание
var a = null>0, b = 0>null;
alert(a + "\n" + b); // null это ничего, а 0 это число, которое может получится при расчётах 

//8 задание 
function pow (x,y) {
    var res = x * x;
        if (y>2) {
        res = x * pow(x,y-1);
        }
    return res;   
}
alert (pow(2,2));
