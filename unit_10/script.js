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

// task 9 ------------------------------
const btn9 = document.querySelector('.btn9');
a9 = [1, 23, 456, 23, 45, 9, 10, 'a', 'tnt', false];
btn9.onclick = () => {
  console.log(a9[2]);
  console.log(a9[6]);
  console.log(a9);
};

// task 10 --------------------------------
const btn10 = document.querySelector('.btn10');
const div10 = document.querySelector('.div10');
a10 = [1, , , , 45, , , , , false];
btn10.onclick = () => {
  div10.innerHTML = a10;
  div10.innerHTML += `  length = ${a10.length}`;
  console.log(a10, a10.length);
};

// task 11 --------------------------
const btn11 = document.querySelector('.btn11');
const c = [77, 88, 99, 66];

btn11.onclick = () => {
  const a = c[0];
  c[0] = c[2];
  c[2] = a;
  console.log(c);
};

// task 12 --------------------------
const btn12 = document.querySelector('.btn12');

const changeArray = array => {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  array[0] = lastElement;
  array[array.length - 1] = firstElement;
  console.log(array);
};

btn12.onclick = () => changeArray([1, 2, 3, 4, 5, 6]);

// task 13 --------------------------
const btn13 = document.querySelector('.btn13');
const div13 = document.querySelector('.div13');
const d = ['y', 4, 22, 'o'];

btn13.onclick = () => {
  for (let index = 0; index < d.length; index++) {
    div13.innerHTML += element = d[index] + ' ';
  }
};

// task 14 ------------------------
const btn14 = document.querySelector('.btn14');
const div14 = document.querySelector('.div14');
const e = [1, 2, 3, 'hello', 66];

btn14.onclick = () => {
  div14.innerHTML = '';
  for (let i = e.length - 1; i >= 0; i--) {
    div14.innerHTML += `${e[i]} `;
  }
};

// task 15 ----------------------------
const btn15 = document.querySelector('.btn15');
const div15 = document.querySelector('.div15');
const d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
btn15.onclick = () => {
  for (let i = 0; i < d15.length; i++) {
    const el = d15[i];
    div15.innerHTML += el > 0 ? `${el} ` : '';
  }
};

// task 16 ------------------------------
const btn16 = document.querySelector('.btn16');
const div16 = document.querySelector('.div16');

btn16.onclick = () => {
  const [a1, a2] = [[], []];
  for (let i = 0; i < d15.length; i++) {
    const el = d15[i];
    if (el % 2 === 0) {
      a1.push(el);
    } else {
      a2.push(el);
    }
  }
  div16.innerHTML = `четные: ${a1} `;
  div16.innerHTML += ` НЕчетные: ${a2}`;
};

// task 17 -----------------------------
const btn17 = document.querySelector('.btn17');
let e17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
btn17.onclick = () => {
  let zeros = 0;
  for (let i = 0; i < e17.length; i++) {
    const elem = e17[i];
    zeros += elem === 0 ? 1 : 0;
  }
  console.log(zeros);
};

// task 18 ------------------------------
const btn18 = document.querySelector('.btn18');
btn18.onclick = () => {
  let max = e17[0];
  for (let i = 0; i < e17.length; i++) {
    const elem = e17[i];
    max = elem > max ? elem : max;
  }
  console.log(max);
};

// task 19 ----------------------------
const btn19 = document.querySelector('.btn19');
let f = [-3, 0, 45, 22, 123, -485, 98, 34];

btn19.onclick = () => {
  let idx = 0;
  let max = f[0];
  for (let i = 0; i < f.length; i++) {
    const elem = f[i];
    if (elem > max) {
      idx = i;
      max = elem;
    }
  }
  console.log(idx);
};

// task 20 --------------------------
const btn20 = document.querySelector('.btn20');

btn20.onclick = () => {
  let i = 0;
  let sum = 0;
  while (i < f.length) {
    sum += f[i];
    i++;
  }
  console.log(sum);
};
