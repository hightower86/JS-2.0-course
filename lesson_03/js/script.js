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
const result4 = document.querySelector('#res4');

btn43.onclick = function() {
  const a = +inp41.value;
  const b = +inp42.value;
  if (a > b) {
    result4.value += a;
  } else if (b > a) {
    result4.value += b;
  } else {
    result4.value += 'равны!';
  }
};

// Task 5. Создайте на странице input, куда пользователь может
// вводить год рождения. Добавьте кнопку. При нажатии
// кнопки выполняйте функцию, которая если год рождения
// меньше 2000 выводит на страницу возраст пользователя
// (2019 - введенный год рождения),
// если год рождения больше или равен 2000 - выводит в
// консоль возраст пользователя.
const inp5 = document.querySelector('#i5');
const btn5 = document.querySelector('#b5');
const result5 = document.querySelector('#res5');

btn5.onclick = function() {
  const a = +inp5.value;
  if (a < 2000) {
    result5.value += 2019 - a;
  } else {
    console.log(2019 - a);
  }
};
inp5.onchange = function() {
  result5.value = '';
};

// Task 6.
// Создайте input куда пользователь может ввести номер
// квартиры. Если квартира от 1 до 32 - то выводите
// сообщение, о том, что такая квартира есть,если
// другое число - сообщение о том, что квартира не
// существует.
const inp6 = document.querySelector('#i6');
const btn6 = document.querySelector('#b6');
const result6 = document.querySelector('#res6');

btn6.onclick = function() {
  const a = +inp6.value;
  if (a <= 32) {
    result6.value = 'квартира есть';
  } else {
    result6.value = 'такой квартиры нет';
  }
};
inp6.onchange = function() {
  result6.value = '';
};

// Task 7.
// Создайте input куда пользователь может ввести число.
// После нажатия кнопки - на страницу должно выводиться
// сообщение - большие или меньше нуля это число.

const inp7 = document.querySelector('#i7');
const btn7 = document.querySelector('#b7');
const result7 = document.querySelector('#res7');

btn7.onclick = function() {
  const a = +inp7.value;
  if (a > 0) {
    result7.value = 'число больше нуля';
  } else if (a === 0) {
    result7.value = 'число равно нулю';
  } else {
    result7.value = 'число меньше нуля';
  }
};
inp7.onchange = function() {
  result7.value = '';
};
