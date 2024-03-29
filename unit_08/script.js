// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {
  let i = 0;
  let result = '';
  while (i <= 100) {
    result += `${i} `;
    i += 1;
  }
  return result;
}

//console.log(func_1());

// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(a, b) {
  let i = a;
  let result = '';
  while (i <= b) {
    result += `${i} `;
    i++;
  }
  return result;
}
//console.log(func_2(4, 9));

// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2
// параметра числа и возращает строку от большего числа меньшего
// с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {
  const max = a > b ? a : b;
  const min = a < b ? a : b;
  let i = max;
  let result = '';
  while (i >= min) {
    result += `${i} `;
    i--;
  }
  return result;
}
//console.log(func_3(19, 15));

// Task 4
// Создайте функцию func_4, которая принимает от пользователя
// 3 параметра(число, число и шаг) и возращает строку от
// большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {
  const max = a > b ? a : b;
  const min = a < b ? a : b;
  let i = max;
  let result = '';
  while (i >= min) {
    result += `${i} `;
    i -= c;
  }
  return result;
}
//console.log(func_4(19, 30, 3));

// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел
// от 0 до 20.

function func_5() {
  let i = 0;
  result = 0;
  while (i <= 20) {
    result += i;
    i++;
  }
  return result;
}
//console.log(func_5());

// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра,
// и если второй параметр больше первого, то возвращает сумму
// чисел от первого до второго включительно. Если нет -
// то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {
  if (a > b) {
    return false;
  }
  let i = a;
  result = 0;
  while (i <= b) {
    result += i;
    i++;
  }
  return result;
}
//console.log(func_6(12, 11));

// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра,
// и если второй параметр больше первого, то возвращает
// произведение чисел от первого до второго включительно.
// Если нет - то false.Считаем, что пользователь может ввести
// только числа.

function func_7(a, b) {
  if (a > b) {
    return false;
  }
  let i = a;
  result = a;
  while (i < b) {
    i += 1;
    result *= i;
  }
  return result;
}
//console.log(func_7(10, 10));

// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная
// с первого количество монет увеличиваетя в 2 раза. Напишите
// функцию func_8, которая вернет день, в который количество
// монет станет больше или равно 1 000 000.

function func_8() {
  let coins = 333;
  let day = 0;
  while (coins <= 1000000) {
    day += 1;
    coins *= 2;
  }
  return day;
}
// console.log(func_8());

// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и
// возращает строку от первого до второго введенного параграфа,
// где все четные числа заменены на символ нуля(0).

function func_9(a, b) {
  let i = a;
  let result = '';
  while (i <= b) {
    result += i % 2 === 0 ? '0 ' : `${i} `;
    i++;
  }
  return result;
}
//console.log(func_9(3, 10)); // 3 0 5 0 7 0 9 0

// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

function func_10() {
  let i = 0;
  result = '';
  while (i < 6) {
    result += i % 2 !== 0 ? '* ' : '** ';
    result += '\n';
    i++;
  }
  return result;
}
//console.log(func_10());

// Task 11
// Создайте функцию func_11, которая вернет следующую строку:
// 10 1 9 2 8 3. .0 10. Решаем через while.

function func_11() {
  let i = 1;
  let k = 10;
  let result = '';
  while (i <= 10) {
    result += `${k} ${i} `;
    i += 1;
    k -= 1;
  }
  return result;
}
//console.log(func_11());

// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум
// один раз в любом случае.Т.е.вначале идет срабатывание,
// а потом проверка.

function func_12() {
  let a = 0;
  do console.log('do while work');
  while (a < 0);

  let b = 0;
  while (b < 0) {
    console.log('while work');
  }
}
//console.log(func_12());

// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0
// включительно.Используем цикл do while.

function func_13() {
  let i = 100;
  let result = '';
  do {
    result += `${i} `;
    i -= 1;
  } while (i >= 0);
  return result;
}
//console.log(func_13());

// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.
// Во второй и следующие дни - на 30 % больше от предыдущего дня.
// Напишите функцию func_14 которая вернет день, когда Стаханова
// побьют все, кто с ним работает, этот день наступит тогда,
// когда Стаханов в день добудет 132 тонны угля.Используйте для
// решения do while.

function func_14() {
  let u = 5;
  let d = 1;
  let result = 0;
  do {
    u += u * 0.3;
    d++;
  } while (u <= 132);
  return d;
}
//console.log(func_14()); // 14

// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.
// Во второй день на 0.3 литра зелья больше.Напишите функцию
// func_15, которая вернет день, когда в Хоргвардсе не останется
// пустых котлов(суммарный объем котлов в замке 568 литров).
// Обратите внимание, что вам нужно найти суммарных объем
// сваренного зелья, а не дневной объем.Используем do while.

function func_15() {
  z = 1.1;
  d = 1;
  do {
    z += z + z * 0.3;
    d++;
  } while (z <= 568);
  return d;
}
console.log(func_15());

// Task 16
// На странице есть три параграфа p.task-16. Используя цикл
// do ..while посчитайте количество параграфов p.task-16 и если
// число четное - верните значение, если нет - верните false.
// Код напишите в функции func_16.

function func_16() {
  const pars = document.querySelectorAll('p');
  let idx = 0;
  let num = 0;
  do {
    if (pars[idx].className === 'task-16') {
      num++;
    }
    idx += 1;
  } while (idx < pars.length);
  if (num % 2 === 0) {
    return num;
  }
  return false;
}
//console.log(func_16());

// Task 17
// На странице есть три параграфа p.task-16. Используя цикл
// do ..while выведите в первый p.task-16 - число 1, во второй 2
// и т.д.Решение оформите в виде функции func_17.

function func_17() {
  const pars16 = document.querySelectorAll('.task-16');
  let idx = 0;
  do {
    pars16[idx].textContent = idx + 1;
    idx++;
  } while (idx < pars16.length);
}
func_17();

// Task 18
// На странице есть три параграфа p.task-18. Используя цикл
// do ..while выведите в первый p.task-18 - число равное количеству
// параграфов p.task - 18, во второй на единицу меньше и т.д.
// Решение оформите в виде функции func_18.

function func_18() {
  const pars18 = document.querySelectorAll('.task-18');
  let idx = 0;
  let num = pars18.length;
  do {
    pars18[idx].textContent = num;
    num--;
    idx++;
  } while (idx < pars18.length);
}
func_18();

// Task 19
// Напишите функцию func_19, которая возвращает строку вида:
// 1 * 3 * 5...до 20. Решите с помощью do while.

function func_19() {
  let num = 1;
  let result = '';
  let sw;
  do {
    sw = !sw;
    result += sw ? `${num} ` : '* ';
    num++;
  } while (num <= 20);
  return result;
}
//console.log(func_19());

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

function func_20() {
  let i = 0;
  let result = '';
  do {
    let c = 0;
    i++;
    do {
      c++;
      result += i === c ? '1 ' : '* ';
    } while (c < 4);
    result += '\n';
  } while (i < 4);
  return result;
}
// console.log(func_20());
