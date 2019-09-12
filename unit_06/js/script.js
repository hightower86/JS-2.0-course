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

// task 5 ------------------------
const div5 = document.querySelector('.div5');
out5 = '';
for (let i = 1; i < 4; i++) {
  for (let k = 0; k < i; k++) {
    out5 += '*';
  }
  out5 += '<br>';
}
div5.innerHTML = out5;

// task 6 ------------------------
const div6 = document.querySelector('.div6');
let out6 = '';
for (let i = 5; i > 0; i--) {
  for (let k = 0; k < i; k++) {
    out6 += '*';
  }
  out6 += '<br>';
}
div6.innerHTML = out6;

// task 7 ------------------------
const div7 = document.querySelector('.div7');
let out7 = '';
for (let i = 3; i > 0; i--) {
  for (let m = 0; m < i; m++) {
    out7 += '&nbsp ';
  }
  for (let k = 0; k < 5; k++) {
    out7 += '*';
  }
  out7 += '<br>';
}
div7.innerHTML = out7;

// task 8 ------------------------
const div8 = document.querySelector('.div8');
let out8 = '';
const numberOfRows = 5;
for (let i = 1; i <= numberOfRows; i++) {
  for (let k = 0; k < (i <= 3 ? i : 6 - i); k++) {
    out8 += '*';
  }
  out8 += '<br>';
}
div8.innerHTML = out8;

// task 9 ----------------------------
const div9 = document.querySelector('.div9');

let out9 = '';
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= 6; k++) {
    if (i === 1 || i === 5) {
      out9 += '*';
    } else {
      if (k === 1 || k === 6) {
        out9 += '*';
      } else {
        out9 += '&nbsp ';
      }
    }
  }
  out9 += '<br>';
}
div9.innerHTML = out9;

// task 10 ----------------------------
const div10 = document.querySelector('.div10');
const inp10 = document.querySelector('.inp10');

inp10.oninput = () => {
  const sym = inp10.value;
  let out10 = '';
  for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= 6; k++) {
      if (i === 1 || i === 5) {
        out10 += sym;
      } else {
        if (k === 1 || k === 6) {
          out10 += sym;
        } else {
          out10 += '&nbsp ';
        }
      }
    }
    out10 += '<br>';
  }
  div10.innerHTML = out10;
};
