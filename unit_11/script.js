// task 1 --------------------
const arr = [];
const btn1 = document.querySelector('.btn1');
const btn1pop = document.querySelector('.btn1-pop');
const btn1shift = document.querySelector('.btn1-shift');
const btn1unshift = document.querySelector('.btn1-unshift');
const div1 = document.querySelector('.div1');
const inp1 = document.querySelector('.inp1');

isInputEmpty = () => inp1.value.trim().length === 0;

btn1.onclick = () => {
  isInputEmpty() ? alert('input is empty') : arr.push(inp1.value);

  div1.textContent = arr;
};

// task 2 ---------------------------
btn1pop.onclick = () => {
  arr.pop();
  div1.textContent = arr;
};

// task 3 ----------------------------
btn1shift.onclick = () => {
  arr.shift();
  div1.textContent = arr;
};

// task 4 ------------------------------
btn1unshift.onclick = () => {
  isInputEmpty() ? alert('input is empty') : arr.unshift(inp1.value);
  div1.textContent = arr;
};

// task 5 ------------------------------
let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];

div5 = document.querySelector('.div5');
btn5 = document.querySelector('.btn5');
inp5 = document.querySelector('.inp5');
inp52 = document.querySelector('.inp52');

btn5.onclick = () => {
  arr5.splice(+inp5.value, +inp52.value);
  div5.textContent = arr5;
};

// task 6 -----------------------------
const btn6 = document.querySelector('.btn6');
const inp6 = document.querySelector('.inp6');
const div6 = document.querySelector('.div6');

let arr6 = [];
const funcPush = () => {
  const val = inp6.value.trim();
  const arrSize = arr6.length;
  arr6[arrSize] = val;
  div6.textContent = arr6;
};

btn6.onclick = funcPush;

// task 7 -----------------------------
const btn7 = document.querySelector('.btn7');
const div7 = document.querySelector('.div7');

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
div7.textContent = arr7;
const funcPop7 = () => {
  if (arr7.length > 0) arr7.length -= 1;
  div7.textContent = arr7;
};

btn7.onclick = funcPop7;

// task 8 --------------------------------
const btn8 = document.querySelector('.btn8');
const div8 = document.querySelector('.div8');
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8];
div8.textContent = arr8;

const funcShift = () => {
  const newArr = [];
  for (let i = 1; i < arr8.length; i++) {
    newArr[i - 1] = arr8[i];
    console.log(newArr);
  }
  arr8 = newArr;
  div8.textContent = arr8;
};

btn8.onclick = funcShift;

// task 9 --------------------------
const div9 = document.querySelector('.div9');
const inp9 = document.querySelector('.inp9');
const btn9 = document.querySelector('.btn9');

const isInput9Empty = inp9.value.trim().length === 0;

let arr9 = [];
const funcUnShift = () => {
  if (isInput9Empty) {
    alert('input is empty!');
    return;
  }
  const newArr9 = [inp9.value];
  for (let i = 0; i < arr9.length; i++) {
    const element = arr9[i];
    newArr9[i + 1] = element;
  }
  arr9 = newArr9;
  div9.textContent = arr9;
};

btn9.onclick = funcUnShift;

// task 10 ----------------------------
let arr10 = [2, 4, 6, 8, 10, 'hello'];
const div10 = document.querySelector('.div10');
const btn10 = document.querySelector('.btn10');

btn10.onclick = () => {
  arr10.reverse();
  div10.textContent = arr10;
};
