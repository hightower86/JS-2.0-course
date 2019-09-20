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
