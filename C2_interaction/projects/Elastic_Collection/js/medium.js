base('Plants').select({
  view: "medium"
})
  .eachPage(gotPageOfPlants, gotAllPlants);

var filterMedium = document.querySelector(".js-medium");
filterMedium.style.color = "#ff6b00";

var filterEasy = document.querySelector(".js-easy");
filterEasy.addEventListener("click", function () {
  window.location.href = "easy.html";
});

var filterHard = document.querySelector(".js-hard");
filterHard.addEventListener("click", function () {
  window.location.href = "hard.html";
});

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
