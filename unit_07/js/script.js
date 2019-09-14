// task 1 --------------------
btn1 = document.querySelector('.btn1');

const showName = () => {
  console.log('Adel');
};
btn1.onclick = showName;

// task 2 --------------------------
btn2 = document.querySelector('.btn2');

const show2 = name => {
  console.log(name);
};

btn2.onclick = () => show2('Sergey');

// task 3 --------------------------
btn3 = document.querySelector('.btn3');

f3 = num => {
  console.log(num * 10);
};

btn3.onclick = () => f3(12);

// task 4 ------------------------
btn4 = document.querySelector('.btn4');
f4 = () => {
  btn4.style.background = 'red';
};

btn4.onclick = () => f4();

// task 5 ----------------------
const inp5 = document.querySelector('.inp5');
const btn5 = document.querySelector('.btn5');

const f5 = () => {
  return inp5.value;
};

btn5.onclick = () => console.log(f5());

// task 6 ------------------------
const btn6 = document.querySelector('.btn6');
const f6 = (num1, num2) => {
  return num1 >= num2 ? num1 : num2;
};
btn6.onclick = () => console.log(f6(5, 8));

// task 7 ------------------------
const btn7 = document.querySelector('.btn7');
const f7 = year => {
  return 2019 - year;
};
btn7.onclick = () => console.log(f7(1974));

// task 8 ------------------------
const btn8 = document.querySelector('.btn8');
const f8 = () => {
  return Math.floor(Math.random() * 10);
};
btn8.onclick = () => console.log(f8());

// task 9 ------------------------
const btn9 = document.querySelector('.btn9');
const f9 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
btn9.onclick = () => console.log(f9(2, 22));

// task 10 ------------------------
const btn10 = document.querySelector('.btn10');
const div10 = document.querySelector('.div10');
const f10 = () => `rgb(${f9(0, 255)},${f9(0, 255)},${f9(0, 255)})`;
btn10.onclick = () => {
  div10.style.background = f10();
  div10.innerHTML = f10();
};

// task 11 ------------------------
const btn11 = document.querySelector('.btn11');
const f11 = () => 5;

const newF11 = (a, b) => a * b;
btn11.onclick = () => console.log(newF11(f11(), 10));

// task 12 ----------------------
const btn12 = document.querySelector('.btn12');
const inp12 = document.querySelector('.inp12');

const toNum = inp => +inp.value;

btn12.onclick = () => console.log(toNum(inp12));

// task 13 ----------------------
const btn13 = document.querySelector('.btn13');
const inp13 = document.querySelector('.inp13');

const emptyInput = inp => {
  const val = inp.value.trim();
  return val.length === 0 ? false : val;
};

btn13.onclick = () => console.log(emptyInput(inp13));

// task 14 ----------------------
const btn14 = document.querySelector('.btn14');
const inp14 = document.querySelector('.inp14');

const isEven = num => num % 2 === 0;

btn14.onclick = () => console.log(isEven(+inp14.value));

// task 15 ----------------------
const div15 = document.querySelector('.div15');
div15.onmousemove = () => console.log('move');

// task 16 ----------------------
const div16 = document.querySelector('.div16');
div16.onmouseenter = () => console.log('enter');

// task 17 ------------------------

const div17 = document.querySelector('.div17');
div17.onmouseleave = () => console.log('leave');

// task 18 ------------------------

const div18 = document.querySelector('.div18');
div18.onclick = function() {
  this.style.background = 'red';
};

// task 19 ------------------------

const div19 = document.querySelector('.div19');
div19.onclick = () => {
  this.style.background = 'red';
};

// task 20 --------------------------
const divsGo = document.querySelectorAll('.go');

for (let i = 0; i < divsGo.length; i++) {
  const div = divsGo[i];
  div.onclick = function() {
    this.style.background = 'red';
  };
}
