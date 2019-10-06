// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick. При срабатывании события  выводите в out-1 количество срабатываний события. В комментариях опишите результат. */
let c = 0;
function t1() {
  c++;
  document.querySelector('.out-1').textContent = c;
}

// ваше событие здесь!!!
document.querySelector('.div-1').onclick = t1;
//срабатывает нормально
// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick. При срабатывании события  выводите в out-2 количество срабатываний события. В комментариях опишите результат. */
let c2 = 0;
function t2() {
  //console.log('dblclick');
  c2++;
  document.querySelector('.out-2').textContent = c2;
}
//срабатывает нормально
// ваше событие здесь!!!
document.querySelector('.div-2').ondblclick = t2;
// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove. При срабатывании события выводите в out-3 количество срабатываний события. В комментариях опишите результат. */
let c3 = 0;
function t3() {
  c3++;
  document.querySelector('.out-3').textContent = c3;
}

// ваше событие здесь!!!
document.querySelector('.div-3').onmousemove = t3;
// работает хорошо

// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu. При срабатывании события выводите в out-4 количество срабатываний события. В комментариях опишите результат. */

let c4 = 0;
function t4() {
  c4++;
  document.querySelector('.out-4').textContent = c4;
}
// ваше событие здесь!!!
document.querySelector('.div-4').oncontextmenu = t4;
// работает корректно

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown. При срабатывании события выводите в out-5 количество срабатываний события. В комментариях опишите результат. */

let c5 = 0;
function t5() {
  c5++;
  document.querySelector('.out-5').textContent = c5;
}
// ваше событие здесь!!!
document.querySelector('.div-5').onmousedown = t5;
// срабатывает при клике

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter. При срабатывании события выводите в out-6 количество срабатываний события. В комментариях опишите результат. */

let c6 = 0;
function t6() {
  c6++;
  document.querySelector('.out-6').textContent = c6;
}
// ваше событие здесь!!!
document.querySelector('.div-6').onmouseenter = t6;
// срабатывает как ожидается

// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave. При срабатывании события выводите в out-7 количество срабатываний события. В комментариях опишите результат.*/

let c7 = 0;
function t7() {
  c7++;
  document.querySelector('.out-7').textContent = c7;
}
// ваше событие здесь!!!
document.querySelector('.div-7').onmouseleave = t7;
// срабатывает как ожидается

// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout. При срабатывании события выводите в out-8 количество срабатываний события. В комментариях опишите результат.*/

let c8 = 0;
function t8() {
  c8++;
  document.querySelector('.out-8').textContent = c8;
}
// ваше событие здесь!!!
document.querySelector('.div-8').onmouseout = t8;
// срабатывает так же как mouseleave

// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover. При срабатывании события выводите в out-9 количество срабатываний события. В комментариях опишите результат. */

let c9 = 0;
function t9() {
  c9++;
  document.querySelector('.out-9').textContent = c9;
}
// ваше событие здесь!!!
document.querySelector('.div-9').onmouseover = t9;
//   поведение как у mouseenter

// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup. При срабатывании события выводите в out-10 количество срабатываний события. В комментариях опишите результат.*/

let c10 = 0;
function t10() {
  c10++;
  document.querySelector('.out-10').textContent = c10;
}
// ваше событие здесь!!!
document.querySelector('.div-10').onmouseup = t10;
//   поведение при отжатии кнопки мыши
