

function breweryAPICall(queryName){
  let brewery;
  let queryURL = "https://api.openbrewerydb.org/breweries/search?query="+queryName+"&per_page=1"
  let returnCoords;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  
  .then(function(response) {
    brewery = response[0];
  
    // Log the queryURL
    //console.log(queryURL);
  
    // Log the resulting object
    console.log(brewery);
  
    // Transfer content to HTML
    //console.log(brewery.name);
    $("#brewery-name").text(brewery.name);
    $("#brewery-type").text(brewery.brewery_type);
    $("#brewery-address").text(brewery.street);
    let breweryPostal = brewery.postal_code;
    $("#brewery-city").text(brewery.city + ", " + brewery.state + " " + breweryPostal.substring(0,5));
    $("#brewery-phone").text(brewery.phone);
    $("#brewery-website").text(brewery.website_url);
    
    //console.log(brewery.longitude);
    //console.log(brewery.latitude);

    returnCoords = [brewery.latitude,brewery.longitude];
  
    //console.log("brewery: "+brewery);
    $("#brewery-type").text("Brewery type: " + titleCase(brewery.brewery_type));
    $("#brewery-address").text(brewery.street);
    let breweryPhone = brewery.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    $("#brewery-phone").text(breweryPhone);
    $("#brewery-website").text(brewery.website_url);
    $("#brewery-website").attr("href", brewery.website_url);
    
    // Google map link
    let mapLink = "https://www.google.com/maps/search/?api=1&query=" + brewery.street + " " + brewery.city;
    
    $("#brewery-directions").text("Directions");
    $("#brewery-directions").attr("href", mapLink);
    
    $("#brewery-address").attr("href", mapLink);
    $("#brewery-city").attr("href", mapLink);


    currentBrewery = brewery.name;
    localStorage.setItem('storedBrewery', JSON.stringify(currentBrewery));
    breweryHistory = updateArray(breweryHistory, currentBrewery);
    localStorage.setItem('storedHistory', JSON.stringify(breweryHistory));
    updateHistoryUL(breweryHistory);
    
    weatherAPICall(brewery.latitude, brewery.longitude);
    });
    return brewery;
  };

