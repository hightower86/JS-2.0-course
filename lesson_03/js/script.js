// Task 1.
// Создайте переменную a = 4. Используя конструкцию if
// проверьте что a == 4. Выведите сообщение в консоль.

const a = 4;
if (a === 4) {
  console.log('a equal 4');
}

// Task 2.
// Создайте b = 8 и с = 10. С помощью if, else выведите
// в консоль сообщение о том, какая из переменных больше.

const b = 8;
const c = 10;
if (b > c) {
  console.log('b больше чем c');
} else {
  console.log('c больше чем b');
}

// Task 3.
// Используя else if добавьте в предыдущую задачу
// проверку на равенство.

if (b > c) {
  console.log('b больше чем c');
} else if (c > b) {
  console.log('c больше чем b');
} else {
  console.log('b равно c');
}

// Task 4.
// Создайте на странице 2 input, куда пользователь может
// вводить числа. Добавьте кнопку. При нажатии кнопки
// выполняйте функцию, которая сравнит два числа и
// выведет большее на страницу. Если числа равны -
// выводится строка "равны".
const body = document.querySelector('body');
const inp41 = document.querySelector('#i41');
const inp42 = document.querySelector('#i42');
const btn43 = document.querySelector('#b43');

btn43.onclick = function() {
  const a = +inp41.value;
  const b = +inp42.value;
  if (a > b) {
    body.innerHTML += a;
  } else if (b > a) {
    body.innerHTML += b;
  } else {
    body.innerHTML += 'равны!';
  }
};
