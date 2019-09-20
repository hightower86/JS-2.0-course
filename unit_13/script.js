// task 1 --------------------
const a1 = {
  3: 'hello',
  one: 'hi'
};
const btn1 = document.querySelector('.btn1');
const div1 = document.querySelector('.div1');

btn1.onclick = () => {
  let out1 = '';
  for (const key in a1) {
    out1 += key + ' -- ' + a1[key] + '<br>';
  }
  div1.innerHTML = out1;
};

// task 2 ---------------------------

const a2 = {
  3: 'hello',
  one: 'hi',
  testt: 'vodoley',
  ivan: 'ivanov'
};
const btn2 = document.querySelector('.btn2');
const div2 = document.querySelector('.div2');

btn2.onclick = () => {
  let out2 = '';
  for (const key in a2) {
    if (a2[key].length > 4) {
      out2 += key + ' -- ' + a2[key] + '<br>';
    }
  }
  div2.innerHTML = out2;
};
// task 3 ----------------------------
const a3 = {
  3: 'hello',
  one: 'hi',
  testt: 'vodoley',
  ivan: 'ivanov'
};
const div3 = document.querySelector('.div3');
const btn3 = document.querySelector('.btn3');

btn3.onclick = () => {
  out3 = '';
  for (const key in a3) {
    if (key.length > 4) {
      out3 += key + ' -- ' + a3[key] + '<br>';
    }
  }
  div3.innerHTML = out3;
};

// task 4 ------------------------------
const div4 = document.querySelector('.div4');
const btn4 = document.querySelector('.btn4');
const a4 = {
  3: 'hello',
  one: 4,
  testt: 'vodoley',
  ivan: 6
};

btn4.onclick = () => {
  let out4 = '';
  for (const key in a4) {
    out4 += typeof a4[key] === 'number' ? `${key} -- ${a4[key]}<br>` : '';
  }
  div4.innerHTML = out4;
};
// task 5 ------------------------------
const a5 = {
  a: 7,
  z: 4,
  45: 12,
  f: 6
};
const div5 = document.querySelector('.div5');
const btn5 = document.querySelector('.btn5');

btn5.onclick = () => {
  sum5 = 0;
  for (const key in a5) {
    sum5 += a5[key];
  }
  div5.innerHTML = sum5;
};

// task 6 -----------------------------
const div6 = document.querySelector('.div6');
const btn6 = document.querySelector('.btn6');

const a6 = {
  name: 'Bobby',
  age: 30,
  sex: 'male',
  height: 190
};
btn6.onclick = () => {
  let out6 = '';
  for (const key in a6) {
    out6 += `${key} -- ${a6[key]}<br>`;
  }
  div6.innerHTML = out6;
};

// task 7 -----------------------------
const div7 = document.querySelector('.div7');
const btn7 = document.querySelector('.btn7');
const inp7 = document.querySelector('.inp7');
const inp72 = document.querySelector('.inp72');
const a7 = {};

btn7.onclick = () => {
  const i7 = inp7.value.trim();
  const i72 = inp72.value.trim();
  if (i7.length === 0 || i72.length === 0) {
    alert('both of inputs must be filled');
  }
  a7[i7] = i72;
  div7.innerHTML += `${i7} -- ${a7[i7]}<br>`;
  console.log(a7);
};
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
