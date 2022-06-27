const search = document.querySelector('.input');
const btn = document.querySelector('.button');
// const weather = document.querySelector('.weather');
const main = document.querySelector('.main');

let city;

search.addEventListener('input', () => {
  city = search.value;
  return city;
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  getPost();
  console.log(city);
});



async function getPost () {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4e29866b2611de55f442fd838f86598`);
  if(response.ok == false){
    alert('Не правильно введен город')
  }
  console.log(response)
  let content = await response.json();
  document.querySelector('.city').textContent = `${content.name}, ${content.sys.country}`;
  document.querySelector('.data').textContent = b;
  document.querySelector('.num').textContent = new Date().toLocaleDateString();
  document.querySelector('.temp').textContent = `${Math.floor(content.main.temp - 273)}°`;
  document.querySelector('.main').textContent = content.weather[0].main;
  const img = document.createElement('img');
  img.classList.add('img');
  main.appendChild(img);
  img.src = `https://openweathermap.org/img/w/${content.weather[0].icon}.png`
}

let i = new Date(2014, 0, 3);
function getWeekDay(date) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  return days[date.getDay()];
}
let b = getWeekDay(i);

console.log(getWeekDay(i))


// 