const apiKey = "c7865283848e7d54f0b96fd29f11da9e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=c7865283848e7d54f0b96fd29f11da9e&units=metric&q=bamenda";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp ) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + " km/h";

}
checkWeather() 