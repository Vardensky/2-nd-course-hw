//Задание №1

let jsString ='js';
console.log(jsString.toUpperCase());

//Задание №2

const searchStart = (array, stringSrch) => {
	let newArray = [];
		array.forEach(element => {
		if (element.toLowerCase().startsWith(stringSrch.toLowerCase())) {
			newArray.push(element);
		}
	});
	return newArray;
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

//Задание №3

console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));

//Задание №4

let maxNumber = Math.max(52, 53, 49, 77, 21, 32);
console.log(maxNumber);
let minNumber = Math.min(52, 53, 49, 77, 21, 32);
console.log(minNumber);

//Задание №5

const consoleRandomInt = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(consoleRandomInt(1, 10));

//Задание №6

const getRandomArrNumbers = (userNumber) => {
	const consoleRandomInt = (min, max) => {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	let array = [];
	for (let i = 0; array.length < Math.floor((userNumber / 2)); i++) {
		array.push(consoleRandomInt(0, userNumber));
	}
	console.log(array);
}

getRandomArrNumbers(12);

//Задание №7

const twoIntNumber = (a, b) => {
	const consoleRandomInt = (min, max) => {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	return consoleRandomInt(a, b);
}

twoIntNumber(10, 20);

//Задание №8

let currentDate = new Date();
console.log(currentDate);

//Задание №9

let currentDateNew = new Date();
console.log(`Текущая дата ${currentDateNew}`);
currentDateNew.setDate(currentDateNew.getDate() + 73);
console.log(`Новая дата спустя 73 дня: ${currentDateNew}`);

//Задание №10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(); 
let fullDate = `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}`;
let hour = myDate.getHours(); 
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
console.log(fullDate); 

if (minute < 10) { // если минут будет меньше 10,
	minute = "0" + minute; // то перед ними поставим 0
}
if (second < 10) { // если секунд будет меньше 10,
	second = "0" + second; // то перед ними поставим 0
}

console.log(`Время сейчас ${hour}:${minute}:${second}`);

//Задание №11

function gameStart() {
	let gameArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	gameArr.sort();
	alert(gameArr);
	questionFristEl = prompt('Чему равнялся первый элемент массива?');
	questionLastEl = prompt('Чему равнялся последний элемент массива?');

		if (gameArr[0].toLowerCase() === questionFristEl.toLowerCase() && gameArr[6].toLowerCase() === questionLastEl.toLowerCase()) {
			alert('Поздравляем! Возьмите с полки пирожок.');
		} else if (gameArr[0].toLowerCase() != questionFristEl.toLowerCase() && gameArr[6].toLowerCase() != questionLastEl.toLowerCase()) {
			alert('Всё неправильно');
		} else {
			alert('Вы были близки к победе!');
		}
}


