console.log('Adel');

console.log(7);

console.log(`'Добро ' + 'пожаловать ' + ' на курс'`);

//     2019 - 200

//alert(2019 - 200);

document.getElementById('one').innerHTML = 'Hello World';

document.getElementById('two').innerHTML = 12 * 12;

document.querySelector('.one').innerHTML = 'Hello World';

document.querySelector('span').innerHTML = 'world';

document.querySelector('.three').innerHTML = '<h3>Something</h3>';

let f = document.querySelector('.four');
f.innerHTML = '<h4>new text</h4>';
f.innerHTML +=
  '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, exercitationem?</p>';

let a = document.querySelector('.five');
a.innerHTML = 3.1415;

let div7 = document.querySelector('.seven');
div7.innerHTML = `<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">`;

const z1 = 6;
const z2 = 3;

document.querySelector('.eight').innerHTML = z1 * z2;

const y1 = 6;
const y2 = 3;
document.querySelector('.nine').innerHTML = y1 / y2;

const x1 = 'Hello';
const x2 = 5;
document.querySelector('.ten').innerHTML = x1 + x2;

const d1 = document.querySelector('.test-1');
console.log(d1);

let d2 = document.querySelector('.test-2');
console.log(d2);
d2 = 5;
console.log(d2);

let divS3 = document.querySelector('.s3');
console.log(divS3);
divS3 = document.querySelector('s4');
console.log(divS3); //почему в консоль выводится null ?
