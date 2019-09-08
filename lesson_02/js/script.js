const a = 7;
const b = 9;
console.log(a * b);

const c = 7;
const d = 9;
let body = document.querySelector('body');
body.innerHTML += c / d;

body.innerHTML += '<hr>';
const e = 3;
const f = 5;
body.innerHTML += e + f;

body.innerHTML += '<hr>';
const e1 = '3';
const f1 = 5;
body.innerHTML += e1 + f1;

body.innerHTML += '<hr>';
const e2 = 3;
const f2 = 0;
body.innerHTML += e2 / f2;

body.innerHTML += '<hr>';
const e3 = 3;
const f3 = 'Hello';
body.innerHTML += e3 + f3;

body.innerHTML += '<hr>';
const e4 = 3;
const f4 = 'Hello';
body.innerHTML += e4 * f4;

body.innerHTML += '<hr>';
body.innerHTML += '<input>';
body.innerHTML += '<button>GO</<button>';

document.querySelector('button').onclick = function() {
  console.log(document.querySelector('input').value);
};

body.innerHTML += '<hr>';
body.innerHTML += '<input class="inp1">';
body.innerHTML += '<button class="btn1">GO-GO</<button>';
let inp1 = document.querySelector('.inp1');

document.querySelector('.btn1').onclick = function() {
  body.innerHTML += inp1.value;
  inp1.value = '';
};

body.innerHTML += '<hr>';
body.innerHTML += '<input class="inp2">';
body.innerHTML += '<button class="btn2">TASK-10</<button>';
let inp2 = document.querySelector('.inp2');

document.querySelector('.btn2').onclick = function() {
  body.innerHTML += inp2.value * 10;
  inp2.value = '';
};

body.innerHTML += '<hr>';
body.innerHTML += '<input class="inp3">';
body.innerHTML += '<button class="btn3">TASK-11</<button>';
let inp3 = document.querySelector('.inp3');

document.querySelector('.btn3').onclick = function() {
  body.innerHTML += inp3.value + 10;
  inp3.value = '';
};

body.innerHTML += '<hr>';
body.innerHTML += '<input class="name">';
body.innerHTML += '<input class="familyName">';

body.innerHTML += '<button class="btn4">TASK-12</<button>';
let name = document.querySelector('.name');
let familyName = document.querySelector('.familyName');

document.querySelector('.btn4').onclick = function() {
  body.innerHTML += `Hello ${name.value} ${familyName.value}`;
};

body.innerHTML += '<hr>';
body.innerHTML += '<input class="num1">';
body.innerHTML += '<input class="num2">';

body.innerHTML += '<button class="btn5">TASK-13</<button>';
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');

document.querySelector('.btn5').onclick = function() {
  body.innerHTML += +num1.value + +num2.value;
};

body.innerHTML += '<hr>';
body.innerHTML += '<input class="task14" value="77">';
const inp14 = document.querySelector('.task14');
inp14.value = 'Hello';

body.innerHTML += '<hr>';
body.innerHTML += '<input class="inp15">';
let y = document.querySelector('.inp15');
y.style.border = '2px solid red';

body.innerHTML += '<hr>';
body.innerHTML += '<input class="inp16" type="number">';
body.innerHTML += '<input class="inp161" type="number">';
body.innerHTML += '<br>';
body.innerHTML += '<button class="btn16">SUM</button>';

let inp16 = document.querySelector('.inp16');
let inp161 = document.querySelector('.inp161');
let btn16 = document.querySelector('.btn16');

btn16.onclick = function() {
  body.innerHTML += +inp16.value + +inp161.value;
};

body.innerHTML += '<hr>';
body.innerHTML += '<br>';
body.innerHTML += '<h3>Task 17</h3>';

body.innerHTML += '<input class="inp17" type="text">';
body.innerHTML += '<button class="btn17">parseInt</button>';

let inp17 = document.querySelector('.inp17');
let btn17 = document.querySelector('.btn17');

btn17.onclick = function() {
  let t = inp17.value;
  t = parseInt(t);
  console.log(t);
};

body.innerHTML += '<hr>';
body.innerHTML += '<br>';
body.innerHTML += '<h3>Task 18</h3>';

body.innerHTML += '<input class="inp18" type="text">';
body.innerHTML += '<button class="btn18">parseFloat</button>';

let inp18 = document.querySelector('.inp18');
let btn18 = document.querySelector('.btn18');

btn18.onclick = function() {
  let t = inp18.value;
  t = parseFloat(t);
  console.log(t);
};

body.innerHTML += '<hr>';
body.innerHTML += '<br>';
body.innerHTML += '<h3>Task 19</h3>';

body.innerHTML += '<hr>';
body.innerHTML += '<input class="inp19" type="number">';
body.innerHTML += '<input class="inp191" type="number">';
body.innerHTML += '<br>';
body.innerHTML += '<button class="btn19">SUM</button>';

let inp19 = document.querySelector('.inp19');
let inp191 = document.querySelector('.inp191');
let btn19 = document.querySelector('.btn19');

btn19.onclick = function() {
  body.innerHTML += +inp19.value + +inp191.value;
};

body.innerHTML += '<hr>';
body.innerHTML += '<br>';
body.innerHTML += '<h3>Task 20</h3>';

body.innerHTML += '<input placeholder="Name:" class="name20">';
body.innerHTML += '<input placeholder="Family name:" class="fName20">';
body.innerHTML += '<input placeholder="age:" class="age20">';
body.innerHTML += '<input placeholder="Profession:" class="proff20">';
body.innerHTML += '<button class="btn20">TASK 20</button>';

body.innerHTML += '<br>';
let name20 = document.querySelector('.name20');
let fName = document.querySelector('.fName20');
let age = document.querySelector('.age20');
let profession = document.querySelector('.proff20');
let btn20 = document.querySelector('.btn20');

btn20.onclick = function() {
  body.innerHTML += `Dear ${name20.value} ${fName.value}, your age is ${age.value}, your profession is ${profession.value}`;
};
