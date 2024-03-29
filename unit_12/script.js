// task 1 --------------------
const a = [[1, 2, 3], ['a', 'b', 'c'], [4, 5, 6], ['d', 'e', 'f'], [7, 8, 9]];
const btn1 = document.querySelector('.btn1');
const div1 = document.querySelector('.div1');

let out1 = '';
btn1.onclick = () => {
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      out1 += `${a[i][k]} `;
    }
    out1 += '<br>';
  }
  div1.innerHTML = out1;
  out1 = '';
};

// task 2 ---------------------------
const div2 = document.querySelector('.div2');
const btn2 = document.querySelector('.btn2');

btn2.onclick = () => (div2.innerHTML = a[0][2]);

// task 3 ----------------------------
const div3 = document.querySelector('.div3');
const btn3 = document.querySelector('.btn3');

btn3.onclick = () => (div3.innerHTML = a[3][1]);

// task 4 ------------------------------
const div4 = document.querySelector('.div4');
const btn4 = document.querySelector('.btn4');

btn4.onclick = () => (div4.innerHTML = a[2]);

// task 5 ------------------------------
const div5 = document.querySelector('.div5');
const btn5 = document.querySelector('.btn5');

btn5.onclick = () => {
  div5.innerHTML = '';
  for (let i = 0; i < a.length; i++) {
    div5.innerHTML += a[i][0];
  }
};

// task 6 -----------------------------
const div6 = document.querySelector('.div6');
const btn6 = document.querySelector('.btn6');

btn6.onclick = () => {
  div6.innerHTML = '';
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      div6.innerHTML += a[i] + '<br>';
    }
  }
};

// task 7 -----------------------------
const div7 = document.querySelector('.div7');
const btn7 = document.querySelector('.btn7');

btn7.onclick = () => {
  div7.innerHTML = '';
  for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
      const el = a[i][k];
      if (typeof el === 'number') {
        div7.innerHTML += el;
      }
    }
  }
};

// task 8 --------------------------------
const div8 = document.querySelector('.div8');
const btn8 = document.querySelector('.btn8');

btn8.onclick = () => {
  div8.innerHTML = '';
  for (let i = 0; i < a.length; i++) {
    div8.innerHTML += a[i].length + ' ';
  }
};

// task 9 --------------------------
const div9 = document.querySelector('.div9');
const btn9 = document.querySelector('.btn9');
let out9 = '';

btn9.onclick = () => {
  for (let i = a.length - 1; i >= 0; i--) {
    for (let k = a[i].length - 1; k >= 0; k--) {
      out9 += a[i][k] + ' ';
    }
  }
  div9.innerHTML = out9;
};

// task 10 ----------------------------
const div10 = document.querySelector('.div10');
const btn10 = document.querySelector('.btn10');
let out10 = '';

btn10.onclick = () => {
  for (let i = 0; i < a.length; i++) {
    for (let k = a[i].length - 1; k >= 0; k--) {
      out10 += a[i][k] + ' ';
    }
    out10 += '<br>';
  }
  div10.innerHTML = out10;
};

// task 11 ------------------------------
const div11 = document.querySelector('.div11');
const btn11 = document.querySelector('.btn11');
let out11 = '';
let arr11 = []; // будем все помещать в этот массив
let c = 0;
let first = 0; // это триггер первого символа каждой строки
btn11.onclick = () => {
  for (let i = 0; i < 8; i++) {
    arr11[i] = [];
    for (let k = 0; k < 8; k++) {
      if (k === 0) {
        // проверяем первый символ вложенных массивов-строк
        if (first === 0) {
          first = first === 0 ? 1 : 0; // переключаем триггер первого символа очередной строки
          c = first === 0 ? 1 : 0; // заполняем первый символ в соответствии с триггером
        }
      } else {
        c = c === 0 ? 1 : 0; // переключаем остальные символы в строке
      }

      arr11[i].push(c);
    }
    out11 += arr11[i] + '<br>';
  }
  div11.innerHTML = out11;
};

// task 12 ------------------------------
const div12 = document.querySelector('.div12');
const btn12 = document.querySelector('.btn12');
const white = document.createElement('div');
white.classList.add('white');
const black = document.createElement('div');
black.classList.add('black');

arr12 = [
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1]
];

btn12.onclick = () => {
  div12.innerHTML = '';
  for (let i = 0; i < arr12.length; i++) {
    divRaw = document.createElement('div');
    divRaw.classList.add('raw');
    div12.append(divRaw);

    for (let k = 0; k < arr12[i].length; k++) {
      const el = arr12[i][k];

      const white = document.createElement('div');
      white.classList.add('white');
      const black = document.createElement('div');
      black.classList.add('black');

      console.log(el);
      el > 0 ? divRaw.append(white) : divRaw.append(black);
    }
  }
};

// task 13 ------------------------------
const div13 = document.querySelector('.div13');
const btn13 = document.querySelector('.btn13');

btn13.onclick = () => {
  arr13 = [];
  for (let i = 0; i < 4; i++) {
    let n = []; // nested array
    for (let k = 3; k <= 5; k++) {
      n.push(k);
    }
    arr13.push(n);
  }
  div13.innerHTML += arr13[0][1] + '<br>';
  div13.innerHTML += arr13[3][2];
};

// task 14 ---------------------------
const div14 = document.querySelector('.div14');
const btn14 = document.querySelector('.btn14');

btn14.onclick = () => {
  arr14 = [[2, 4, 5, 6], [34], 5, [0, 3, 4]];

  div14.innerHTML += arr14[0][1] + '<br>';
  div14.innerHTML += arr14[2];
};

// task 15 ------------------------------
const div15 = document.querySelector('.div15');
const btn15 = document.querySelector('.btn15');

btn15.onclick = () => {
  arr15 = [
    [2, 4, 5, 6],
    [34],
    [1, 2, 3, 5],
    [0, 3, 4],
    [0, 3, 4],
    [0, 3, 4],
    ['[4, 5]']
  ];

  div15.innerHTML += arr15[0][1] + '<br>';
  div15.innerHTML += arr15[2][3] + '<br>';
  div15.innerHTML += arr15[6];
};

// task 16 ----------------------------------
const div16 = document.querySelector('.div16');
const btn16 = document.querySelector('.btn16');

btn16.onclick = () => {
  arr16 = [
    [2, 4, 5, 6],
    [34],
    [1, 2, 3, 5],
    [0, 3, 4][(0, 3, 4)],
    [0, 3, 4],
    [0, 3, 4],
    [[4, 6]]
  ];

  div16.innerHTML += arr16[0][1] + '<br>';
  div16.innerHTML += arr16[2][3] + '<br>';
  div16.innerHTML += arr16[6][0][1];
};

// task 17 ----------------------------------
const div17 = document.querySelector('.div17');
const btn17 = document.querySelector('.btn17');

btn17.onclick = () => {
  arr17 = [
    [1, [9, 8, 7, 4, 5], 26],
    [34],
    [1, [1, 5], 2, 3, 5],
    [0, 3, 4],
    [0, 3, 4],
    [0, 3, 4],
    [[4, 6]]
  ];

  div17.innerHTML += arr17[0][1][3] + '<br>';
  div17.innerHTML += arr17[2][1][1] + '<br>';
  div17.innerHTML += arr17[6][0][1];
};

// task 18 -------------------------------
const div18 = document.querySelector('.div18');
const btn18 = document.querySelector('.btn18');

btn18.onclick = () => {
  arr18_1 = [1, 2, 3];
  arr18 = [
    [1, [9, 8, 7, 4, 5], 26],
    [34],
    [1, [1, 5, 1, 5], 2, 3, 5],
    arr18_1,
    [1, 9],
    arr18_1,
    [[4, 6]]
  ];

  div18.innerHTML += arr18[0][1][3] + '<br>';
  div18.innerHTML += arr18[2][1][3] + '<br>';
  div18.innerHTML += arr18[6][0][1] + '<br>';
  div18.innerHTML += arr18[3] == arr18[5];
};

// task 19 ----------------------------------
const div19 = document.querySelector('.div19');
const btn19 = document.querySelector('.btn19');

btn19.onclick = () => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    na = a[i]; // nested array
    for (let k = 0; k < na.length; k++) {
      sum += typeof na[k] === 'number' ? na[k] : 0;
    }
  }
  div19.innerHTML = sum;
};
// task 20 ----------------------------------
const div20 = document.querySelector('.div20');

const arr20 = [['', '', ''], ['', '', ''], ['', '', '']];
const comb1 = [arr20[0][0], arr20[0][1], arr20[0][2]];
const comb2 = [arr20[1][0], arr20[1][1], arr20[1][2]];
const comb3 = [arr20[2][0], arr20[2][1], arr20[2][2]];
const comb4 = [arr20[0][0], arr20[1][0], arr20[2][0]];
const comb5 = [arr20[0][1], arr20[1][1], arr20[2][1]];
const comb6 = [arr20[0][2], arr20[1][2], arr20[2][2]];
const comb7 = [arr20[0][0], arr20[1][1], arr20[2][2]];
const comb8 = [arr20[0][2], arr20[1][1], arr20[2][0]];
