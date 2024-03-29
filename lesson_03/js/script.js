// Task 1.
// Создайте переменную a = 4. Используя конструкцию if
// проверьте что a == 4. Выведите сообщение в консоль.

const a = 4;
if (a === 4) {
  console.log('a equal 4');
}

// Task 2.
// Создайте b = 8 и с = 10. С помощью if, else выведите
// в консоль сообщение о том, какая из переменных больше.

const b = 8;
const c = 10;
if (b > c) {
  console.log('b больше чем c');
} else {
  console.log('c больше чем b');
}

// Task 3.
// Используя else if добавьте в предыдущую задачу
// проверку на равенство.

if (b > c) {
  console.log('b больше чем c');
} else if (c > b) {
  console.log('c больше чем b');
} else {
  console.log('b равно c');
}

// Task 4.
// Создайте на странице 2 input, куда пользователь может
// вводить числа. Добавьте кнопку. При нажатии кнопки
// выполняйте функцию, которая сравнит два числа и
// выведет большее на страницу. Если числа равны -
// выводится строка "равны".
const body = document.querySelector('body');
const inp41 = document.querySelector('#i41');
const inp42 = document.querySelector('#i42');
const btn43 = document.querySelector('#b43');
const result4 = document.querySelector('#res4');

btn43.onclick = function() {
  const a = +inp41.value;
  const b = +inp42.value;
  if (a > b) {
    result4.value += a;
  } else if (b > a) {
    result4.value += b;
  } else {
    result4.value += 'равны!';
  }
};

// Task 5. Создайте на странице input, куда пользователь может
// вводить год рождения. Добавьте кнопку. При нажатии
// кнопки выполняйте функцию, которая если год рождения
// меньше 2000 выводит на страницу возраст пользователя
// (2019 - введенный год рождения),
// если год рождения больше или равен 2000 - выводит в
// консоль возраст пользователя.
const inp5 = document.querySelector('#i5');
const btn5 = document.querySelector('#b5');
const result5 = document.querySelector('#res5');

btn5.onclick = function() {
  const a = +inp5.value;
  if (a < 2000) {
    result5.value += 2019 - a;
  } else {
    console.log(2019 - a);
  }
};
inp5.onchange = function() {
  result5.value = '';
};

// Task 6.
// Создайте input куда пользователь может ввести номер
// квартиры. Если квартира от 1 до 32 - то выводите
// сообщение, о том, что такая квартира есть,если
// другое число - сообщение о том, что квартира не
// существует.
const inp6 = document.querySelector('#i6');
const btn6 = document.querySelector('#b6');
const result6 = document.querySelector('#res6');

btn6.onclick = function() {
  const a = +inp6.value;
  if (a <= 32) {
    result6.value = 'квартира есть';
  } else {
    result6.value = 'такой квартиры нет';
  }
};
inp6.onchange = function() {
  result6.value = '';
};

// Task 7.
// Создайте input куда пользователь может ввести число.
// После нажатия кнопки - на страницу должно выводиться
// сообщение - большие или меньше нуля это число.

const inp7 = document.querySelector('#i7');
const btn7 = document.querySelector('#b7');
const result7 = document.querySelector('#res7');

btn7.onclick = function() {
  const a = +inp7.value;
  if (a > 0) {
    result7.value = 'число больше нуля';
  } else if (a === 0) {
    result7.value = 'число равно нулю';
  } else {
    result7.value = 'число меньше нуля';
  }
};
inp7.onchange = function() {
  result7.value = '';
};

// Task 8.
// Создайте input куда пользователь может ввести число.
// После нажатия кнопки - на страницу должно выводиться
// сообщение - четное или нет это число.

const inp8 = document.querySelector('#i8');
const btn8 = document.querySelector('#b8');
const result8 = document.querySelector('#res8');

btn8.onclick = function() {
  const a = +inp8.value;
  if (a % 2 === 0) {
    result8.value = 'the number is even';
  } else {
    result8.value = 'the number is NOT even';
  }
};
inp8.onchange = function() {
  result8.value = '';
};

// Task 9.
// Создайте 2 инпута. Если оба инпута заполнены (не равны
//   пустой строке), то по нажатию кнопки число из
//   первого инпута возведите в степень из второго
//   input. Результат выведите на страницу.
const inp9 = document.querySelector('#i9');
const inp91 = document.querySelector('#i91');
const btn9 = document.querySelector('#b9');
const result9 = document.querySelector('#res9');

btn9.onclick = function() {
  const a = +inp9.value;
  const b = +inp91.value;
  if (a != 0 && b != 0) {
    result9.value = a ** b;
  }
};
inp9.onchange = function() {
  result9.value = '';
};

// Task 10.
// Есть поле input куда пользователь может ввести свое имя.
// Нужно при нажатии кнопки - сказать с помощью
// alert('Hello имя_пользователя'), но хитрые пользователи
// часто нажимают несколько раз пробел.
// Вроде ничего и не ввел, но программа считывает
// пробелы и пытается работать. Напишите проверку,
// которая выводит предупреждение если пользователь
// ничего не ввел, или ввел один пробел. В остальных
// случаях - Hello...
const inp10 = document.querySelector('#i10');
const btn10 = document.querySelector('#b10');
const result10 = document.querySelector('#res10');

btn10.onclick = function() {
  const a = inp10.value;
  if (a === '' || a === ' ') {
    alert('вы не ввели свое имя!');
  } else {
    alert(`Hello ${a}`);
  }
};
inp10.onchange = function() {
  result10.value = '';
};

// Task 11.
// Хитрый пользователь научился обходить нашу предыдущую
// задачу, и начал вводить где 3, а где и 5 пробелов.
// Напишите программу, которая проверяет пробелы или
// нет введены в строку. Если она равна - выведите ошибку,
//если нет - сообщение с содержимым input.

const inp11 = document.querySelector('#i11');
const btn11 = document.querySelector('#b11');
const result11 = document.querySelector('#res11');

btn11.onclick = function() {
  const a = inp11.value.trim();
  if (a === '') {
    alert('вы ничего не ввели!');
  } else {
    alert(`Hello ${a}`);
  }
};
inp11.onchange = function() {
  result11.value = '';
};

// Task 12.
// Пользователь может ввести число от 1 до 3. Если
// пользователь ввел 1 - то в консоль выведите слово
// "один" и т.д. Для решения используйте switch.
const inp12 = document.querySelector('#i12');
const btn12 = document.querySelector('#b12');

btn12.onclick = function() {
  const a = +inp12.value;
  switch (a) {
    case 1:
      console.log('один');
      break;
    case 2:
      console.log('два');
      break;
    case 3:
      console.log('три');
      break;
    default:
      console.log('Вы ввели неверное число');
  }
};

//Task 13.
// Пользователь может ввести номер дома. Если дом от 1
// до 5 - то улица 1, если от 6 до 11 - улица 2,
// если от 11 до 20 - улица 3. Используя if,
// elseif - реализуйте программу, которая будет
// указывать улицу в зависимости от введенного дома.

const inp13 = document.querySelector('#i13');
const btn13 = document.querySelector('#b13');

btn13.onclick = function() {
  const houseNumber = +inp13.value;

  if (houseNumber >= 1 && houseNumber <= 5) {
    console.log('улица 1');
  } else if (houseNumber >= 6 && houseNumber <= 10) {
    console.log('улица 2');
  } else if (houseNumber >= 11 && houseNumber <= 20) {
    console.log('улица 3');
  } else {
    console.log('некорректные данные');
  }
};

// Task 14.
// Создайте input куда пользователь может ввести количество
//  рентген. Это число от 0 и до 1000. С помощью if, else if реализуйте
//  вывод по таблице: от 0 до 25 - не обнаруживается до 50 -
//  снижение числа лимфоцитов до 100 - вялость, рвота,
//  до 150 - смертность 5%, до 350 - смертность 50% за 30 суток,
//  до 600 - 90% смертность за 2 недели. Вывод результатов сделайте
//  на страницу.

const inp14 = document.querySelector('#i14');
const btn14 = document.querySelector('#b14');
const r14 = document.querySelector('#r14');

btn14.onclick = function() {
  const xRays = +inp14.value;
  if (xRays < 0 || xRays > 1000) {
    r14.value = 'некорректные данные';
  } else if (xRays >= 0 && xRays <= 25) {
    r14.value = 'не обнаруживается';
  } else if (xRays <= 50) {
    r14.value = 'снижение числа лимфоцитов';
  } else if (xRays <= 100) {
    r14.value = 'вялость, рвота';
  } else if (xRays <= 150) {
    r14.value = '5% смертность';
  } else if (xRays <= 350) {
    r14.value = 'смертность 50% за 30 суток ';
  } else if (xRays <= 600) {
    r14.value = 'смертность 90% за 2 недели ';
  } else {
    r14.value = 'летальный исход';
  }
};

// Task 15.
// Создайте переменные x = 1, y = 0. Выведите в консоль результат
// операции x && y, а затем x || y. Изучите результат.
const x = 1;
const y = 0;
console.log(x && y); // 0
console.log(x || y); // 1
// ничего не понял, но очень интересно :))

// Task 16.
// В Казахстане, налог на объем двигателя объемом 500 куб составляет
// 2525 тенге, 1200 куб - 5050 тенге, 1600 - 8275 тенге, 1900 куб -
// 9675 тенге, 2000 - 11075 тенге. Напишите программу, где пользователь
// может ввести в input объем двигателя до 2000 куб включительно и
// получить налог на данный двигатель.

const inp16 = document.querySelector('#i16');
const btn16 = document.querySelector('#b16');
const r16 = document.querySelector('#r16');

btn16.onclick = function() {
  const vEn = +inp16.value;
  if (vEn < 0 || vEn > 2000) {
    r16.value = 'некорректные данные';
  } else if (vEn <= 500) {
    r16.value = 'налог 2525 тенге';
  } else if (vEn <= 1200) {
    r16.value = 'налог 5050 тенге';
  } else if (vEn <= 1600) {
    r16.value = 'налог 8275 тенге';
  } else if (vEn <= 1900) {
    r16.value = 'налог 9675 тенге';
  } else {
    r16.value = 'налог 11075 тенге';
  }
};

// Task 17.
// Создайте 2 инпута. В первый пользователь может ввести число
// денег в долларах. Во второй - строку euro, rub, uah.
// Используя if, elseif сделайте по нажатию кнопки пересчет в ту
// валюту, которую ввел пользователь.

const inp17 = document.querySelector('#i17');
const inp172 = document.querySelector('#i172');
const b17 = document.querySelector('#b17');
const r17 = document.querySelector('#r17');

b17.onclick = function() {
  const coins = +inp17.value;
  const currency = inp172.value.trim();

  if (currency == 'uah') {
    return (r17.value = 2.632 * coins);
  } else if (currency == 'eur') {
    return (r17.value = 72.49 * coins);
  } else if (currency == 'rub') {
    return (r17.value = 1 * coins);
  } else {
    return (r17.value = 'В поле валюты можно ввести только uah, eur или rub');
  }
};

// Task 18.
// Проделайте предыдущую задачу с помощью switch case.

const inp18 = document.querySelector('#i18');
const inp182 = document.querySelector('#i182');
const b18 = document.querySelector('#b18');
const r18 = document.querySelector('#r18');

b18.onclick = function() {
  const coins = +inp18.value;
  const currency = inp182.value.trim();

  switch (currency) {
    case 'uah':
      r18.value = 2.632 * coins;
      break;
    case 'eur':
      r18.value = 72.49 * coins;
      break;
    case 'rub':
      r18.value = 1 * coins;
      break;
    default:
      r18.value = 'В поле валюты можно ввести только uah, eur или rub';
      break;
  }
};

// Task 19.
// Создайте 2 input куда пользователь может ввести числа. В третий
// input - может ввести знак - минус, плюс, умножить, поделить.
// С помощью if, else if по нажатию кнопки выводите результат
// выбранной операции на страницу.

const inp19 = document.querySelector('#i19');
const inp192 = document.querySelector('#i192');
const inp193 = document.querySelector('#i193');
const b19 = document.querySelector('#b19');
const r19 = document.querySelector('#r19');

b19.onclick = function() {
  const action = inp193.value.trim();
  const firstNumber = +inp19.value;
  const secondNumber = +inp192.value;

  if (action == '*') {
    return (r19.value = firstNumber * secondNumber);
  } else if (action == '/') {
    return (r19.value = firstNumber / secondNumber);
  } else if (action == '+') {
    return (r19.value = firstNumber + secondNumber);
  } else if (action == '-') {
    return (r19.value = firstNumber - secondNumber);
  } else {
    return (r19.value = 'В поле action можно ввести только +, -, * или /');
  }
};

// Task 20.
// Проделайте предыдущую задачу с помощью switch case.

const inp20 = document.querySelector('#i20');
const inp202 = document.querySelector('#i202');
const inp203 = document.querySelector('#i203');
const b20 = document.querySelector('#b20');
const r20 = document.querySelector('#r20');

b20.onclick = function() {
  const action = inp203.value.trim();
  const firstNumber = +inp20.value;
  const secondNumber = +inp202.value;

  switch (action) {
    case '*':
      return (r20.value = firstNumber * secondNumber);
    case '/':
      return (r20.value = firstNumber / secondNumber);
    case '+':
      return (r20.value = firstNumber + secondNumber);
    case '-':
      return (r20.value = firstNumber - secondNumber);
    default:
      return (r20.value = 'В поле action можно ввести только +, -, * или /');
  }
};
