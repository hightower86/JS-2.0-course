// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/
const b1 = document.querySelector('.b-1');
const out1 = document.querySelector('.out-1');
const url = 'http://getpost.itgid.info/index2.php';
const auth = 'auth=zhrgB3DxC8LoG7Gcisjc';

function t1() {
  const get1 = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}&action=1`).then(response => resolve(response.text()));
  });
  const get2 = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}&action=2&name=Adel`).then(response =>
      resolve(response.text())
    );
  });

  Promise.all([get1, get2]).then(data => (out1.textContent = data));

  out1.textContent = '...loading...';
}

// ваше событие здесь!!!
b1.onclick = t1;
// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/
const b2 = document.querySelector('.b-2');
const out2 = document.querySelector('.out-2');

function t2() {
  const get1 = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}&action=3&num1=34&num2=76`).then(response =>
      resolve(response.text())
    );
  });
  const get2 = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}&action=4&num1=34&num2=76`).then(response =>
      resolve(response.text())
    );
  });

  Promise.all([get1, get2]).then(data => (out2.textContent = data));
  out2.textContent = '...loading...';
}

// ваше событие здесь!!!
b2.onclick = t2;

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
*/
const b3 = document.querySelector('.b-3');
const out3 = document.querySelector('.out-3');

function t3() {
  const get1 = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}&action=5`).then(resp => resolve(resp.text()));
  });
  const get2 = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}&action=6&num1=99&num2=43`).then(resp =>
      resolve(resp.text())
    );
  });
  Promise.all([get1, get2]).then(data => (out3.textContent = data));
  out3.textContent = '...loading...';
}

// ваше событие здесь!!!
b3.onclick = t3;

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>
*/
const b4 = document.querySelector('.b-4');
const out4 = document.querySelector('.out-4');
function t4() {
  const get1 = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}&action=7`).then(response => resolve(response.text()));
  });
  const get2 = new Promise((resolve, reject) => {
    fetch(`${url}?${auth}&action=8&year=1974`).then(response =>
      resolve(response.text())
    );
  });

  Promise.all([get1, get2]).then(data => (out4.textContent = data));
}

// ваше событие здесь!!!
b4.onclick = t4;
// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/
const b5 = document.querySelector('.b-5');
const out5 = document.querySelector('.out-5');
const contentType = 'application/x-www-form-urlencoded';

function t5() {
  const post1 = new Promise((res, rej) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: `${auth}&action=1`
    }).then(resp => res(resp.text()));
  });
  const post2 = new Promise((res, rej) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: `${auth}&action=2&name=adel`
    }).then(resp => res(resp.text()));
  });

  Promise.all([post1, post2]).then(data => (out5.textContent = data));
  out5.textContent = '...loading...';
}

// ваше событие здесь!!!
b5.onclick = t5;
// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://postpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://postpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/
const b6 = document.querySelector('.b-6');
const out6 = document.querySelector('.out-6');

function t6() {
  const post1 = new Promise((res, rej) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: `${auth}&action=3&num1=22&num2=78`
    }).then(resp => res(resp.text()));
  });

  const post2 = new Promise((res, rej) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: `${auth}&action=3&num1=22&num2=78`
    }).then(resp => res(resp.text()));
  });

  Promise.all([post1, post2]).then(data => (out6.textContent = data));
  out6.textContent = '...loading...';
}

// ваше событие здесь!!!
b6.onclick = t6;
// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://postpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>
*/
const b7 = document.querySelector('.b-7');
const out7 = document.querySelector('.out-7');

function t7() {
  const post1 = new Promise((res, rej) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: `${auth}&action=5`
    }).then(resp => res(resp.text()));
  });

  const post2 = new Promise((res, rej) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: `${auth}&action=6&num1=32&num2=57`
    }).then(resp => res(resp.text()));
  });

  Promise.all([post1, post2]).then(data => (out7.textContent = data));
}

// ваше событие здесь!!!
b7.onclick = t7;
// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/
const b8 = document.querySelector('.b-8');
const out8 = document.querySelector('.out-8');

function t8() {
  const post1 = new Promise((res, rej) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: `${auth}&action=7`
    }).then(resp => res(resp.text()));
  });

  const post2 = new Promise((res, rej) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': contentType
      },
      body: `${auth}&action=8&year=1974`
    }).then(resp => res(resp.text()));
  });

  Promise.all([post1, post2]).then(data => (out8.textContent = data));

  out8.textContent = '...loading...';
}

// ваше событие здесь!!!
b8.onclick = t8;
