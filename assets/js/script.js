var timeEl = document.querySelector('.currentTime');
timeEl.innerHTML = moment().format("MMMM Do, YYYY");

var getRepoIssues = function() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=f9f4a80742920ffda486898fcfc585db";
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function() {
                displayIssues();
            });
        }
    })
};

getRepoIssues();

//ONE CALL api key f9f4a80742920ffda486898fcfc585db