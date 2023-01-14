// ### Тренируемся общаться с пользователем посредством alert / confirm / prompt.

// Создайте объект user.
let user = {};

// Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной.
let name = prompt('Как вас зовут?', 'Админ');

let gender = prompt('Укажите ваш пол', 'мужчина');

let age = +prompt('Сколько вам лет?', 18);

//Запишите все в объект.
alert(`Вас зовут ${name}, вы ${gender} и вам ${age} лет`);
let isCorrect = confirm('Записать введенную информацию?');

if (isCorrect) user = { name, gender, age };
else window.location.reload();

// И выведите в консоли.

for (let key in user) console.log(`${key}: ${user[key]}`);
