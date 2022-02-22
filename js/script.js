"use strict";

typeof(9)
// Предположение: number
// Фактический: number

typeof(1.2)
// Предположение: number
// Фактический: number

typeof(NaN)
// Предположение: number
// Фактический: number

typeof("Hello World")
// Предположение: string
// Фактический: string

typeof(true)
// Предположение: boolean
// Фактический: boolean

typeof(2 != 1)
// Предположение: boolean
// Фактический: boolean


"сыр" + "ы"
// Предположение: сыры
// Фактический: сыры

"сыр" - "ы"
// Предположение: null
// Фактический: NaN

"2" + "4"
// Предположение: 24
// Фактический: 24

"2" - "4"
// Предположение: null
// Фактический: -2

"Сэм" + 5
// Предположение: Сэм5
// Фактический: Сэм5

"Сэм" - 5
// Предположение: null
// Фактический: NaN

99 * "шары"
// Предположение: string
// Фактический: NaN
////////////////////////////////////////////////////////2
let width = prompt('Введи ширину прямоугольника:');
let height  = prompt('Введи высоту прямоугольника:');
console.log(`Периметр: ${width * 2 + height * 2}`);
console.log(`Площадь: ${width * height}`);
console.log(`Отношение: ${height / width}`);
////////////////////////////////////////////////////////3
let celsius = prompt('Введи количесвто градусов по цельсию');
let fahrenheit = prompt('Введи количесвто градусов по фаренгейту');

console.log(`${celsius}` + '\u{00B0}C' + ` соответствует ${celsius * 3.08}\u{00B0} F`);
console.log(`${fahrenheit}` + '\u{00B0}F' + ` соответствует ${Math.round(fahrenheit / 3.48)}\u{00B0} C`);
///////////////////////////////////////////////////////4
let year = prompt('Введите любой год:');
if ((year % 4 == 0) && (year % 100 != 0)){
	alert('Год висококсный');
} else {
	alert('Год обычный');
}
///////////////////////////////////////////////////////5
let x = +prompt('Введи первое число');
let y = +prompt('Введи второе число');

if (((x || y) == 10) || ((x + y) == '10')) alert('true');
///////////////////////////////////////////////////////6
let count = +prompt('Введи количесвто овец:');
let i = 2;
let string = '1 овечка...';
while (i <= count){
	string += `${i} овечка...`;
	i++;
}
console.log(string);
///////////////////////////////////////////////////////7
for (let i = 0; i <= 15; i++){
	if (i % 2 == 0) {
		console.log(`${i} четное`);
	} else {
		console.log(`${i} нечетное`);
	}
}
///////////////////////////////////////////////////////8
let star = '*';
let lattice = '##';
for (let i = 0; i<=11; i++){
	if(i % 2 == 0){
		console.log(star);
		star += "**"; 
	} else {
		console.log(lattice);
		lattice += '##';
	}
}
////////////////////////////////////////////////////////9
let number1 = prompt('Введи певрое число:');
let number2 = prompt('Введи второе число:');
let number3 = prompt('Введи третие число:');
let answer = '';
let space = ', ';
if (number1 >= number3) {
	if ((number2 >= number3) && (number2 >= number1)){
		answer += number3 + space + number1 + space + number2;
	} else if ((number2 <= number3) && (number2 <= number1)){
		answer += number2 + space + number3 + space + number1;
	} else {
		answer += number3 + space + number2 + space + number1;
	}
} else if (number2 >= number3){
		answer += number1 + space + number3 + space + number2;
} else if (number1 >= number2) {
		answer += number2 + space + number1 + space + number3;
}	else {
		answer += number1 + space + number2 + space + number3;
}
console.log(answer);
///////////////////////////////////////////////////////10
let a = 7;
let b = 4;
let c = -4;
let d = 0;
let e = 8;
if ((a >= b) && (a >= c) && (a >= d) && (a >= e)){
	console.log(a);
}
if ((b >= a) && (b >= c) && (b >= d) && (b >= e)){
	console.log(b);
}
if ((c >= a) && (c >= b) && (c >= d) && (c >= e)){
	console.log(c);
}
if ((d >= a) && (d >= b) && (d >= c) && (d >= e)){
	console.log(d);
}
if ((e >= a) && (e >= b) && (e >= c) && (e >= d)){
	console.log(e);
}