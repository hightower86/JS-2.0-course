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

// task 11 ----------------------
const div11 = document.querySelector('.div11');

let out = '';
for (let k = 1; k <= 10; k++) {
  for (let i = 6; i <= 7; i++) {
    out += `${i} * ${k} = ${i * k}&nbsp &nbsp `;
  }
  out += '<br>';
}
div11.innerHTML = out;

// task 12 --------------------------
const div12 = document.querySelector('.div12');

let out12 = '';
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= i; k++) {
    out12 += `${k} `;
  }
  out12 += '<br>';
}
div12.innerHTML += out12;

// task 13 ----------------------
const div13 = document.querySelector('.div13');
let out13 = '';
for (let i = 0; i < 50; i += 10) {
  for (let k = 1; k <= 10; k++) {
    out13 += i < 10 && k < 10 ? `0${i + k} &nbsp` : `${i + k} &nbsp`;
  }
  out13 += '<br>';
}
div13.innerHTML = out13;

// task 14 --------------------------
const div14 = document.querySelector('.div14');

let out14 = '';
for (let i = 5; i >= 1; i--) {
  for (let k = i; k >= 1; k--) {
    out14 += `${k} &nbsp`;
  }
  out14 += '<br>';
}
div14.innerHTML = out14;

// task 15 ----------------------
const div15 = document.querySelector('.div15');

let out15 = '';

for (let i = 1; i <= 5; i++) {
  for (let k = 5; k > 0; k--) {
    out15 += k <= i ? k : 'x';
    out15 += '&nbsp ';
  }
  out15 += '<br>';
}
div15.innerHTML += out15;

//task 16 --------------------
const div16 = document.querySelector('.div16');

let out16 = '';
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= i; k++) {
    out16 += i;
    out16 += '&nbsp ';
  }
  out16 += '<br>';
}

div16.innerHTML = out16;

//task 17 --------------------
const div17 = document.querySelector('.div17');

let out17 = '';
for (let i = 5; i >= 1; i--) {
  for (let k = 5; k >= i; k--) {
    out17 += i;
    out17 += '&nbsp ';
  }
  out17 += '<br>';
}

div17.innerHTML = out17;

//task 18 ----------------------
const div18 = document.querySelector('.div18');

let out18 = '';
for (let i = 5; i >= 1; i--) {
  for (let k = 5; k >= i; k--) {
    out18 += i % 2 != 0 ? i : 'x';
    out18 += '&nbsp ';
  }
  out18 += '<br>';
}

div18.innerHTML = out18;

// task 19 ------------------
const div19 = document.querySelector('.div19');
let out19 = '';
for (let i = 5; i <= 9; i += 2) {
  const prefixLength = (9 - i) / 2;
  for (let p = 0; p < prefixLength; p++) {
    out19 += '&nbsp ';
  }

  for (let k = 0; k < i; k++) {
    out19 += '*';
  }
  out19 += '<br>';
}
div19.innerHTML = out19;

// task 20 ------------------------
const div20 = document.querySelector('.div20');

const figureWidth = 12;
const step = 2;
let out20 = '';
for (let i = step; i < figureWidth; i += step) {
  const x = i < figureWidth / 2 ? i : figureWidth - i;
  const prefix = (figureWidth / 2 - x) / 2;
  for (let p = 0; p < prefix; p++) {
    out20 += '&nbsp ';
  }
  for (let k = 1; k <= x; k += 1) {
    out20 += '*';
  }
  out20 += '<br>';
}
div20.innerHTML = out20;
