//display current date
var dateEl = document.querySelector('.currentDate');
dateEl.innerHTML = moment().format("dddd MMMM Do, YYYY");

//display current time
var timeEl = document.querySelector('.currentTime');
timeEl.innerHTML = moment().format("h:mm a");

//get search information
$(document).ready(function() {
    $(".searchBtn").on("click", function() {
        var textareaEl = $('.textarea').val();
      $(".textarea").val("");
  
      getWeather(textareaEl);
    });
  
    //history tabs are clickable
    $(".search-history").on("click", "li", function() {
      getWeather($(this).text());
    });

});


//append search history
function historyTabs(text) {
    var li = $("<li>").addClass("historyTabs").text(text);
    $(".search-history").append(li);
};


//get current temp, wind, and humidity for selected city
var getWeather = function(textareaEl) {

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + textareaEl + "&units=imperial&appid=f9f4a80742920ffda486898fcfc585db";
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
        var tempEl = document.querySelector('.temp');
        tempEl.textContent = "Temp: " + data.main.temp + "°F";
        
        var windEl = document.querySelector('.wind');
        windEl.textContent = "Wind: " + data.wind.speed + " MPH";

        var humidityEl = document.querySelector('.humidity');
        humidityEl.textContent = "Humidity: " + data.main.humidity + "%";

        //var uvIndex = document.querySelector('.uv-index');
        //uvIndex.textContent = data.main;

        var cityEl = document.querySelector(".city-name")
        cityEl.textContent = "Current Forecast: " + textareaEl;
            });

            historyTabs(textareaEl);
        }

        else {
            alert("You must enter a valid City")
        }

        getForecast();
    });
};

//supposed to add to the 5-day forecast but I'm doing it incorrectly
var getForecast = function(textareaEl) {

    var apiForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + textareaEl + "&units=imperial&appid=f9f4a80742920ffda486898fcfc585db";
    fetch(apiForecast).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                var tempEl = document.querySelector('.card');
                tempEl.textContent = "Temp: " + data.main.temp + "°F";
    
            });
        }
    
    });
};