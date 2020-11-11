let apiKey = "d3072320e04803d944e7b8f07bb0cdd9";
let lat = 44.98;
let lon = -93.27;

let queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,daily&appid=" + apiKey;


// function to pull on click
$("#brewery-button").click(function(event) {
    event.preventDefault();
    
    
    // Pulls the value from the input field
    let brewSearchVal = $("#brewery-input").val();
    
    breweryAPICall(brewSearchVal)
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