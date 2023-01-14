// ### Работа с операторами.

// 1. Используя конструкцию `if..else`, напишите код,
// который получает число через `prompt`, а затем выводит в `alert`

let number = +prompt('Введите число больше нуля', 0);

if (number > 0) alert(`Вы ввели число ${number}`);
else window.location.reload();
