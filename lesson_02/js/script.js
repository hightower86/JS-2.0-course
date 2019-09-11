const body = document.querySelector('body');
// Task 1. --------------------

const a = 7;
const b = 9;
console.log(a * b);

// Task 2.---------------
const c = 7;
const d = 9;
const result2 = document.querySelector('.result2');
result2.innerHTML += c / d;

// Task 3.------------------
const e = 3;
const f = 5;
const result3 = document.querySelector('.result3');
result3.innerHTML += e + f;

// Task 4.---------
const e1 = '3';
const f1 = 5;
const result4 = document.querySelector('.result4');
result4.innerHTML += e1 + f1;
//так как первая переменная строкого типа, то
//действия с остальными переменными js производит как со строками,
//поэтому в результате получаем строку "35"

// Task 5.----------------------
const e2 = 3;
const f2 = 0;
const result5 = document.querySelector('.result5');
result5.innerHTML += e2 / f2;

// Task 6.------------------
const e3 = 3;
const f3 = 'Hello';
const result6 = document.querySelector('.result6');
result6.innerHTML += e3 + f3;

// Task 7.-----------------------
const e4 = 3;
const f4 = 'Hello';
const result7 = document.querySelector('.result7');
result7.innerHTML += e4 * f4;

// Task 8.---------------
const inp8 = document.querySelector('.inp8');
const btn8 = document.querySelector('.btn8');

btn8.onclick = () => {
  console.log(inp8.value);
};

// Task 9.----------------

const inp9 = document.querySelector('.inp9');
const btn9 = document.querySelector('.btn9');
const result9 = document.querySelector('.result9');

btn9.onclick = function() {
  result9.innerHTML += inp9.value;
  inp9.value = '';
};

// Task 10 ---------------
const inp10 = document.querySelector('.inp10');
const btn10 = document.querySelector('.btn10');
const result10 = document.querySelector('.result10');

btn10.onclick = () => {
  result10.innerHTML += inp10.value * 10;
};

// Task 11 ---------------
const inp11 = document.querySelector('.inp11');
const btn11 = document.querySelector('.btn11');
const result11 = document.querySelector('.result11');

btn11.onclick = () => (result11.innerHTML = +inp11.value + 10);

// Task 12 ----------------

const inp12 = document.querySelector('.inp12');
const inp122 = document.querySelector('.inp122');
const btn12 = document.querySelector('.btn12');
const result12 = document.querySelector('.result12');

btn12.onclick = () =>
  (result12.innerHTML = `Hello ${inp12.value}  ${inp122.value}`);

// Task 13 ----------------
const inp13 = document.querySelector('.inp13');
const inp132 = document.querySelector('.inp132');
const btn13 = document.querySelector('.btn13');
const result13 = document.querySelector('.result13');

btn13.onclick = () => (result13.innerHTML = +inp13.value + +inp132.value);

// Task 14 ----------------
const inp14 = document.querySelector('.inp14');
inp14.value = 'Hello';

// Task 15 ----------------
const y = document.querySelector('.inp15');
y.style.border = '2px solid red';

// // Task 15.
// // Создайте input и получите его в переменную y.
// // В js выполните следующее присвоение: y.style.border = '2px solid red' .
// // Изучите результат операции.

// body.innerHTML += '<hr>';
// body.innerHTML += '<input class="inp15">';
// let y = document.querySelector('.inp15');
// y.style.border = '2px solid red';

// // Task 16.
// // Создайте два input type=number, куда пользователь
// // может ввести числа. Выведите на страницу сумму
// // данных чисел.

// body.innerHTML += '<hr>';
// body.innerHTML += '<input class="inp16" type="number">';
// body.innerHTML += '<input class="inp161" type="number">';
// body.innerHTML += '<br>';
// body.innerHTML += '<button class="btn16">SUM</button>';

// let inp16 = document.querySelector('.inp16');
// let inp161 = document.querySelector('.inp161');
// let btn16 = document.querySelector('.btn16');

// btn16.onclick = function() {
//   body.innerHTML += +inp16.value + +inp161.value;
// };

// // Task 17.
// // Создайте input type="text" куда пользователь может
// // ввести строку и число. Создайте функцию, которая
// // запускается по нажатию на кнопку. Получите значение
// // из input в переменную t. А затем сделайте операцию
// // t = parseInt(t), и результат операции выведите в
// // консоль. Прочитайте за эту операцию. Попробуйте
// // по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
// body.innerHTML += '<hr>';
// body.innerHTML += '<br>';
// body.innerHTML += '<h3>Task 17</h3>';

// body.innerHTML += '<input class="inp17" type="text">';
// body.innerHTML += '<button class="btn17">parseInt</button>';

// let inp17 = document.querySelector('.inp17');
// let btn17 = document.querySelector('.btn17');

// btn17.onclick = function() {
//   let t = inp17.value;
//   t = parseInt(t);
//   console.log(t);
// };
// // почитал. инетересная функция, спасибо.

// // Task 18.
// // Создайте input type="text" куда пользователь может
// // ввести строку и число. Создайте функцию, которая
// // запускается по нажатию на кнопку. Получите значение
// // из input в переменную t. А затем сделайте операцию
// // t = parseFloat(t), и результат операции выведите в
// // консоль. Прочитайте за эту операцию. Попробуйте по
// // очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

// body.innerHTML += '<hr>';
// body.innerHTML += '<br>';
// body.innerHTML += '<h3>Task 18</h3>';

// body.innerHTML += '<input class="inp18" type="text">';
// body.innerHTML += '<button class="btn18">parseFloat</button>';

// let inp18 = document.querySelector('.inp18');
// let btn18 = document.querySelector('.btn18');

// btn18.onclick = function() {
//   let t = inp18.value;
//   t = parseFloat(t);
//   console.log(t);
// };

// // Task 19.
// // Создайте два input type=number, куда пользователь
// // может ввести отрицательные числа. Выведите на
// // страницу сумму данных чисел.

// body.innerHTML += '<hr>';
// body.innerHTML += '<br>';
// body.innerHTML += '<h3>Task 19</h3>';

// body.innerHTML += '<hr>';
// body.innerHTML += '<input class="inp19" type="number">';
// body.innerHTML += '<input class="inp191" type="number">';
// body.innerHTML += '<br>';
// body.innerHTML += '<button class="btn19">SUM</button>';

// let inp19 = document.querySelector('.inp19');
// let inp191 = document.querySelector('.inp191');
// let btn19 = document.querySelector('.btn19');

// btn19.onclick = function() {
//   body.innerHTML += +inp19.value + +inp191.value;
// };

// // Task 20.
// // Создайте опросник, куда пользователь может ввести
// // имя, фамилию, возраст, род занятий. И кнопку. По
// // нажатию кнопки выведите на страницу предложение
// // 'Уважаемый Иван, Иванов, ваш возраст 33 года, по
// // професси вы ...' куда поставьте соответствующие
// // данные из inputов.
// body.innerHTML += '<hr>';
// body.innerHTML += '<br>';
// body.innerHTML += '<h3>Task 20</h3>';

// body.innerHTML += '<input placeholder="Name:" class="name20">';
// body.innerHTML += '<input placeholder="Family name:" class="fName20">';
// body.innerHTML += '<input placeholder="age:" class="age20">';
// body.innerHTML += '<input placeholder="Profession:" class="proff20">';
// body.innerHTML += '<button class="btn20">TASK 20</button>';

// body.innerHTML += '<br>';
// let name20 = document.querySelector('.name20');
// let fName = document.querySelector('.fName20');
// let age = document.querySelector('.age20');
// let profession = document.querySelector('.proff20');
// let btn20 = document.querySelector('.btn20');

// btn20.onclick = function() {
//   body.innerHTML += `Dear ${name20.value} ${fName.value}, your age is ${age.value}, your profession is ${profession.value}`;
// };

// //увлекся процессом и не создал ни одного элемента
// //в файле index.html. надеюсь, не сочтете за ошибку
// //делал это из соображений лучшего закрепления новых знаний
