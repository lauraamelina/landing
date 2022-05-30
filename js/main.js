const API_KEY = '54f1c127920de15bda65f23b007b9ea3'; 
const URL = 'http://api.openweathermap.org/data/2.5/';

const button = document.getElementById("sendButton");
const main = document.getElementById("main");
const inputElement = document.getElementById("search");
const img = document.getElementById("img");
const h3 = document.getElementById("h3");


button.addEventListener("click", ()=>{
  searchWeather(inputElement.value);
});


function searchWeather(wordToSearch){
  console.log('Palabra', wordToSearch);

  const fetchPromise = fetch(`http://api.openweathermap.org/data/2.5/find?q=${wordToSearch}&appid=${API_KEY}&units=metric`);
 
  fetchPromise.then(response => {
  
    return response.json();
  }).then(result => {
    console.log('data', result);
    weather = result.list[0].weather[0].main;
    console.log(weather);
    madeGrid(result);
    cambiarImagenJS(weather,wordToSearch);
  }).catch(err =>{
    console.log('salio mal!: ', err);
  });


function cambiarImagenJS(weather,wordToSearch){
  console.log('funcion' , weather);
  console.log('funcion' , wordToSearch);
  if (weather == "Rain") {
    img.src = "img/clima.png";
   h3.innerHTML = `${wordToSearch} -  Lluvia`;
  
  } else if (weather == "Clear") {
    img.src = "img/dom.png";
   h3.innerHTML = `${wordToSearch} -  Despejado`;

   } else if (weather == "Clouds") {
    img.src = "img/nube.png";
    h3.innerHTML = `${wordToSearch} -  Nublado`;

   }  else if (weather == "Snow") {
    img.src = "img/snowflake.png";
    h3.innerHTML = `${wordToSearch} -  Nieve`;

   } 
}


}

function madeGrid(data){
  const temp = data.list[0].main.temp ;
  const temp_max = data.list[0].main.temp_max ;
  const temp_min = data.list[0].main.temp_min ;
  const humidity = data.list[0].main.humidity ;
  const feels = data.list[0].main.feels_like ;
  const pressure = data.list[0].main.pressure ;
  const wind = data.list[0].wind.speed ;

  main.innerHTML = `<ul><li><p>Temperatura: ${temp} ºC</p></li><li><p>Temp min: ${temp_min} ºC</p></li><li><p>Temp max: ${temp_max} ºC</p></li><li><p>Humedad: ${humidity} %</p></li><li><p>Sensación Térmica: ${feels} ºC</p></li><li><p>Presión Atmosférica: ${pressure} hPa</p></li><li><p>Velocidad del viento: ${wind} meter/sec</p></li></ul>`


}


