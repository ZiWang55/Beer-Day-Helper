// let breweryName = document.querySelector("#brewery-name");
// let breweryType = document.querySelector("#brewery-type");
// let breweryAddress = document.querySelector("brewery-address");
// let breweryPhone = document.querySelector("brewery-phone");
// let breweryWebsite = document.querySelector("#brewery-website");



let queryURL = "https://api.openbrewerydb.org/breweries?by_city=san_diego";

$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function(response) {

  // Log the queryURL
  console.log(queryURL);

  // Log the resulting object
  console.log(response);

  // Transfer content to HTML
  // $("#brewery-name").html("<h1>" + response.name + " Weather Details</h1>");
  // $("#brewery-type).text("Wind Speed: " + response.wind.speed);
  // $("brewery-address").text("Humidity: " + response.main.humidity);
  
  

  // Log the data in the console as well
//   console.log("Wind Speed: " + response.wind.speed);
//   console.log("Humidity: " + response.main.humidity);
//   console.log("Temperature (F): " + tempF);
});



