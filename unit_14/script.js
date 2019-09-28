//http://api.openweathermap.org/data/2.5/weather?q=Saint%20Petersburg&appid=0bf7f584adc049d7716446a36ab936ca
fetch(
  'http://api.openweathermap.org/data/2.5/weather?q=Saint%20Petersburg&appid=0bf7f584adc049d7716446a36ab936ca'
)
  .then(resp => resp.json())
  .then(data => console.log(data));

const cardSubt = document.querySelector('.card-subt');
document.querySelector('.select').onchange = function() {
  console.log(this.value);
  cardSubt.textContent = this.value;
};
