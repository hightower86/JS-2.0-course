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
