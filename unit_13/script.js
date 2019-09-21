// task 1 --------------------
const a1 = {
  3: 'hello',
  one: 'hi'
};
const btn1 = document.querySelector('.btn1');
const div1 = document.querySelector('.div1');

btn1.onclick = () => {
  let out1 = '';
  for (const key in a1) {
    out1 += key + ' -- ' + a1[key] + '<br>';
  }
  div1.innerHTML = out1;
};

// task 2 ---------------------------

const a2 = {
  3: 'hello',
  one: 'hi',
  testt: 'vodoley',
  ivan: 'ivanov'
};
const btn2 = document.querySelector('.btn2');
const div2 = document.querySelector('.div2');

btn2.onclick = () => {
  let out2 = '';
  for (const key in a2) {
    if (a2[key].length > 4) {
      out2 += key + ' -- ' + a2[key] + '<br>';
    }
  }
  div2.innerHTML = out2;
};
// task 3 ----------------------------
const a3 = {
  3: 'hello',
  one: 'hi',
  testt: 'vodoley',
  ivan: 'ivanov'
};
const div3 = document.querySelector('.div3');
const btn3 = document.querySelector('.btn3');

btn3.onclick = () => {
  out3 = '';
  for (const key in a3) {
    if (key.length > 4) {
      out3 += key + ' -- ' + a3[key] + '<br>';
    }
  }
  div3.innerHTML = out3;
};

// task 4 ------------------------------
const div4 = document.querySelector('.div4');
const btn4 = document.querySelector('.btn4');
const a4 = {
  3: 'hello',
  one: 4,
  testt: 'vodoley',
  ivan: 6
};

btn4.onclick = () => {
  let out4 = '';
  for (const key in a4) {
    out4 += typeof a4[key] === 'number' ? `${key} -- ${a4[key]}<br>` : '';
  }
  div4.innerHTML = out4;
};
// task 5 ------------------------------
const a5 = {
  a: 7,
  z: 4,
  45: 12,
  f: 6
};
const div5 = document.querySelector('.div5');
const btn5 = document.querySelector('.btn5');

btn5.onclick = () => {
  sum5 = 0;
  for (const key in a5) {
    sum5 += a5[key];
  }
  div5.innerHTML = sum5;
};

// task 6 -----------------------------
const div6 = document.querySelector('.div6');
const btn6 = document.querySelector('.btn6');

const a6 = {
  name: 'Bobby',
  age: 30,
  sex: 'male',
  height: 190
};
btn6.onclick = () => {
  let out6 = '';
  for (const key in a6) {
    out6 += `${key} -- ${a6[key]}<br>`;
  }
  div6.innerHTML = out6;
};

// task 7 -----------------------------
const div7 = document.querySelector('.div7');
const btn7 = document.querySelector('.btn7');
const inp7 = document.querySelector('.inp7');
const inp72 = document.querySelector('.inp72');
const a7 = {};

btn7.onclick = () => {
  div7.innerHTML = '';
  const i7 = inp7.value.trim();
  const i72 = inp72.value.trim();
  if (i7.length === 0 || i72.length === 0) {
    alert('both of inputs must be filled');
  }
  a7[i7] = i72;
  for (const key in a7) {
    div7.innerHTML += `${key} -- ${a7[key]}<br>`;
  }
};
// task 8 --------------------------------
const div8 = document.querySelector('.div8');
const btn8 = document.querySelector('.btn8');
const inp8 = document.querySelector('.inp8');
const inp82 = document.querySelector('.inp82');
const inp8del = document.querySelector('.inp8del');
const btn8del = document.querySelector('.btn8del');
const a8 = {};

btn8.onclick = () => {
  div8.innerHTML = '';
  const i8 = inp8.value.trim();
  const i82 = inp82.value.trim();
  if (i8.length === 0 || i82.length === 0) {
    alert('both of inputs must be filled');
  }
  a8[i8] = i82;
  for (const key in a8) {
    div8.innerHTML += `${key} -- ${a8[key]}<br>`;
  }

  console.log(a8);
};

btn8del.onclick = () => {
  div8.innerHTML = '';
  const key = inp8del.value.trim();
  delete a8[key];
  for (const key8 in a8) {
    div8.innerHTML += `${key8} -- ${a8[key8]}<br>`;
  }
};

// task 9 --------------------------
const inp9 = document.querySelector('.inp9');
const btn9 = document.querySelector('.btn9');

btn9.onclick = () => {
  div8.innerHTML = '';
  const i9 = inp9.value.trim();
  for (const key in a8) {
    if (a8[key] === i9) {
      delete a8[key];
    }
  }
  for (const key8 in a8) {
    div8.innerHTML += `${key8} -- ${a8[key8]}<br>`;
  }
};

// task 10 ----------------------------
const inp10 = document.querySelector('.inp10');
const btn10 = document.querySelector('.btn10');

btn10.onclick = () => {
  inp8.innerHTML = '';
  i10 = inp10.value.trim();
  a8[i10] === undefined ? console.log(false) : console.log(true);
};

// task 11 ------------------------------
const div11 = document.querySelector('.div11');
const btn11 = document.querySelector('.btn11');

const a11 = {
  red: [
    'Академгородок',
    'Житомирская',
    'Святошин',
    'Нивки',
    'Берестейская',
    'Шулявская',
    'Политехнический институт',
    'Вокзальная',
    'Университет',
    'Театральная',
    'Крещатик',
    'Арсенальная',
    'Днепр',
    'Гидропарк',
    'Левобережная',
    'Дарница',
    'Черниговская',
    'Лесная'
  ],
  green: [
    'Виноградарь',
    'Мостицкая',
    'Сырец',
    'Дорогожичи',
    'Лукьяновская',
    'Львовская брама',
    'Золотые ворота',
    'Дворец спорта',
    'Кловская',
    'Печерская',
    'Дружбы народов',
    'Выдубичи',
    'Теличка',
    'Славутич',
    'Осокорки',
    'Позняки',
    'Харьковская',
    'Вырлица',
    'Бориспольская',
    'Красный хутор'
  ],
  blue: [
    'Героев Днепра',
    'Минская',
    'Оболонь',
    'Петровка',
    'Тараса Шевченко',
    'Контрактовая площадь',
    'Почтовая площадь',
    'Майдан Незалежности',
    'Площадь Льва Толстого',
    'Олимпийская',
    'Дворец «Украина»',
    'Лыбедская',
    'Демиевская',
    'Голосеевская',
    'Васильковская',
    'Выставочный центр',
    'Ипподром',
    'Теремки',
    'Одесская'
  ]
};

btn11.onclick = () => {
  out11 = '';
  for (const key in a11) {
    const p = document.createElement('p');
    p.textContent = `${key} -- ${a11[key].join(', ')}`;
    p.style.color = key;
    div11.append(p);
  }
};

// task 12 ------------------------------
const div12 = document.querySelector('.div12');
const btn12 = document.querySelector('.btn12');
const sel12 = document.getElementById('sel12');

btn12.onclick = () => {
  const selIdx = sel12.options.selectedIndex;
  div12.innerHTML = a11[sel12.options[selIdx].value];
};

// task 13 ------------------------------
const btn13 = document.querySelector('.btn13');

btn13.onclick = () => {
  const selIdx = sel12.options.selectedIndex;
  div12.innerHTML = a11[sel12.options[selIdx].value].reverse();
};
// task 14 ---------------------------
const selStation = document.getElementById('selStation');
const btn14 = document.querySelector('.btn14');
const allStations = [...a11['red'], ...a11['blue'], ...a11['green']];

const appendOptions = parent => {
  //options = [];
  for (let i = 0; i < allStations.length; i++) {
    const station = allStations[i];
    const opt = document.createElement('option');
    opt.value = station;
    opt.textContent = station;
    //options.push(opt);
    parent.appendChild(opt);
  }
  return parent;
};
//console.log(createOptions());

appendOptions(selStation);

const whosStation = station => {
  for (const key in a11) {
    const branchStations = a11[key];
    if (branchStations.includes(station)) {
      return key;
    }
  }
  return false;
};

btn14.onclick = () => {
  const station = selStation.value;
  const branch = whosStation(station);
  console.log(branch);
  btn14.style.color = branch;
};

// task 15 ------------------------------
const sel15 = document.querySelector('#sel15');
const sel152 = document.querySelector('#sel152');
const btn15 = document.querySelector('.btn15');

appendOptions(sel15); //заполняем список селекта
appendOptions(sel152);

const isOneBranch = (station1, station2) => {
  return whosStation(station1) === whosStation(station2);
};

btn15.onclick = () => {
  if (isOneBranch(sel15.value, sel152.value)) {
    const idx1 = sel15.options.selectedIndex;
    const idx2 = sel152.options.selectedIndex;
    console.log(idx2 !== idx1 ? Math.abs(idx2 - idx1) - 1 : 0);
  }
};

// task 16 ----------------------------------
const inp161 = document.querySelector('#r161');
const inp162 = document.querySelector('#r162');
const inp163 = document.querySelector('#r163');
const sel16 = document.querySelector('.sel16');

const fillSelect = branch => {
  sel16.options.length = 0;
  const stations = a11[branch];
  for (let i = 0; i < stations.length; i++) {
    const station = stations[i];
    const opt = document.createElement('option');
    opt.value = station;
    opt.textContent = station;
    sel16.appendChild(opt);
  }
};

const radios = document.getElementsByName('rad16');
for (let i = 0; i < radios.length; i++) {
  radios[i].onclick = () => fillSelect(radios[i].value);
}

// task 17 ----------------------------------
const div17 = document.querySelector('.div17');
const btn17 = document.querySelector('.btn17');
const a17 = {
  red: [
    ['Академгородок', 0],
    'Житомирская',
    'Святошин',
    'Нивки',
    'Берестейская',
    'Шулявская',
    'Политехнический институт',
    'Вокзальная',
    'Университет',
    ['Театральная', 1],
    ['Крещатик', 1],
    'Арсенальная',
    'Днепр',
    'Гидропарк',
    'Левобережная',
    'Дарница',
    'Черниговская',
    ['Лесная', 0]
  ],
  green: [
    ['Виноградарь', 0],
    'Мостицкая',
    'Сырец',
    'Дорогожичи',
    'Лукьяновская',
    'Львовская брама',
    ['Золотые ворота', 1],
    ['Дворец спорта', 1],
    'Кловская',
    'Печерская',
    'Дружбы народов',
    'Выдубичи',
    'Теличка',
    'Славутич',
    'Осокорки',
    'Позняки',
    'Харьковская',
    'Вырлица',
    'Бориспольская',
    ['Красный хутор', 0]
  ],
  blue: [
    ['Героев Днепра', 0],
    'Минская',
    'Оболонь',
    'Петровка',
    'Тараса Шевченко',
    'Контрактовая площадь',
    'Почтовая площадь',
    ['Майдан Незалежности', 1],
    ['Площадь Льва Толстого', 1],
    'Олимпийская',
    'Дворец «Украина»',
    'Лыбедская',
    'Демиевская',
    'Голосеевская',
    'Васильковская',
    'Выставочный центр',
    'Ипподром',
    'Теремки',
    ['Одесская', 0]
  ]
};

btn17.onclick = () => {
  out = '';
  for (const branch in a17) {
    const stations = a17[branch];
    for (let i = 0; i < stations.length; i++) {
      const element = stations[i];
      if (Array.isArray(element)) {
        out += element.join(' - ') + '<br>';
      } else {
        out += element + '<br>';
      }
    }
  }
  div17.innerHTML = out;
};
// task 18 -------------------------------
const btn18 = document.querySelector('.btn18');
btn18.onclick = () => {
  out = '';
  for (const branch in a17) {
    const stations = a17[branch];
    for (let i = 0; i < stations.length; i++) {
      const element = stations[i];
      if (Array.isArray(element) && element[1] === 1) {
        out += element.join(' - ') + '<br>';
      }
    }
  }
  div17.innerHTML = out;
};
// task 19 ----------------------------------

// task 20 ----------------------------------
