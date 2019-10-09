// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */
function t1() {
  localStorage.setItem(5, 11);
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;
// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
const a2 = [7, 6, 5];
function t2() {
  localStorage.setItem('a2', a2);
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
  const key = 'a2';
  const out3 = document.querySelector('.out-3');
  out3.innerHTML = `${key} ${localStorage.getItem('a2')}<br>`;
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
const a4 = { hello: 'world', hi: 'mahai' };
function t4() {
  const key = 'a4';
  localStorage.setItem(key, JSON.stringify(a4));
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a24. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
  const k = 'a4';
  document.querySelector('.out-5').innerHTML = `${k} ${localStorage.getItem(
    k
  )}<br>`;
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
  localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
const k7 = 'a7';
const a7 = [];
function t7() {
  const val = document.querySelector('.i-7').value;
  a7.push(val);
  localStorage.setItem(k7, a7);
}
// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */
function t8() {
  a7.pop();
  localStorage.setItem(k7, a7);
}
document.querySelector('.b-8').onclick = t8;

// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

const radios = document.getElementsByName('rb-9');

function t9(e) {
  //console.log(e.target.value);
  localStorage.setItem('bg', e.target.value);
}

window.addEventListener('storage', function() {
  if (localStorage.getItem('bg') !== null);
  document.querySelector(
    'fieldset'
  ).style.backgroundColor = localStorage.getItem('bg');
});

// ваше событие здесь!!!
radios.forEach(radio => {
  radio.oninput = t9;
});

// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const cart = {
  apple: 3,
  grape: 2
};

const out10 = document.querySelector('.out-10');

function t10() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

document.querySelector('.b-10').onclick = t10;

// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */

function t11() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart);
  const table = document.createElement('table');
  if (cart !== null) {
    // console.log(cart);
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.innerHTML = 'Item';
    const thi = document.createElement('th');
    thi.innerHTML = 'Quantity';
    tr.appendChild(th);
    tr.appendChild(thi);
    table.appendChild(tr);
    for (const key in cart) {
      const newTr = document.createElement('tr');
      const td = document.createElement('td');
      const td1 = document.createElement('td');
      const bPlus = document.createElement('button');
      const bMinus = document.createElement('button');
      bPlus.innerHTML = '+';
      bPlus.onclick = t12;
      bMinus.innerHTML = '-';
      bMinus.onclick = t12;

      td.textContent = key;
      td1.textContent = cart[key];
      newTr.appendChild(td);
      newTr.appendChild(td1);
      newTr.appendChild(bPlus);
      newTr.appendChild(bMinus);
      table.appendChild(newTr);
      console.log(key, cart[key]);
    }
  }
  out10.append(table);
  console.log(table);
}
// ваше событие здесь!!!
document.querySelector('.b-11').onclick = t11;

// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */

function t12(e) {
  console.log(e.target);
  console.log(e.target.innerText);
  console.log(+e.target.parentNode.cells[1].innerText);
  let quantity = +e.target.parentNode.cells[1].innerText;
  if (e.target.innerText == '+') {
    quantity++;
    e.target.parentNode.cells[1].innerText = quantity;
  } else if (e.target.innerText == '-') {
    quantity--;
    e.target.parentNode.cells[1].innerText = quantity;
  }
}
// ваше событие здесь!!!

// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {}

// ваше событие здесь!!!

// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть -выводит его на страницу. Если нет - пишет корзина пуста. */

function t13() {}

// ваше событие здесь!!!
