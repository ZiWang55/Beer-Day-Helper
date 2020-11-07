// function to pull on click
$("#brewery-button").click(function(event) {
    event.preventDefault();
    // Pulls the value from the input field
    let brewSearchVal = $("#brewery-input").val();
    
    breweryAPICall(brewSearchVal);
// URL for API call
// AJAX call for getting JSON object
// $.ajax({
//     url: BrewQuery,
//     method: "GET"
//     // The promise
//   }).then(function(response) {
//     console.log(response);
// });
    
  
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
