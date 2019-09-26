// task 1 --------------------
const a1 = [5, 7, 9, 11, 13, 15];
const btn1 = document.querySelector('.btn1');
const div1 = document.querySelector('.div1');

btn1.onclick = () => {
  let out = '';
  for (let i = 0; i < a1.length; i++) {
    const element = a1[i];
    out += `${element}, `;
  }
  div1.innerHTML = out;
};

// task 2 ---------------------------
const div2 = document.querySelector('.div2');
const btn2 = document.querySelector('.btn2');
const sel2 = document.querySelector('.sel2');
const a2 = [5, 7, 9, 11, 13, 15];

btn2.onclick = () => {
  let out = '';
  for (let i = 0; i < a2.length; i++) {
    const element = a2[i];
    out += `${i}${sel2.value}${element}<br>`;
  }
  div2.innerHTML = out;
};
// task 3 ----------------------------
const btn3 = document.querySelector('.btn3');
const divS3 = document.getElementsByClassName('div3');

btn3.onclick = () => {
  console.log(divS3);
  for (let div of divS3) {
    console.log(div);
    div.innerHTML += 'task-3';
  }
};

// task 4 ------------------------------

// task 5 ------------------------------

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
