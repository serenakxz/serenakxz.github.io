base('Plants').select({
  view: "Grid view"
})
.eachPage(gotPageOfPlants, gotAllPlants);
// an empty array to hold our data
var plants = [];

// callback function that receives our data
function gotPageOfPlants(records, fetchNextPage) {
  // add the records from this page to our array
  plants.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPlants(err) {
  //console.log("gotAllAlbums()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogPlants();
  showPlants();
}

// just loop through the plants and console.log them
function consoleLogPlants() {
  //console.log("consoleLogAlbums()");
  plants.forEach(plant => {
    console.log("Plants:", plant);
    /*console.log( "Album titles:", album.fields.album_title)
    console.log( "Artist:", album.fields.artist)
    console.log( "Album Cover:", album.fields.album_artwork[0].url)*/
  });
} 

// look through our airtable data, create elements
function showPlants() {
  //console.log("showAlbums()");
  plants.forEach(plant => {
    // create container for each album
    var plantContainer = document.createElement("div");
    plantContainer.classList.add("plant-container");
    document.querySelector(".container").append(plantContainer);



     // add plant imgs
     /*var plantImage = document.createElement("img");
     plantImage.classList.add("plant-img");
     plantImage.src =plant.fields.plant_img[0].url;
     plantContainer.append(plantImage);*/

  
     var imgUrl=plant.fields.plant_img[0].url;
     plantContainer.style.backgroundImage = "url("+imgUrl+")";


   

  });
}


