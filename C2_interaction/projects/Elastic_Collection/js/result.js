// Get the filter
var filter = document.getElementsByClassName("filter")[0];

// Get the button that opens the modal
var filterbtn = document.getElementById("expand");


// Get the title
var title = document.getElementsByClassName("title")[0];

var container = document.getElementsByClassName("container")[0];
filterbtn.onclick = function() {
  filter.style.display = "none";
};

//change the text in the button when filter btn is clicked
//click again to hide the filter and change back the text
filterbtn.addEventListener('click', function() {
  if (filterbtn.getAttribute("data-text-swap") == filterbtn.innerHTML) {
   filterbtn.innerHTML = filterbtn.getAttribute("data-text-original");
    filter.style.display = "block";
  } else {
    filterbtn.setAttribute("data-text-original", filterbtn.innerHTML);
    filterbtn.innerHTML =filterbtn.getAttribute("data-text-swap");
  }
}, false);



var filterEasy= document.querySelector(".js-easy");
filterEasy.addEventListener("click", function() { 
  window.location.href = "easy.html";
});

var filterMedium= document.querySelector(".js-medium");
filterMedium.addEventListener("click", function() {
  window.location.href = "medium.html";
});


var filterHard= document.querySelector(".js-hard");
filterHard.addEventListener("click", function() {
  window.location.href = "hard.html";
});

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

/*
     var resultImg= document.querySelector(".plant-img");
     resultImg.addEventListener("click", function() {
      window.location.href = "detail.html";
    });
    */
   
//create close Icon
var close=document.createElement("div");
close.classList.add("close");
close.innerHTML ="&times;"
plantContainer.append(close);

    // add plant names
    var plantName = document.createElement("h2");
    plantName.classList.add("plant-name");    
    plantName.innerText = plant.fields.Name;
    plantContainer.append(plantName);

  // add plant care level
  var plantCare= document.createElement("p");
  plantCare.classList.add("plant-care");
  plantCare.innerText = plant.fields.CareLevel+" Care";
  plantContainer.append(plantCare);

   


//create Sun Icon
       var sunIcon=document.createElement("div");
       sunIcon.classList.add("sun-icon");
       plantContainer.append(sunIcon);
//Import Sun Icon Img
       var sunIconImg=document.createElement("img");
       sunIconImg.classList.add("sun-icon-img");
       sunIconImg.src = "assets/photos/sunicon.png"
       sunIcon.append(sunIconImg);
      



 // add plant sun requirement
 var plantSun = document.createElement("p");
 plantSun.classList.add("sun");
 plantSun.innerText = "Sun: "+ plant.fields.lighting;
 sunIcon.append(plantSun);

 //create water Icon
 var waterIcon=document.createElement("div");
 waterIcon.classList.add("water-icon");
 plantContainer.append(waterIcon);
//Import water Icon Img
 var waterIconImg=document.createElement("img");
 waterIconImg.classList.add("water-icon-img");
 waterIconImg.src = "assets/photos/watericon.png"
 waterIcon.append(waterIconImg);


       // add plant water requirement
       var plantWater= document.createElement("p");
       plantWater.classList.add("water");
       plantWater.innerText = "Water: "+ plant.fields.Water;
       waterIcon.append(plantWater);


            // add event listener to add active class to plant container
      plantContainer.addEventListener("click", function() {
      sunIcon.classList.toggle("active");
      sunIconImg.classList.toggle("active");
      waterIcon.classList.toggle("active");
      waterIconImg.classList.toggle("active");
      plantSun.classList.toggle("active");
      plantWater.classList.toggle("active");
      plantCare.classList.toggle("active");
      plantName.classList.toggle("active");
      close.classList.toggle("active");
      plantContainer.classList.toggle("active");
    });

  });
}


