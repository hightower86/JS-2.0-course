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
const btn4 = document.querySelector('.btn4');

const func4 = () => {
  const divs4 = document.querySelectorAll('.div3');

  for (let div of divs4) {
    div.innerHTML += 'task 5';
  }
};

btn4.onclick = func4;

// task 5 ------------------------------
const btn5 = document.querySelector('.btn5');
const divs5 = document.getElementsByClassName('div3'); //HTMLCollection
// console.log(divs5);

const div5 = document.createElement('div');
btn5.onclick = () => {
  divs5.push(div5);
}; // TypeError: divs5.push is not a function

// task 6 --------------------------------
const btn6 = document.querySelector('.btn6');
const divs6 = document.querySelectorAll('.div3'); //NodeList
// console.log(divs6);

const div6 = document.createElement('div');
btn6.onclick = () => {
  divs6.push(div6);
}; // TypeError: divs6.push is not a function

// task 7 -----------------------------
const btn7 = document.querySelector('.btn7');
const a7 = [[1, 2], [3, 4], [5, 6]];
const a7new = [];

const func7 = () => {
  for (let i = 0; i < a7.length; i++) {
    for (let k = 0; k < a7[i].length; k++) {
      a7new.push(a7[i][k]);
    }
  }
  console.log(a7new);
};

btn7.onclick = func7;
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
