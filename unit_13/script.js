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
  div7.innerHTML = '';
  const i7 = inp7.value.trim();
  const i72 = inp72.value.trim();
  if (i7.length === 0 || i72.length === 0) {
    alert('both of inputs must be filled');
  }
  a7[i7] = i72;
  for (const key in a7) {
    div7.innerHTML += `${key} -- ${a7[key]}<br>`;
  }
};
// task 8 --------------------------------
const div8 = document.querySelector('.div8');
const btn8 = document.querySelector('.btn8');
const inp8 = document.querySelector('.inp8');
const inp82 = document.querySelector('.inp82');
const inp8del = document.querySelector('.inp8del');
const btn8del = document.querySelector('.btn8del');
const a8 = {};

btn8.onclick = () => {
  div8.innerHTML = '';
  const i8 = inp8.value.trim();
  const i82 = inp82.value.trim();
  if (i8.length === 0 || i82.length === 0) {
    alert('both of inputs must be filled');
  }
  a8[i8] = i82;
  for (const key in a8) {
    div8.innerHTML += `${key} -- ${a8[key]}<br>`;
  }

  console.log(a8);
};

btn8del.onclick = () => {
  div8.innerHTML = '';
  const key = inp8del.value.trim();
  delete a8[key];
  for (const key8 in a8) {
    div8.innerHTML += `${key8} -- ${a8[key8]}<br>`;
  }
};

// task 9 --------------------------
const inp9 = document.querySelector('.inp9');
const btn9 = document.querySelector('.btn9');

btn9.onclick = () => {
  div8.innerHTML = '';
  const i9 = inp9.value.trim();
  for (const key in a8) {
    if (a8[key] === i9) {
      delete a8[key];
    }
  }
  for (const key8 in a8) {
    div8.innerHTML += `${key8} -- ${a8[key8]}<br>`;
  }
};

// task 10 ----------------------------
const inp10 = document.querySelector('.inp10');
const btn10 = document.querySelector('.btn10');

btn10.onclick = () => {
  inp8.innerHTML = '';
  i10 = inp10.value.trim();
  a8[i10] === undefined ? console.log(false) : console.log(true);
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
