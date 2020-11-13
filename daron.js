// Pull from localstorage

let breweryHistory = localStorage.getItem("storedHistory");
let currentBrewery = localStorage.getItem("storedBrewery");
let historyUL = $('#brewery-history');

//if there's no local storage, initialize base

if(breweryHistory === null){
  console.log("breweryHistory is empty");
  breweryHistory = [];
  localStorage.setItem('storedHistory', JSON.stringify(breweryHistory) );
}
else{
  breweryHistory = JSON.parse(breweryHistory);
}
if(currentBrewery === null){
  currentBrewery ='';
  localStorage.setItem('storedBrewery', JSON.stringify(currentBrewery));
}
else{
  currentBrewery = JSON.parse(currentBrewery);
}

//generate brewery history in sidebar

if(breweryHistory !== []){
  console.log("updating at first");
  console.log(breweryHistory)
  updateHistoryUL(breweryHistory);
}

function updateHistoryUL(historyArray){
  //empty html element
  historyUL.empty();
  //reset and re-update button
  for (let i = 0; i < historyArray.length; i++){
    console.log("historyArray[i]: "+historyArray[i]);
    let buttonLabel = historyArray[i];

    let newLI = $('<li id="brewery-in-history"></li>'); //new list element
    let newButton = $('<button class="waves-effect waves-light btn sidebar-button" id="'+buttonLabel+'"></button'); //new button element
    newButton.text(buttonLabel);
    newLI.append(newButton);

    $(newButton).on('click', function(){
      breweryAPICall($(newButton).attr("id"))
    }); //add onclick function re-display that brewery

    historyUL.append(newLI);//add the list element with the button inside
    historyUL.append('<br>');//spacing
  }
}

function updateArray(array, newValue){
  if(!array.includes(newValue)){
    //put the item at the beginning of the array
    array = [newValue].concat(array);
  }
  else{
    let firstPart = array.slice(0,array.indexOf(newValue));
    let lastPart = array.slice(array.indexOf(newValue)+1, array.length);
    //remove the item and put it first again
    array = [newValue].concat(firstPart, lastPart);
  }
  return array;
}

breweryHistory = updateArray(breweryHistory, currentBrewery);
localStorage.setItem('storedHistory', JSON.stringify(breweryHistory));

//if we have something saved as the current brewery, load it
if(currentBrewery !== ""){
  console.log("Getting weather on page load");
  breweryAPICall(currentBrewery);
}
