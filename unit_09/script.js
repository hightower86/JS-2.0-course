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
