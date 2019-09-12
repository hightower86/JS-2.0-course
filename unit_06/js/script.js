// task 1 --------------------
const div1 = document.querySelector('.div1');
let out1 = '';
for (let i = 0; i < 3; i++) {
  out1 += ' ';
  for (let k = 0; k < 3; k++) {
    out1 += '*';
  }
}
div1.innerHTML = out1;

// task 2 ----------------------
const div2 = document.querySelector('.div2');
let out2 = '';
for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 5; k++) {
    out2 += '*';
  }
  out2 += '<br>';
}
div2.innerHTML = out2;

// task 3 ----------------------
const div3 = document.querySelector('.div3');
let out3 = '';
for (let i = 0; i < 3; i++) {
  for (let k = 1; k <= 6; k++) {
    out3 += k % 2;
  }
  out3 += '<br>';
}
div3.innerHTML = out3;

// task 4 ----------------------
const div4 = document.querySelector('.div4');
let out4 = '';
for (let i = 0; i < 3; i++) {
  for (let k = 1; k <= 6; k++) {
    out4 += k % 3 === 0 ? 'x' : k % 2;
  }
  out4 += '<br>';
}
div4.innerHTML = out4;
