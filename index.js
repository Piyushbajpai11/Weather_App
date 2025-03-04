var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");

var weatherIcon = document.querySelector(".weather-icon");

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const apiKey = "59d4acbbaf67a61ebe6d92d46ed7b206";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(x) {
    const response = await fetch(apiUrl + x + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
        var data = await response.json();

        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main === "Clouds")
            weatherIcon.src = "images/clouds.png";
        else if (data.weather[0].main === "Clear")
            weatherIcon.src = "images/clear.png";
        else if (data.weather[0].main === "Rain")
            weatherIcon.src = "images/rain.png";
        else if (data.weather[0].main === "Drizzle")
            weatherIcon.src = "images/drizzle.png";
        else if (data.weather[0].main === "Mist")
            weatherIcon.src = "images/mist.png";

        document.querySelector(".weather").style.display = "block";
    }




}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather()
