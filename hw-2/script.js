
// Задание 1
let a = Number(prompt('Введите значенние равное 10'));
alert(a);

// Задание 2
let iphoneRelease = 'Год выпуска первого iphone' + ' ' + 2007;
alert(iphoneRelease);

// Задание 3
let jsFounder = 'Брендан Эйх';
alert(jsFounder);

// Задание 4
let b = 10;
let c = 2;
alert(b+c);
alert(b-c);
alert(b*c);
alert(b/c);

// Задание 5
let result = 2**5;
alert(result);

// Задание 6

let d = 9;
let e = 2;
alert(d % e);

// Задание 7

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);

// Задание 8

let age = prompt('Сколько Вам лет?');
alert(age);

// Задание 9

const user ={name: 'Marti', age: '17', isAdmin: true };
alert(user.name);

// Задание 9.1
user["city of residence"] = true;
alert(user["city of residence"]);

// Задание 9.2
user.name = "Emmet"; // (*)
alert(user.name);

// Задание 9.3

delete user["city of residence"];

// Задание 9.4

let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// Задание 10
let userName = prompt('Назовите Ваше Имя');
alert('Привет,' + userName + '!');
