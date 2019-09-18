// task 1 --------------------
const a = [[1, 2, 3], ['a', 'b', 'c'], [4, 5, 6], ['d', 'e', 'f'], [7, 8, 9]];
const btn1 = document.querySelector('.btn1');
const div1 = document.querySelector('.div1');

let out1 = '';
btn1.onclick = () => {
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      out1 += `${a[i][k]} `;
    }
    out1 += '<br>';
  }
  div1.innerHTML = out1;
  out1 = '';
};

// task 2 ---------------------------
const div2 = document.querySelector('.div2');
const btn2 = document.querySelector('.btn2');

btn2.onclick = () => (div2.innerHTML = a[0][2]);

// task 3 ----------------------------
const div3 = document.querySelector('.div3');
const btn3 = document.querySelector('.btn3');

btn3.onclick = () => (div3.innerHTML = a[3][1]);

// task 4 ------------------------------
const div4 = document.querySelector('.div4');
const btn4 = document.querySelector('.btn4');

btn4.onclick = () => (div4.innerHTML = a[2]);

// task 5 ------------------------------
const div5 = document.querySelector('.div5');
const btn5 = document.querySelector('.btn5');

btn5.onclick = () => {
  div5.innerHTML = '';
  for (let i = 0; i < a.length; i++) {
    div5.innerHTML += a[i][0];
  }
};

// task 6 -----------------------------
const div6 = document.querySelector('.div6');
const btn6 = document.querySelector('.btn6');

btn6.onclick = () => {
  div6.innerHTML = '';
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      div6.innerHTML += a[i] + '<br>';
    }
  }
};

// task 7 -----------------------------
const div7 = document.querySelector('.div7');
const btn7 = document.querySelector('.btn7');

btn7.onclick = () => {
  div7.innerHTML = '';
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      const el = a[i][k];
      if (typeof el === 'number') {
        div7.innerHTML += el;
      }
    }
  }
};

// task 8 --------------------------------
const div8 = document.querySelector('.div8');
const btn8 = document.querySelector('.btn8');

btn8.onclick = () => {
  div8.innerHTML = '';
  for (let i = 0; i < a.length; i++) {
    div8.innerHTML += a[i].length + ' ';
  }
};

// task 9 --------------------------
const div9 = document.querySelector('.div9');
const btn9 = document.querySelector('.btn9');
let out9 = '';

btn9.onclick = () => {
  for (let i = a.length - 1; i >= 0; i--) {
    for (let k = a[i].length - 1; k >= 0; k--) {
      out9 += a[i][k] + ' ';
    }
  }
  div9.innerHTML = out9;
};

// task 10 ----------------------------
const div10 = document.querySelector('.div10');
const btn10 = document.querySelector('.btn10');
let out10 = '';

btn10.onclick = () => {
  for (let i = 0; i < a.length; i++) {
    for (let k = a[i].length - 1; k >= 0; k--) {
      out10 += a[i][k] + ' ';
    }
    out10 += '<br>';
  }
  div10.innerHTML = out10;
};

// task 11 ------------------------------

// task 12 ------------------------------

// task 13 ------------------------------

// task 14 ---------------------------

// task 15 ------------------------------

// task 17 ----------------------------------

// task 18 -------------------------------

// task 19 ----------------------------------

// task 20 ----------------------------------
