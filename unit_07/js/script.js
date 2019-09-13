// task 1 --------------------
btn1 = document.querySelector('.btn1');

const showName = () => {
  console.log('Adel');
};
btn1.onclick = showName;

// task 2 --------------------------
btn2 = document.querySelector('.btn2');

const show2 = name => {
  console.log(name);
};

show2('Sergey');

// task 3 --------------------------
btn3 = document.querySelector('.btn3');

f3 = num => {
  console.log(num * 10);
};

btn3.onclick = () => f3(12);

// task 4 ------------------------
