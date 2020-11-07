

function breweryAPICall(queryName){
  
  let queryURL = "https://api.openbrewerydb.org/breweries/search?query="+queryName;
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
    $("#brewery-type").text(brewery.brewery_type);
    $("#brewery-address").text(brewery.street);
    $("#brewery-phone").text(brewery.phone);
    $("#brewery-website").text(brewery.website_url);
    
    console.log(brewery.longitud);
    console.log(brewery.latitud);

    returnCoords = [brewery.latitud,brewery.longitud];

    return returnCoords;
  
  });


}  
