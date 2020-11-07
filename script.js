let apiKey = "d3072320e04803d944e7b8f07bb0cdd9";
let lat = 44.98;
let lon = -93.27;

let queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,daily&appid=" + apiKey;

function toFar(degreesKelvin) {
    let degreesFar = ((degreesKelvin - 273.15) * (9 / 5) + 32).toFixed(2);
    return degreesFar;
}

function toMPH(windSpeed) {
    return (windSpeed * 2.2369).toFixed(2);
}

function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

function toTime(unixTime) {
    let unix_timestamp = unixTime;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    if (hours > 12) {
        hours = hours - 12;
    }
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 00:00:00 format
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}


// function to pull on click
$("#brewery-button").click(function(event) {
    event.preventDefault();
// Pulls the value from the input field
let brewSearchVal = $("#brewery-input").val();
// URL for API call
let brewQuery = "https://api.openbrewerydb.org/breweries/search?query="+brewSearchVal;



// AJAX call for getting JSON object
$.ajax({
    url: brewQuery,
    method: "GET"
    // The promise
  }).then(function(response) {
    console.log(response);


});
    
  
});

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log("Farenheit: " + toFar(response.current.temp));
    console.log("Feels like: " + toFar(response.current.feels_like));
    let weatherCondition = response.current.weather[0].description;
    weatherCondition = titleCase(weatherCondition);
    console.log("Weather condition: " + weatherCondition);
    //console.log(response.current.wind_speed);
    console.log("Wind speed: " + toMPH(response.current.wind_speed) + " mph");
    console.log(toTime(response.current.sunset));



});