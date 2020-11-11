// let breweryName = document.querySelector("#brewery-name");
// let breweryType = document.querySelector("#brewery-type");
// let breweryAddress = document.querySelector("brewery-address");
// let breweryPhone = document.querySelector("brewery-phone");
// let breweryWebsite = document.querySelector("#brewery-website");





function breweryAPICall(queryName){
  
  let queryURL = "https://api.openbrewerydb.org/breweries/search?query="+queryName+"&per_page=2"
  let returnCoords;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
    let brewery = response[0];
  
    // Log the queryURL
    console.log(queryURL);
  
    // Log the resulting object
    console.log(response);
  
    // Transfer content to HTML
    console.log(brewery.name);
    $("#brewery-name").text(brewery.name);
    let breweryType = brewery.brewery_type;
    $("#brewery-type").text("Brewery type: " + titleCase(brewery.brewery_type));
    $("#brewery-address").text(brewery.street);
    $("#brewery-phone").text(brewery.phone);
    $("#brewery-website").text(brewery.website_url);
    $("#brewery-website").attr("href", brewery.website_url);

    console.log(brewery.longitude);
    console.log(brewery.latitude);

    weatherAPICall(brewery.latitude, brewery.longitude);
  });

}  
