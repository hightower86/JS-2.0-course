const body = document.querySelector('body');
// Task 1. --------------------

const a = 7;
const b = 9;
console.log(a * b);

// Task 2.---------------
const c = 7;
const d = 9;
const result2 = document.querySelector('.result2');
result2.innerHTML += c / d;

// Task 3.------------------
const e = 3;
const f = 5;
const result3 = document.querySelector('.result3');
result3.innerHTML += e + f;

// Task 4.---------
const e1 = '3';
const f1 = 5;
const result4 = document.querySelector('.result4');
result4.innerHTML += e1 + f1;
//так как первая переменная строкого типа, то
//действия с остальными переменными js производит как со строками,
//поэтому в результате получаем строку "35"

// Task 5.----------------------
const e2 = 3;
const f2 = 0;
const result5 = document.querySelector('.result5');
result5.innerHTML += e2 / f2;

// Task 6.------------------
const e3 = 3;
const f3 = 'Hello';
const result6 = document.querySelector('.result6');
result6.innerHTML += e3 + f3;

// Task 7.-----------------------
const e4 = 3;
const f4 = 'Hello';
const result7 = document.querySelector('.result7');
result7.innerHTML += e4 * f4;

// Task 8.---------------
const inp8 = document.querySelector('.inp8');
const btn8 = document.querySelector('.btn8');

btn8.onclick = () => {
  console.log(inp8.value);
};

// Task 9.----------------

const inp9 = document.querySelector('.inp9');
const btn9 = document.querySelector('.btn9');
const result9 = document.querySelector('.result9');

btn9.onclick = function() {
  result9.innerHTML += inp9.value;
  inp9.value = '';
};

// Task 10 ---------------
const inp10 = document.querySelector('.inp10');
const btn10 = document.querySelector('.btn10');
const result10 = document.querySelector('.result10');

btn10.onclick = () => {
  result10.innerHTML += inp10.value * 10;
};

// Task 11 ---------------
const inp11 = document.querySelector('.inp11');
const btn11 = document.querySelector('.btn11');
const result11 = document.querySelector('.result11');

btn11.onclick = () => (result11.innerHTML = +inp11.value + 10);

// Task 12 ----------------

const inp12 = document.querySelector('.inp12');
const inp122 = document.querySelector('.inp122');
const btn12 = document.querySelector('.btn12');
const result12 = document.querySelector('.result12');

btn12.onclick = () =>
  (result12.innerHTML = `Hello ${inp12.value}  ${inp122.value}`);

// Task 13 ----------------
const inp13 = document.querySelector('.inp13');
const inp132 = document.querySelector('.inp132');
const btn13 = document.querySelector('.btn13');
const result13 = document.querySelector('.result13');

btn13.onclick = () => (result13.innerHTML = +inp13.value + +inp132.value);

// Task 14 ----------------
const inp14 = document.querySelector('.inp14');
inp14.value = 'Hello';

// Task 15 ----------------
const y = document.querySelector('.inp15');
y.style.border = '2px solid red';

// Task 16 ----------------
const inp16 = document.querySelector('.inp16');
const inp161 = document.querySelector('.inp161');
const btn16 = document.querySelector('.btn16');
const result16 = document.querySelector('.result16');

btn16.onclick = () => (result16.innerHTML = +inp16.value + +inp161.value);

// Task 17 ----------------
const inp17 = document.querySelector('.inp17');
const btn17 = document.querySelector('.btn17');

btn17.onclick = () => {
  let t = inp17.value;
  t = parseInt(t);
  console.log(t);
};

// Task 18 ----------------
const inp18 = document.querySelector('.inp18');
const btn18 = document.querySelector('.btn18');

btn18.onclick = () => {
  let t = inp18.value;
  t = parseFloat(t);
  console.log(t);
};

// Task 19 ----------------
const inp19 = document.querySelector('.inp19');
const inp191 = document.querySelector('.inp191');
const btn19 = document.querySelector('.btn19');
const result19 = document.querySelector('.result19');

btn19.onclick = () => (result19.innerHTML = +inp19.value + +inp191.value);

// Task 19 ----------------
const name20 = document.querySelector('.name20');
const fName = document.querySelector('.fName20');
const age = document.querySelector('.age20');
const profession = document.querySelector('.proff20');
const btn20 = document.querySelector('.btn20');

btn20.onclick = function() {
  body.innerHTML += `Dear ${name20.value} ${fName.value}, your age is ${age.value}, your profession is ${profession.value}`;
};
