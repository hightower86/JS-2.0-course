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
