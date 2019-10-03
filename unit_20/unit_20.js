// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
const i1 = document.querySelector('.i-1');
function t1(e) {
  const symb = e.key;
  document.querySelector('.out-1').textContent = symb;
  return symb;
}

// ваше событие здесь!!!
i1.onkeypress = t1;
// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
  document.querySelector('.out-2').textContent = e.keyCode;

  return e.keyCode;
}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeypress = t2;
// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

function t3(e) {
  const out3 = document.querySelector('.out-3');
  if (e.code.includes('Digit')) {
    out3.textContent = false;
  } else if (e.code.includes('Key')) {
    out3.textContent = true;
  }
  //const out3 = document.querySelector('.out-3');
}

// ваше событие здесь!!!
document.querySelector('.i-3').onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(e) {
  document.querySelector('.out-4').textContent += e.key.toLowerCase();
}

// ваше событие здесь!!!
document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(e) {
  document.querySelector('.out-5').textContent += e.key.toUpperCase();
}

// ваше событие здесь!!!
document.querySelector('.i-5').onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
const i6 = document.querySelector('.i-6');
function t6(e) {
  i6.value = i6.value.toLowerCase();
}

// ваше событие здесь!!!
i6.oninput = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
  const a7 = ['a', 'e', 4, 'r', 6, 'v', 9, '3'];
  document.querySelector('.out-7').textContent +=
    a7[Math.floor(Math.random() * a7.length)];
}

// ваше событие здесь!!!
document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
  let tc = '';
  switch (e.key) {
    case 'i':
      tc += 1;
      break;
    case 'o':
      tc += 0;
      break;
    case 'l':
      tc += 7;
      break;

    default:
      tc += e.key;
      break;
  }
  document.querySelector('.out-8').textContent += tc;
}

// ваше событие здесь!!!
document.querySelector('.i-8').onkeypress = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let counter = 0;
function t9(e) {
  counter += e.code === 40 || e.which === 40 ? 1 : 0;
  document.querySelector('.out-9').textContent = counter;
}

// ваше событие здесь!!!
document.querySelector('.i-9').onkeydown = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
const img = document.querySelector('img');
let w10 = img.clientWidth;
let h10 = img.clientHeight;

function t10(e) {
  if (e.key == 'ArrowDown' || e.key == 'ArrowUp') {
    img.style.height = `${h10++}px`;
  }
  if (e.key == 'ArrowLeft' || e.key == 'ArrowRight') {
    img.style.width = `${w10++}px`;
  }
}

// ваше событие здесь!!!
document.querySelector('.i-10').onkeydown = t10;
// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */
const keys = document.querySelectorAll('.key');

function t11(e) {
  const keyCode = e.keyCode || e.which;
  const key = document.querySelector(`.key[data="${keyCode}"`);
  key.classList.toggle('pressed');
}
function t12(e) {
  const keyCode = e.keyCode || e.which;
  const key = document.querySelector(`.key[data="${keyCode}"`);
  key.classList.toggle('pressed');
}
// ваше событие здесь!!!
document.querySelector('.i-11').onkeydown = t11;
document.querySelector('.i-11').onkeyup = t12;
