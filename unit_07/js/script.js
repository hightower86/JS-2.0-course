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

show2('Sergey');

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

const f5 = () => {
  return inp5.value;
};

//inp5.oninput = () => console.log(f5());

// task 6 ------------------------
const f6 = (num1, num2) => {
  return num1 >= num2 ? num1 : num2;
};

// task 7 ------------------------
const f7 = year => {
  return 2019 - year;
};

// task 8 ------------------------
const f8 = () => {
  return Math.floor(Math.random() * 10);
};

// task 9 ------------------------
const f9 = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// task 10 ------------------------
const f10 = () => `rgb(${f9(0, 255)},${f9(0, 255)},${f9(0, 255)})`;

// task 11 ------------------------
const f11 = () => 5;

const newF11 = (a, b) => a * b;
console.log(newF11(f11(), 10));

// task 12 ----------------------
const toNum = inp => +inp.value;

// task 13 ----------------------
const f13 = inp => {
  const val = inp.value.trim();
  return val === '' ? false : val;
};

// task 14 ----------------------
const isEven = num => num % 2 === 0;

// task 15 ----------------------
const div15 = document.querySelector('.task15');
div15.onmousemove = () => console.log('move');
