// Enter key functionality learned from W3 schools
// Get the input field
var input = document.getElementById("brewery-input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("brewery-button").click();
  }
});

// Gets user location for default weather data
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
// Calls weatherAPI to populate weather divs with weather at user's location
function showPosition(position) {
  weatherAPICall(position.coords.latitude, position.coords.longitude);
}

getLocation();


// Function to convert degrees Kelvin to degrees Farenheit
function toFar(degreesKelvin) {
    let degreesFar = ((degreesKelvin - 273.15) * (9 / 5) + 32).toFixed(2);
    return degreesFar;
}

// Function to convert windspeed from meters/second to miles/hour
function toMPH(windSpeed) {
    return (windSpeed * 2.2369).toFixed(2);
}

// Function to split a string, capitalize first letters of each word, then recombine string
function titleCase(str) {
    // Split string at each space
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // Capitalize first letter of each word
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

// Function to convert time from Unix time to 00:00:00
// (Got this function from Stack Overflow)
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



function weatherAPICall (breweryLat, breweryLon) {

    let apiKey = "d3072320e04803d944e7b8f07bb0cdd9";
    // Set brewery latitude and longitude from function arguments
    let lat = breweryLat;
    let lon = breweryLon;
    // Populate queryURL using latitude/longitude arguments and API key
    let queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,daily&appid=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Set breweryTemp from API response, send to #brewery-temp
        let breweryTemp = toFar(response.current.temp);
        $("#brewery-temp").text("Temperature: " + breweryTemp + "\xB0 F");
        // Set breweryFeelsLike from API response, send to #brewery-feels-like
        let breweryFeelsLike = toFar(response.current.feels_like);
        $("#brewery-feels-like").text("Feels like: " + breweryFeelsLike + "\xB0 F");
        // Set brewerySunset from API response, send to #brewery-sunset
        let brewerySunset = toTime(response.current.sunset);
        $("#brewery-sunset").text("Sunset: " + brewerySunset + " PM");
        // Set breweryClouds from API response, send to #brewery-clouds
        let breweryClouds = titleCase(response.current.weather[0].description);
        $("#brewery-clouds").text("Conditions: " + breweryClouds)
        // Set breweryWindspeed from API response, send to #brewery-windspeed
        let breweryWindspeed = toMPH(response.current.wind_speed);
        $("#brewery-windspeed").text("Wind speed: " + breweryWindspeed + " mph");
    
    });
}

//weatherAPICall(44.98, -93.26);
