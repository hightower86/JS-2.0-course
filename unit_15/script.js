// task 1 --------------------
const btn1 = document.querySelector('.btn1');
const s1 = new Set();
s1.add('a');
s1.add(1);
s1.add('word');
s1.add(true);
btn1.onclick = () => console.log(s1);

// task 2 ---------------------------
const inp2 = document.querySelector('.inp2');
const btn2 = document.querySelector('.btn2');
const s2 = new Set();
btn2.onclick = () => {
  s2.add(inp2.value);
  console.log(s2);
};

// task 3 ----------------------------
const btn3 = document.querySelector('.btn3');
btn3.onclick = () => {
  inp2.value.trim().length === 0
    ? alert('input is empty')
    : s2.delete(inp2.value);
  console.log(s2);
};
// task 4 ------------------------------
const btn4 = document.querySelector('.btn4');
btn4.onclick = () => {
  inp2.value.trim().length === 0
    ? alert('input is empty')
    : console.log(s2.has(inp2.value));
};
// task 5 ------------------------------
const btn5 = document.querySelector('.btn5');
btn5.onclick = () => console.log(s2.size);

// task 6 -----------------------------
const btn6 = document.querySelector('.btn6');
const a6 = [1, 'df', 55, true, 'new', 55, 'df', 1];
const s6 = new Set(a6);
btn6.onclick = () => console.log(s6.size);

// task 7 -----------------------------
const btn7 = document.querySelector('.btn7');
const inp7 = document.querySelector('.inp7');

btn7.onclick = () => {
  a7 = inp7.value.split('');
  s7 = new Set(a7);
  if (a7.length !== s7.size) {
    alert('you must input only uniq simbols in password');
  } else {
    console.log('ok');
  }
};

// task 8 --------------------------------
const btn8 = document.querySelector('.btn8');
const s8 = new Set([1, '2', 3, '4', 5, 6, '7']);
console.log(s8);
const even8 = set => {
  let result = '';

  console.log(result);
};

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
