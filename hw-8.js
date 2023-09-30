// Задание №1

const people = [
	{ name: 'Глеб', age: 29 },
	{ name: 'Анна', age: 17 },
	{ name: 'Олег', age: 7 },
	{ name: 'Оксана', age: 47 }
];

people.sort(function (a, b) {
	if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  // a должно быть равным b
  return 0;
});

//Задание 2

function isPositive(Number) {
	return Number > 0;
}
function isMale(person) {
	return person.gender === 'male';
}
function filter(arr, callback) {
	const filteredArray = [];
	for (const item of arr) {
			if (callback(item)) {
					filteredArray.push(item);
			}
	}
	return filteredArray
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
	{ name: 'Глеб', gender: 'male' },
	{ name: 'Анна', gender: 'female' },
	{ name: 'Олег', gender: 'male' },
	{ name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

// Задание 3
function printCurrentDate() {
	const currentDate = new Date();
	console.log(currentDate);
}

let secondsPassed = 0;
const interval = 3000; // Интервал в миллисекундах (3 секунды)
const totalTime = 30000; // Общее время выполнения в миллисекундах (30 секунд)
const timerId = setInterval(function () {
	printCurrentDate();
	secondsPassed += interval / 1000; // Увеличиваем счетчик секунд
	if (secondsPassed >= totalTime / 1000) {
			clearInterval(timerId); // Останавливаем интервал после 30 секунд
			console.log("30 секунд прошло");
	}
}, interval);


// Задание 4

function delayForSecond(callback) {
	setTimeout(callback, 1000);
}

delayForSecond(function () {
	console.log('Привет, Глеб!');
});

// Задание 5

function delayForSecond(cb) {
	setTimeout(() => {
			console.log('Прошла одна секунда');
			if (cb) {
					cb();
			}
	}, 1000)
}

function sayHi(name) {
	console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));