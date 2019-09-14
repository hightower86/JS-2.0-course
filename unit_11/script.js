// task 1 --------------------
const btn1 = document.querySelector('.btn1');
const array = [77, 2, 'atom', true, 'b', false, 123];

btn1.onclick = () => console.log(array);

// task 2 ----------------------
const btn2 = document.querySelector('.btn2');
const div2 = document.querySelector('.div2');

btn2.onclick = () => (div2.innerHTML = array);

// task 3 -----------------------
const btn3 = document.querySelector('.btn3');
const a = [2, 'hello', 17, 34, 'privet'];
btn3.onclick = () => console.log(a.length);

// task 4 ------------------------
const btn4 = document.querySelector('.btn4');
btn4.onclick = () => console.log(a[0], a[3], a[8]);
// восьмой элемент находится за пределами массива
// поэтщму js возвращает -неопределено-

// task 5 -------------------------
const btn5 = document.querySelector('.btn5');
btn5.onclick = () => console.log(a[0] + a[2] + a[3]);

// task 6 -------------------------
const btn6 = document.querySelector('.btn6');
const div6 = document.querySelector('.div6');
const a6 = ['Adel', 'Lion', 26, 7];

btn6.onclick = () => {
  div6.innerHTML = a6;
};

// task 7 ------------------------------
const btn7 = document.querySelector('.btn7');
const div7 = document.querySelector('.div7');
let b = ['one', 1, 2, 'two'];
b.push('hi', 'foo', 'bar');
btn7.onclick = () => (div7.innerHTML = b);

// task 8 ------------------------------
const btn8 = document.querySelector('.btn8');
const div8 = document.querySelector('.div8');
let a8 = ['one', 1, 2, 'two'];
a8.splice(2, 0, 3.14);
a8.splice(3, 0, 17);
a8.splice(5, 0, 5);
btn8.onclick = () => {
  div8.innerHTML = a8;
  div8.innerHTML += `  length: ${a8.length}`;
  console.log(a8, a8.length);
};
