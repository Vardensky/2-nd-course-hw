//Задание №1

let arrayNumbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrayNumbers.length; i++) {
	console.log(arrayNumbers[i]);
	if (arrayNumbers[i] === 10) {
		break;
	}
}

//Задание №2

let checkIndex = [1, 5, 4, 10, 0, 3];
console.log(checkIndex.indexOf(4));

//Задание №3

let useJoin = [1, 3, 5, 10, 20];
console.log(useJoin.join(' '));

//Задание №4

let createArr = [];
for (let i = 0; i < 3; i++) {
	createArr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		createArr[i].push(1);
	}
}
console.log(createArr);

//Задание №5

let addArr = [1, 1, 1];
addArr.push(2, 2, 2);
console.log(addArr);

//Задание №6

let deleteSymb = [9, 8, 7, 'a', 6, 5];
deleteSymb.sort();
deleteSymb.pop();
console.log(deleteSymb);

//Задание №7

let guessNumber = [9, 8, 7, 6, 5];
let checkNumber = guessNumber.includes(Number(prompt('Введите число любое')));
if (checkNumber === true) {
	alert('угадал');
 } else {
	alert('НЕ угадал');
}


/*let result = 0;
let enterNumber = Number(prompt('Введите число любое'));
for (let i = 0; i < guessNumber.length; i++) {
	if (enterNumber === guessNumber[i]) {
		console.log('угадал');
		break
	} else {
		console.log('НЕ угадал');
	}
} */

//Задание №8
let viceVersa = 'abcdef';
let res = viceVersa.split('');
res = res.reverse();
res = res.join('');
console.log(res);

//Задание №9
let sortArr = [
	[1, 2, 3],
	[4, 5, 6]
];
let arr = [];
for (let i = 0; i < sortArr.length; i++) {
	for (let j = 0; j < sortArr[i].length; j++) {
		arr.push(sortArr[i][j]);
	}
}
console.log(arr);
// Этот метод довольно сложный. Проще сделать так:

let sortArr2 = [
	[1, 2, 3],
	[4, 5, 6]
];
console.log(sortArr2.flat());

//Задание №10
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

let array = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
	array.push(getRandomInt(10));
}
console.log(array);

for (let i = 0; i < array.length - 1; i++) {
	const sum = array[i] + array[i + 1];
	console.log("Сумма", array[i], "и", array[i + 1], "равна", sum);
}

//Задание №11

let arrSqr = [1, 2, 3, 4, 5];
let sqrResult = arrSqr.map(item => item**2);
console.log(sqrResult);

//Задание №12

const getLengthWords = quanity => quanity.map(str => str.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

//Задание №13

function filterPositive(array) {
	return array.filter(item => item < 0)
}
filterPositive([-1, 0, 5, -10, 56]); 
filterPositive([-25, 25, 0, -1000, -2]);

/*Задание №14 Еще в работе

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let randomArr = [];
for (let i = randomInteger(1, 10); randomArr.length <= 10; i++) {
	randomArr.push(i);
}
console.log(randomArr);

let newArr = [];
for (let j = 0; j < randomArr.length; j++) {
	if (randomArr[j] % 2 === 0) {
		newArr.push(j);
	} 
}
console.log(newArr); */