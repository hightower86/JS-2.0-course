// task 1 --------------------
for (let i = 0; i < 11; i++) {
  console.log(i);
}

// task 2 --------------------
const div2 = document.querySelector('.div2');
let out2 = '';
for (let i = 0; i < 11; i++) {
  out2 += ` ${i}`;
}
div2.innerHTML = out2;
// task 3 --------------------
const div3 = document.querySelector('.div3');
let out3;
for (let i = 10; i >= 0; i--) {
  out3 += ` ${i}`;
}
div3.innerHTML = out3;
// task 4 --------------------
const div4 = document.querySelector('.div4');
let out4 = '';
for (let i = 0; i < 11; i += 2) {
  out4 += ` ${i}`;
}
div4.innerHTML = out4;
// task 5 --------------------
const div5 = document.querySelector('.div5');
let out5 = '';
for (let i = 21; i >= 0; i -= 3) {
  out5 += ` ${i}`;
}
div5.innerHTML = out5;
// task 6 --------------------
const div6 = document.querySelector('.div6');
let out6 = '';
for (let i = 1; i <= 6; i += 1) {
  out6 += '<div>******</div>';
}
div6.innerHTML = out6;
// task 7 --------------------
const inp7 = document.querySelector('.inp7');
const btn7 = document.querySelector('.btn7');
const div7 = document.querySelector('.div7');
//console.log(btn7);
btn7.onclick = () => {
  let out7 = '';
  for (let i = +inp7.value; i >= 0; i -= 1) {
    out7 += ` ${i}`;
  }
  div7.innerHTML = out7;
};

// task 8-9 --------------------
const inp8 = document.querySelector('.inp8');
const inp82 = document.querySelector('.inp82');
const btn8 = document.querySelector('.btn8');
const div8 = document.querySelector('.div8');
const a = +inp8.value;
const b = +inp82.value;

btn8.onclick = () => {
  if (b < a) {
    alert('второе число должно быть больше первого');
  } else {
    let out8 = '';
    for (let i = a; i <= b; i += 1) {
      out8 += `${i} `;
    }
    div8.innerHTML = out8;
  }
};

//task 10 --------------------
const div10 = document.querySelector('.div10');
let evenYears = '';
for (let i = 1901; i <= 1950; i++) {
  if (i % 2 != 0) {
    continue;
  }
  evenYears += ` ${i}`;
}
div10.innerHTML = evenYears;
