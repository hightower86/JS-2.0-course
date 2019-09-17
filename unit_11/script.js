// task 1 --------------------
const arr = [];
const btn1 = document.querySelector('.btn1');
const div1 = document.querySelector('.div1');
const inp1 = document.querySelector('.inp1');

btn1.onclick = () => {
  arr.push(inp1.value);
  div1.textContent = arr;
};
