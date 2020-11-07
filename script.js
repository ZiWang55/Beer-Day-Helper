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
