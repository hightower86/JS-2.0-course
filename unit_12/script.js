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

// task 7 -----------------------------

// task 8 --------------------------------

// task 9 --------------------------

// task 10 ----------------------------

// task 11 ------------------------------

// task 12 ------------------------------

// task 13 ------------------------------

// task 14 ---------------------------

// task 15 ------------------------------

// task 17 ----------------------------------

// task 18 -------------------------------

// task 19 ----------------------------------

// task 20 ----------------------------------
