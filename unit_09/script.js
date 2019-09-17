// task 1 --------------------
const pu1 = document.querySelector('.u-1');
const btn1 = document.querySelector('.btn1');

const func_1 = () => {
  pu1.style.width = '200px';
};

btn1.onclick = () => func_1();

// task 2 ------------------------
const btn2 = document.querySelector('.btn2');
const div2 = document.querySelector('.div2');
const pu2 = document.createElement('p');
div2.appendChild(pu2);
pu2.textContent = '<p class="u-2"></p>';

btn2.onclick = function() {
  pu2.classList.add('css-1');
};

// task 3 ------------------------
const div3 = document.querySelector('.div3');
for (let i = 0; i < 3; i++) {
  const p = document.createElement('p');
  div3.appendChild(p);
  p.textContent = `p - ${i}`;
  p.onclick = function() {
    this.style.backgroundColor = 'red';
  };
}

// task 4 ------------------------
const div4 = document.querySelector('.div4');

const func_4 = function() {
  this.classList.add('css-2');
};

for (let i = 0; i < 4; i++) {
  const pu4 = document.createElement('p');
  pu4.classList.add('u-4');
  pu4.textContent = 'pu4';
  pu4.onclick = func_4;

  div4.appendChild(pu4);
}

// task 5 ----------------------------
const div5 = document.querySelector('.div5');
function func_5() {
  console.log('func5');
  this.classList.remove('css-3');
}
for (let i = 0; i < 3; i++) {
  const p = document.createElement('p');
  p.textContent = 'p-u-5';
  p.classList.add('css-3', 'pu-5');
  div5.appendChild(p);
}

const pu5s = document.querySelectorAll('.pu-5');
for (let i = 0; i < pu5s.length; i++) {
  const pu5 = pu5s[i];
  pu5.onclick = func_5;
}

// task 6 --------------------------
const btn6 = document.querySelector('.btn6');
const onClick6 = function() {
  this.classList.toggle('active');
};
btn6.onclick = onClick6;

// task 7 ----------------------------
const btn7 = document.querySelector('.btn7');

function func_7() {
  console.log(document.querySelectorAll('.css-3').length);
}
btn7.onclick = func_7;

// task 8 --------------------------
const btn8 = document.querySelector('.btn8');
const u1s = document.querySelectorAll('.u-1');

function func_8() {
  for (let i = 0; i < u1s.length; i++) {
    const u1 = u1s[i];
    u1.setAttribute('title', 'test-data');
  }
}

btn8.onclick = func_8;

// task 9 ------------------------
const buttons9 = document.querySelectorAll('.u-9');

for (let i = 0; i < buttons9.length; i++) {
  const button = buttons9[i];
  button.onclick = function() {
    console.log(this.getAttribute('data'));
  };
}

// task 10 --------------------------------
const btns10 = document.querySelectorAll('.u-10');
const out10 = document.querySelector('.u-10_out');

function func10() {
  out10.innerHTML = this.getAttribute('data-currency');
}

for (let i = 0; i < btns10.length; i++) {
  const btn = btns10[i];

  btn.onclick = func10;
}

// task 11 ------------------------------
const out11 = document.querySelector('.u-11_out');
const btns11 = document.querySelectorAll('.u-11_button');
const inp11 = document.querySelector('.u-11_input');

function func_11() {
  out11.innerHTML = this.getAttribute('data-currency') * +inp11.value;
}

for (let i = 0; i < btns11.length; i++) {
  const btn = btns11[i];
  btn.onclick = func_11;
}

// task 12 ----------------------------
const div12 = document.querySelector('.div12');
const btn12 = document.querySelector('.btn12');

function func_12() {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = 'newDiv';
  newDiv.classList.add('css-4');
  return newDiv;
}

btn12.onclick = () => {
  div12.appendChild(func_12());
};

// task 13 ---------------------
const div13 = document.querySelector('.div13');
const btn13 = document.querySelector('.btn13');
const u13 = document.querySelector('.u-13');

function func_13() {
  const span13 = document.createElement('span');
  span13.textContent = ' 13 ';
  span13.classList.add('span-13');
  u13.append(span13);
}

btn13.onclick = func_13;

// task 14 ------------------------
const div14 = document.querySelector('.div14');
const btn14 = document.querySelector('.btn14');
const pu14 = document.createElement('p');
pu14.classList.add('u-14');
div14.appendChild(pu14);

function func_14() {
  console.log('func');
  const span14 = document.createElement('span');
  span14.classList.add('span-14');
  span14.textContent = ' 14 ';
  pu14.prepend(span14);
}

btn14.onclick = func_14;

// task 15 ------------------------------
const btn15 = document.querySelector('.btn15');
const div15 = document.querySelector('.div15');
const p15 = document.querySelector('.u-15');

function func_15() {
  const span = document.createElement('span');
  span.classList.add('span-15');
  span.textContent = ' 15 ';
  p15.before(span);
}

btn15.onclick = func_15;

// task 16 ----------------------------
div16 = document.querySelector('.div16');
btn16 = document.querySelector('.btn16');

function func_16() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Push';
  btn.onclick = () => {
    console.log('u-16');
  };
  div16.appendChild(btn);
}

btn16.onclick = func_16;

// task 17 ----------------------------
const task17 = document.querySelector('.task-17');
const u17 = document.querySelector('.u-17');
const btn17 = document.querySelector('.btn17');

const func_17 = () => {
  const p17 = document.createElement('p');
  p17.textContent = '17';
  task17.replaceChild(p17, u17);
};

btn17.onclick = func_17;

// task 18 --------------------------
const out18 = document.querySelector('.out-18');
const btn18 = document.querySelector('.btn18');

function func_18() {
  this.remove();
}

outs18 = document.querySelectorAll('.out-18');
for (let i = 0; i < outs18.length; i++) {
  const div18 = outs18[i];
  div18.onclick = func_18;
}

// task 19 ----------------------------
const div19 = document.querySelector('.div19');
const btn19 = document.querySelector('.btn19');
const ul19 = document.querySelector('.ul-19');

const func_19 = str => {
  const li = document.createElement('li');
  li.textContent = str;
  ul19.appendChild(li);
};

btn19.onclick = () => func_19('new li');

// task 20 ------------------------------

const div20 = document.querySelector('.div20');
const btn20 = document.querySelector('.btn20');
const ul20 = document.querySelector('.ul-20');
const inp20 = document.querySelector('.inp20');
const box20 = document.querySelector('.box20');

const func_20 = (str, box) => {
  const li = document.createElement('li');
  li.textContent = str;
  if (box) {
    li.classList.add('css-5');
  }
  ul20.appendChild(li);
};

btn20.onclick = () => func_20(inp20.value, box20.checked);
