// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t1() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      myFunction(this.responseText);
    }
  };

  xhttp.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1',
    true
  );
  xhttp.send();

  const myFunction = data =>
    (document.querySelector('.out-1').textContent = data);
}

// ваше событие здесь!!!
document.querySelector('.b-1').onclick = t1;
// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      func(this.responseText);
    }
  };

  function func(data) {
    document.querySelector('.out-2').textContent = data;
  }
  xhttp.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Adel',
    true
  );
  xhttp.send();
}

// ваше событие здесь!!!
document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      func(this.responseText);
    }
  };

  function func(data) {
    document.querySelector('.out-3').textContent = data;
  }
  xhttp.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=45&num2=99',
    true
  );
  xhttp.send();
}

// ваше событие здесь!!!
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      func(xhr.responseText);
    }
  };
  function func(data) {
    document.querySelector('.out-4').textContent = data;
  }
  xhr.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=33&num2=56',
    true
  );
  xhr.send();
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      alert(xhr.status + ' : ' + xhr.statusText);
    } else {
      func(xhr.responseText);
    }
  };

  function func(resp) {
    document.querySelector('.out-5').textContent = resp;
  }

  xhr.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5',
    true
  );
  xhr.send();
  document.querySelector('.out-5').textContent = '...loading';
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      func(xhr.responseText);
    }
  };

  function func(resp) {
    document.querySelector('.out-6').textContent = resp;
  }

  xhr.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=23&num2=90',
    true
  );
  xhr.send();

  document.querySelector('.out-6').textContent = '...loading...';
}

// ваше событие здесь!!!
document.querySelector('.b-6').onclick = t6;

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status != 200) {
      alert(`${xhr.status}:${xhr.statusText}`);
    } else {
      func(xhr.responseText);
    }
  };
  function func(resp) {
    document.querySelector('.out-7').innerHTML =
      //resp;
      `<img src=${resp} width=50px/>`;
  }

  xhr.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7',
    true
  );
  xhr.send();

  document.querySelector('.out-7').textContent = '...loading...';
}

// ваше событие здесь!!!
document.querySelector('.b-7').onclick = t7;
// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/
const b8 = document.querySelector('.b-8');
const out8 = document.querySelector('.out-8');
function t8() {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      func(xhr.responseText);
    }
  };

  function func(resp) {
    out8.textContent = resp;
  }
  xhr.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1974',
    true
  );
  xhr.send();

  out8.textContent = '...loading...';
}

// ваше событие здесь!!!
b8.onclick = t8;

// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */
const b9 = document.querySelector('.b-9');
const out9 = document.querySelector('.out-9');
function t9() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;

    if (xhr.status != 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      func(xhr.responseText);
    }
  };

  function func(resp) {
    out9.textContent = resp;
  }

  xhr.open(
    'GET',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=9&m=1&d=1&y=1',
    true
  );
  xhr.send();
  out9.textContent = '...loading...';
}

// ваше событие здесь!!!
b9.onclick = t9;

// Task 10 ============================================
//  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.
const b10 = document.querySelector('.b-10');
const out10 = document.querySelector('.out-10');

function t10() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      func(xhr.responseText);
    }
  };

  function func(resp) {
    out10.textContent = resp;
  }

  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1',
    true
  );
  xhr.send();

  out10.textContent = '...loading...';
}

b10.onclick = t10;

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */
const b11 = document.querySelector('.b-11');
const out11 = document.querySelector('.out-11');

function t11() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) {
      alert(`${this.status}: ${this.statusText}`);
    } else {
      func(this.responseText);
    }
  };

  function func(resp) {
    out11.textContent = resp;
  }

  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=Adel',
    true
  );
  xhr.send();

  out11.textContent = '...loading...';
}

// ваше событие здесь!!!
b11.onclick = t11;

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/
const b12 = document.querySelector('.b-12');
const out12 = document.querySelector('.out-12');
function t12() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status !== 200) {
      alert(`${xhr.status}: ${xhr.statusText}`);
    } else {
      func(xhr.responseText);
    }
  };
  function func(resp) {
    out12.textContent = resp;
  }
  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=22&num2=55',
    true
  );
  xhr.send();
  out12.textContent = '...loading...';
}

// ваше событие здесь!!!
b12.onclick = t12;

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/
const b13 = document.querySelector('.b-13');
const out13 = document.querySelector('.out-13');

function t13() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      alert(`${this.status}: ${this.statusText}`);
    } else {
      func(this.responseText);
    }
  };
  function func(resp) {
    out13.textContent = resp;
  }
  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=22&num2=55',
    true
  );
  xhr.send();

  out13.textContent = '...loading...';
}

// ваше событие здесь!!!
b13.onclick = t13;

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/
const b14 = document.querySelector('.b-14');
const out14 = document.querySelector('.out-14');
function t14() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      alert(`${this.status}: ${this.statusText}`);
    } else {
      func(this.responseText);
    }
  };
  function func(resp) {
    out14.textContent = resp;
  }
  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5',
    true
  );
  xhr.send();

  out14.textContent = '...loading...';
}

// ваше событие здесь!!!
b14.onclick = t14;

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */
const b15 = document.querySelector('.b-15');
const out15 = document.querySelector('.out-15');
function t15() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      alert(`${this.status}: ${this.statusText}`);
    } else {
      func(this.responseText);
    }
  };
  function func(resp) {
    out15.textContent = resp;
  }

  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=22&num2=55',
    true
  );
  xhr.send();

  out15.textContent = '...loading...';
}

// ваше событие здесь!!!
b15.onclick = t15;
// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */
const b16 = document.querySelector('.b-16');
const out16 = document.querySelector('.out-16');
function t16() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      alert(`${this.status}: ${this.statusText}`);
    } else {
      func(this.responseText);
    }
  };
  function func(resp) {
    out16.innerHTML = `<img src=${resp} width=70px?>`;
  }
  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7',
    true
  );
  xhr.send();

  out16.textContent = '...loading...';
}

// ваше событие здесь!!!
b16.onclick = t16;
// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */
const b17 = document.querySelector('.b-17');
const out17 = document.querySelector('.out-17');
function t17() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      alert(`${this.status}: ${this.statusText}`);
    } else {
      func(this.responseText);
    }
  };
  function func(resp) {
    out17.textContent = resp;
  }
  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1974',
    true
  );
  xhr.send();
  out17.textContent = '...loading...';
}

// ваше событие здесь!!!
b17.onclick = t17;

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */
const b18 = document.querySelector('.b-18');
const out18 = document.querySelector('.out-18');
function t18() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      alert(`${this.status}: ${this.statusText}`);
    } else {
      func(this.responseText);
    }
  };

  function func(resp) {
    out18.textContent = resp;
  }
  xhr.open(
    'POST',
    'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=9&m=1,&d=1,&y=1',
    true
  );
  xhr.send();
  out18.textContent = '...loading...';
}

// ваше событие здесь!!!
b18.onclick = t18;
