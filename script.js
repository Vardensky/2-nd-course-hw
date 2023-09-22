//Задание №1

const smallNumber = (a,b) => {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

smallNumber(2,4);

//Задание №2

const checkEvenNumb = (a) => {
	if (a % 2 === 0) {
		return 'Число четное';
	} else {
		return 'Число НЕчетное';
	}
}

checkEvenNumb(5);

//Задание №3.1

const logToConsole = (a) => {
	console.log(a * a);
}

logToConsole(4);

//Задание №3.2
const retunToConsole = (a) => {
	return a * a;
}

retunToConsole(4);

//Задание №4

const checkAge = (a) => {
	if (a < 0) {
		alert('Вы ввели неправильное значение');
	}

	if (a >= 0 && a <= 12) {
		alert('привет, друг!');
	}

	if (a >= 13) {
		alert('Добро пожаловать!');
	}
}

checkAge(prompt('Введите свой возраст'));

//Задание №5

const checkNumber = (a,b) => {
	if (isNaN(a) || isNaN(b)) {
		return 'Одно или оба значения не являются числом';
	} else {
		return a * b;
	}
}

checkNumber(4,4);

//Задание №6
const exponentiation = (a) => {
	if (isNaN(a)) {
		alert('Переданный параметр не является числом');
	} else {
		alert(`${a} в кубе равняется ${a ** 3}`);
	}
}

exponentiation(prompt('Введите число'));

//Задание №7

function getCircleArea() {
	return this.radius ** 2 * Math.PI;
}

function getCirclePerimiter() {
 return this.radius * 2 * Math.PI; 
}

const circle1 = {
	radius:4,
	getArea: getCircleArea,
	getPerimiter: getCirclePerimiter,
}

const circle2 = { 
	radius:8,
	getArea: getCircleArea,
	getPerimiter: getCirclePerimiter,
}

	console.log(`Площадь круга 1 равна ${circle1.getArea()}`);
	console.log(`Периметр круга 1 равен ${circle1.getPerimiter()}`);
	console.log(`Площадь круга 2 равна ${circle2.getArea()}`);
	console.log(`Периметр круга 2 равен ${circle2.getPerimiter()}`);

//Задание №8

const showSeason = () => {
	let a = Number(prompt('Введите число от 1 до 12'));
	if (a === 1 || a === 2 || a === 12) {
		alert('Зима');

	} else if (a === 3 || a === 4 || a === 5) {
		alert('Весна');
	}

	else if (a === 6 || a === 7 || a === 8) {
		alert('Лето');
	}

	else if (a === 9 || a === 10 || a === 11) {
		alert('Осень');

	} else {
		alert('Вы ввели что-то не то');
	}
}