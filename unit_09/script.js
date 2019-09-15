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
console.log(pu5s);
for (let i = 0; i < pu5s.length; i++) {
  const pu5 = pu5s[i];
  pu5.onclick = func_5;
}
