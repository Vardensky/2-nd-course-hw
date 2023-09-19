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

const circle1 = {
	radius: 4,
	getArea() {
		console.log(`Площадь круга через радиус равна ${this.radius ** 2 * Math.PI}`);
	}
}

const circle2 = {
	radius: 4,
	getPerimeter() {
		console.log(`Периметр окружности равен ${2 * Math.PI * this.radius}`);
	}
}

circle1.getArea();
circle2.getPerimeter();

//Задание №8

const showSeason = (a) => {
	if (a === 1 || a === 2 || a === 12) {
		return 'Зима';

	} else if (a === 3 || a === 4 || a === 5) {
		return 'Весна';
	}

	else if (a === 6 || a === 7 || a === 8) {
		return 'Лето';
	}

	else if (a === 9 || a === 10 || a === 11) {
		return 'Осень';

	} else {
		return 'Вы ввели что-то не то';
	}
}

showSeason(Number(prompt('Введите значение от 1 до 12')));