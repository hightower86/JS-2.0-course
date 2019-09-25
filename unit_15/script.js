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
const even8 = set => {
  let result = '';
  let count = 0;
  for (let e of set) {
    if (count % 2 === 0) console.log(e);
    count++;
  }
};

btn8.onclick = () => even8(s8);

// task 9 --------------------------
const btn9 = document.querySelector('.btn9');
const s9 = new Set([1, '2', 3, '4', 5, 6, '7']);

const reverse = set => {
  const arr91 = [...set];
  const arr9 = arr91.reverse();
  for (let i = 0; i < arr9.length; i++) {
    console.log(arr9[i]);
  }
};

btn9.onclick = () => reverse(s9);

// task 10 ----------------------------
const arr10 = [1, 2, 3, 3, 3, 4, 5, 6, 6, 6, 7, 8, 9, 9, 88, 8];
const btn10 = document.querySelector('.btn10');
const s10 = new Set(arr10);
let r10 = {};

btn10.onclick = () => {
  for (let e of s10) r10[e] = 0;
  //  заполняем ассоц. массив всеми оригинальными значениями
  // по одной штуке
  for (let i = 0; i < arr10.length; i++) {
    const el = arr10[i];
    r10[el] = r10[el] + 1;
  }
  console.log(r10); // в ассоциативном массиве возвращаем ключ -
  // элемент исходного массива, значение - количество элементов в нем
};

// task 11 ------------------------------
const div11 = document.querySelector('.div11');
const inp11 = document.querySelector('.inp11');
const btn11 = document.querySelector('.btn11');
const arrSet = ['1', '2', '3', '4', '5', '6'];

const set11 = arr11 => {
  const val = inp11.value;
  if (!arr11.includes(val)) {
    arr11.push(val);
  }
  div11.innerHTML = arr11;
};

btn11.onclick = () => set11(arrSet);

// task 12 ------------------------------
const set12 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const btn12 = document.querySelector('.btn12');

btn12.onclick = () => {
  const arr12 = [];
  for (let el of set12) {
    arr12.push(el);
  }
  console.log(arr12);
};
// task 13 ------------------------------

// task 14 ---------------------------

// task 15 ------------------------------

// task 17 ----------------------------------

// task 18 -------------------------------

// task 19 ----------------------------------

// task 20 ----------------------------------
