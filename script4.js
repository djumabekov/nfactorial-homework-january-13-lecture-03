// 1. Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) console.log(`number ${i}!`);
}

// 2.  Перепишите цикл `for` на `while`.
let i = 1;
while (i <= 100) {
  if (i % 2 == 0) console.log(`number ${i}!`);
  i++;
}
