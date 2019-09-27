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
const btn8 = document.querySelector('.btn8');

const a8 = [[1, 2, 3], [3, 4, 9], [5, 6]];

const func8 = () => {
  let idxMax = 0;
  for (let i = 0; i < a8.length; i++) {
    for (let k = 0; k < a8[i].length; k++) {
      idxMax = idxMax > k ? idxMax : k;
    }
  }
  console.log(idxMax);
};

btn8.onclick = func8;

// task 9 --------------------------
const btn9 = document.querySelector('.btn9');
const a9 = [4, 6, 9, 'hello'];

const func9 = () => {
  a9new = {};
  for (let i = 0; i < a9.length; i++) {
    a9new[a9[i]] = a9[i];
  }
  console.log(a9new);
};

btn9.onclick = func9;

// task 10 ----------------------------
const a10 = [5, 7, 9, 11, 13, 15];
const btn10 = document.querySelector('.btn10');
const div10 = document.querySelector('.div10');

btn10.onclick = () => {
  for (const idx in a10) {
    div10.textContent += a10[idx] + ', ';
  }
};

// task 11 ------------------------------
const div11 = document.querySelector('.div11');
const btn11 = document.querySelector('.btn11');
const sel11 = document.querySelector('.sel11');
const a11 = [5, 7, 9, 11, 13, 15];

btn11.onclick = () => {
  let out = '';

  for (const idx in a11) {
    out += `${idx}${sel11.value}${a10[idx]}<br>`;
  }

  div11.innerHTML = out;
};

// task 12 ------------------------------
const divs12 = document.getElementsByClassName('div12');
const btn12 = document.querySelector('.btn12');

const func12 = () => {
  for (let idx in divs12) {
    console.log(divs12[idx]);
    divs12[idx].textContent += 'task-12';
  }
};

btn12.onclick = func12;

// task 13 ------------------------------
const divs13 = document.querySelectorAll('.div13');
const btn13 = document.querySelector('.btn13');

const func13 = () => {
  for (let idx in divs13) {
    divs13[idx].textContent += 'task-13';
  }
};

btn13.onclick = func13;

// task 14 ---------------------------
const btn14 = document.querySelector('.btn14');
const a14 = [[1, 2], [3, 4], [5, 6]];

const func14 = () => {
  const a14new = [];
  for (let idx in a14) {
    for (let ix in a14[idx]) {
      a14new.push(a14[idx][ix]);
    }
  }
  console.log(a14new);
};

btn14.onclick = func14;

// task 15 ------------------------------
const btn15 = document.querySelector('.btn15');
const a15 = [[1, 2, 3], [3, 4, 9], [5, 6]];
const func15 = () => {
  let maxIdx = 0;
  for (let idx in a15) {
    for (let ix in a15[idx]) {
      maxIdx = ix > maxIdx ? ix : maxIdx;
    }
  }
  console.log(maxIdx);
};

btn15.onclick = func15;

// task 16 ----------------------------------

const btn16 = document.querySelector('.btn16');

const a16 = [4, 6, 9, 'hello'];

btn16.onclick = () => {
  const a9_1 = {};
  for (let idx in a16) {
    a9_1[a16[idx]] = a16[idx];
  }

  console.log(a9_1);
};

// task 17 ----------------------------------
const a17 = [5, 7, 9, 11, 13, 15];
const div17 = document.querySelector('.div17');
const btn17 = document.querySelector('.btn17');

btn17.onclick = () => {
  let out = '';
  for (let item of a17) {
    out += `${item}, `;
  }
  div17.textContent = out;
};

// task 18 -------------------------------
const a18 = [5, 7, 9, 11, 13, 15];
const div18 = document.querySelector('.div18');
const btn18 = document.querySelector('.btn18');
const sel18 = document.querySelector('.sel18');

btn18.onclick = () => {
  let idx = 0;
  let out = '';
  for (let item of a18) {
    out += `${idx}${sel18.value}${item}<br>`;
    idx++;
  }
  div18.innerHTML = out;
};

// task 19 ----------------------------------
const divs19 = document.getElementsByClassName('div19');
const btn19 = document.querySelector('.btn19');

const func19 = () => {
  for (let div of divs19) {
    div.textContent += 'task-19';
  }
};

btn19.onclick = func19;

// task 20 ----------------------------------
const divs20 = document.querySelectorAll('.div20');
const btn20 = document.querySelector('.btn20');

const func20 = () => {
  for (let div of divs20) {
    div.textContent += 'task 20';
  }
};

btn20.onclick = func20;

// task 21 ----------------------------------
let a21 = [[1, 2], [3, 4], [5, 6]];
const btn21 = document.querySelector('.btn21');

const func21 = () => {
  let newArr = [];
  for (let arr of a21) {
    for (let item of arr) {
      newArr.push(item);
    }
  }
  a21 = newArr;
  console.log(a21);
};

btn21.onclick = func21;

// task 22 ----------------------------------
const btn22 = document.querySelector('.btn22');
const a22 = [[1, 2, 3], [3, 4, 9, 10], [5, 6]];

const func22 = () => {
  let maxIdx = 0;
  for (let arr of a22) {
    let idx = 0;
    for (let item of arr) {
      maxIdx = maxIdx > idx ? maxIdx : idx;
      idx++;
    }
  }
  console.log(maxIdx);
};

btn22.onclick = func22;

// task 23 ----------------------------------
const btn23 = document.querySelector('.btn23');
const a23 = [4, 6, 9, 'hello'];

const func23 = () => {
  let idx = 0;
  const a23new = {};
  for (let item of a23) {
    a23new[item] = item;
    idx++;
  }
  console.log(a23new);
};

btn23.onclick = func23;
