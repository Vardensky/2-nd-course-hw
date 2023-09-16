//Задание №1

for (let i = 1; i <= 2; i++) {
	console.log('привет');
}

//Задание №2

for (let j = 1; j <= 5; j++) {
	console.log(j);
}

//Задание №3

for (let f = 7; f <= 22; f++) {
	console.log(f);
}

//Задание №4

const obj = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400',
};

for (let name in obj) {
	console.log(`${name} — зарплата ${obj[name]}`);
}

//Задание №5

let n = 1000; 
let num= 0; 

while (n > 50) {
	n = n / 2;
	num++;
}
console.log(`Получилось число ${n}. Число итераций равно ${num}`);

//Задание №6

for (let dayMonth = 1; dayMonth <= 31; dayMonth += 7) {
  console.log(`Сегодня пятница, ${dayMonth}-е число. Необходимо подготовить отчет.`);	
}

//Аналог задания №5
let counter = 1;
for (let number = 1000; number > 50;) {
	number /= 2;
	console.log(`Получилось число ${number}. Число итераций равно ${counter}`);
	counter++;
}

