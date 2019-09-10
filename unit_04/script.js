// task 1 --------------------
const btn = document.querySelector('button');
let taskNumber = 1;
btn.onclick = () => {
  alert(taskNumber);
};

// task 2 --------------------

const btn2 = document.querySelector('.btn-2');
taskNumber = 2;
btn2.onclick = () => {
  alert(taskNumber);
};

// task 3 --------------------

const p3 = document.querySelector('.p3');
taskNumber = 3;
p3.onclick = () => {
  alert(taskNumber);
};

// task 4 --------------------

const check4 = document.querySelector('.check4');
const btn4 = document.querySelector('.btn4');
btn4.onclick = () => {
  alert(check4.checked);
};
