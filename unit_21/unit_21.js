// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
  document.querySelector('.out-1').textContent += 'touch ';
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('touchstart', t1);
// document.querySelector('.div-1').addEventListener('click', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2(e) {
  console.log(e);
  document.querySelector('.out-2').textContent = e.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('touchstart', t2);
// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
  document.querySelector('.out-3').textContent = e.target.innerHTML[2];
}

// ваше событие здесь!!!
document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);
// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
const div4 = document.querySelector('.div-4');
function t4() {
  document.querySelector('.out-4').textContent += 'touch';
}

// ваше событие здесь!!!
document.querySelector('.b-4').onclick = () =>
  div4.addEventListener('touchstart', t4);

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
  div4.removeEventListener('touchstart', t4);
}

// ваше событие здесь!!!
document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */
function t6() {
  document.querySelector('.out-6').textContent += 'touchend ';
}
// ваше событие здесь!!!
div4.ontouchend = t6;

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
const div7 = document.querySelector('.div-7');
function t7() {
  div7.style.backgroundColor = 'red';
}

// ваше событие здесь!!!
div7.addEventListener('touchstart', t7);
// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
const div8 = document.querySelector('.div-8');
function t8() {
  const colors = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];
  const randomColor = colors[Math.floor(Math.random(0, colors.length) * 10)];
  div8.style.backgroundColor = randomColor;
}

// ваше событие здесь!!!
div8.addEventListener('touchstart', t8);

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(e) {
  document.querySelector('.out-9').textContent = e.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-9').ontouchstart = t9;
// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
const div10 = document.querySelector('.div-10');
let w = div10.offsetWidth;
function t10(e) {
  w++;
  div10.style.width = `${w}px`;
}

// ваше событие здесь!!!
div10.addEventListener('touchmove', t10);
// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
  document.querySelector(
    '.out-11'
  ).textContent = `${e.touches[0].radiusX} -- ${e.touches[0].radiusY}`;
}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener('touchstart', t11);
// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/
const img12mins = document.querySelectorAll('.img-12-min');
const div12max = document.querySelector('.div-12-max');
const p12 = document.querySelector('.img-12-text');
const out11 = document.querySelector('.out-11');
const bNext = document.querySelector('.next');
const bPrev = document.querySelector('.prev');
const bReset = document.querySelector('.reset');

const a = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
console.log(div12max.children[0].src);

function t12(e) {
  //console.log(e.target.src);
  resetActive();
  e.target.classList.add('active-img');
  div12max.children[0].src = e.target.src;
  //console.log('touch working');
}

function resetActive() {
  img12mins.forEach(img => {
    img.classList.remove('active-img');
  });
}

function reset() {
  resetActive();
  let i = 0;
  img12mins.forEach(img => {
    //console.log(img);
    if (i === 0) {
      img.classList.add('active-img');
      div12max.children[0].src = `img/${a[i]}`;
    }
    img.src = `img/${a[i]}`;
    i++;
  });
}

function onNextClick() {
  const activeImg = document.querySelector('.active-img');
  console.log(img12mins[0]);
  const idxOfActive = Array.from(img12mins).indexOf(activeImg);
  console.log(idxOfActive, img12mins.length);

  const nextElement =
    idxOfActive < img12mins.length - 1
      ? activeImg.nextElementSibling
      : img12mins[0];

  console.log(nextElement);

  activeImg.classList.remove('active-img');
  nextElement.classList.add('active-img');

  div12max.children[0].src = nextElement.src;
  console.log(Array.from(img12mins).indexOf(nextElement));
}

reset(); // первоначальное состояние при загрузке страницы

// ваше событие здесь!!!

img12mins.forEach(img12 => {
  img12.addEventListener('touchstart', t12);
});

bReset.onclick = reset;

bNext.onclick = onNextClick;
