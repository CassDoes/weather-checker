//display current date
var dateEl = document.querySelector('.currentDate');
dateEl.innerHTML = moment().format("dddd MMMM Do, YYYY");

//display current time
var timeEl = document.querySelector('.currentTime');
timeEl.innerHTML = moment().format("h:mm a");

searchValue = document.querySelector(".textarea");

//get current temp, wind, and humidity for selected city
var getWeather = function() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=f9f4a80742920ffda486898fcfc585db";
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
        var tempEl = document.querySelector('.temp');
        tempEl.textContent = data.main.temp;
        
        var windEl = document.querySelector('.wind');
        windEl.textContent = data.wind.speed;

        var humidityEl = document.querySelector('.humidity');
        humidityEl.textContent = data.main.humidity;

        //var uvIndex = document.querySelector('.uv-index');
        //uvIndex.textContent = data.main.temp;

        console.log(data);
            });
        }
    })
}; getWeather();

//things