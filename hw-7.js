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