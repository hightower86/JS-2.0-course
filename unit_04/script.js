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

// task 5 --------------------

const check5 = document.querySelector('.check5');
const btn5 = document.querySelector('.btn5');
btn5.onclick = () => {
  if (check5.checked) {
    alert(check5.value);
  } else {
    alert(check5.checked);
  }
};

// task 6 --------------------

const inp6 = document.querySelector('.inp6');
const btn6 = document.querySelector('.btn6');
btn6.onclick = () => {
  alert(inp6.value);
};

// task 7 --------------------

const inp7 = document.querySelector('.inp7');
const btn7 = document.querySelector('.btn7');
btn7.onclick = () => {
  if (inp7.value.length < 6) {
    console.log('длина пароля должна быть не меньше 6 символов');
  } else {
    alert(inp7.value);
  }
};

// task 8 --------------------

const btn8 = document.querySelector('.btn8');
btn8.onclick = () => {
  const inp8 = document.querySelector('.div8');
  inp8.innerHTML += '<input class="newInp8" type="text"/>';
  inp8.innerHTML += '<input class="newBtn8" type="button" value="button 8"/>';
  const newBtn8 = document.querySelector('.newBtn8');
  const newInp8 = document.querySelector('.newInp8');
  newBtn8.onclick = () => {
    alert(newInp8.value);
  };
};
