// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
const b1 = document.querySelector('.b-1');
const out1 = document.querySelector('.out-1');

function t1() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1'
  )
    .then(response => response.text())
    .then(data => (out1.textContent = data));

  out1.textContent = '...loading...';
}
// ваше событие здесь!!!
b1.onclick = t1;

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */
const b2 = document.querySelector('.b-2');
const out2 = document.querySelector('.out-2');
function t2() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=adel'
  )
    .then(resp => resp.text())
    .then(data => (out2.textContent = data));

  out2.textContent = '..loading..';
}

// ваше событие здесь!!!
b2.onclick = t2;

// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */
const b3 = document.querySelector('.b-3');
const out3 = document.querySelector('.out-3');
function t3() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=44&num2=99'
  )
    .then(resp => resp.text())
    .then(data => (out3.textContent = data));
  out3.textContent = '..loading..';
}

// ваше событие здесь!!!
b3.onclick = t3;

// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */
const b4 = document.querySelector('.b-4');
const out4 = document.querySelector('.out-4');
function t4() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=44&num2=99'
  )
    .then(resp => resp.text())
    .then(data => (out4.textContent = data));
  out4.textContent = '...loading...';
}

// ваше событие здесь!!!
b4.onclick = t4;
// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */
const b5 = document.querySelector('.b-5');
const out5 = document.querySelector('.out-5');
function t5() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5'
  )
    .then(resp => resp.text())
    .then(data => (out5.textContent = data));
  out5.textContent = '..loading..';
}

// ваше событие здесь!!!
b5.onclick = t5;

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */
const b6 = document.querySelector('.b-6');
const out6 = document.querySelector('.out-6');
function t6() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=44&num2=99'
  )
    .then(resp => resp.text())
    .then(data => (out6.textContent = data));
  out6.textContent = '..loading..';
}

// ваше событие здесь!!!
b6.onclick = t6;

// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */
const b7 = document.querySelector('.b-7');
const out7 = document.querySelector('.out-7');
function t7() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7'
  )
    .then(resp => resp.text())
    .then(data => (out7.innerHTML = `<img src=${data} width=70px/>`));
  out7.textContent = '...loading...';
}

// ваше событие здесь!!!
b7.onclick = t7;

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/
const b8 = document.querySelector('.b-8');
const out8 = document.querySelector('.out-8');
function t8() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1974'
  )
    .then(resp => resp.text())
    .then(data => (out8.textContent = data));
  out8.textContent = '...loading...';
}

// ваше событие здесь!!!
b8.onclick = t8;

// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */
const b9 = document.querySelector('.b-9');
const out9 = document.querySelector('.out-9');
function t9() {
  fetch(
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=9&m=1&d=1&y=1'
  )
    .then(resp => resp.text())
    .then(data => (out9.textContent = data));
  out9.textContent = '...loading...';
}
// ваше событие здесь!!!
b9.onclick = t9;

// Task 10 ============================================
// Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.
const b10 = document.querySelector('.b-10');
const out10 = document.querySelector('.out-10');

function t10() {
  // const options = {
  //   auth: 'zhrgB3DxC8LoG7Gcisjc',
  //   action: '1'
  // };
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/json'
    },
    // body: JSON.stringify(options)
    body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=1'
  })
    .then(resp => resp.text())
    .then(data => (out10.textContent = data));

  out10.textContent = '...loading...';
}
b10.onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */
const b11 = document.querySelector('.b-11');
const out11 = document.querySelector('.out-11');

function t11() {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=adel'
  })
    .then(resp => resp.text())
    .then(data => (out11.textContent = data));
  out11.textContent = '...loading...';
}

// ваше событие здесь!!!
b11.onclick = t11;

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/
const b12 = document.querySelector('.b-12');
const out12 = document.querySelector('.out-12');

function t12() {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=33&num2=87'
  })
    .then(resp => resp.text())
    .then(data => (out12.textContent = data));
  out12.textContent = '...loading...';
}

// ваше событие здесь!!!
b12.onclick = t12;

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/
const b13 = document.querySelector('.b-13');
const out13 = document.querySelector('.out-13');

function t13() {
  fetch('http://getpost.itgid.info/index2.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=33&num2=87'
  })
    .then(resp => resp.text())
    .then(data => (out13.textContent = data));

  out13.textContent = '...loading...';
}

// ваше событие здесь!!!
b13.onclick = t13;
// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {}

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {}

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {}

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {}

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {}

// ваше событие здесь!!!
