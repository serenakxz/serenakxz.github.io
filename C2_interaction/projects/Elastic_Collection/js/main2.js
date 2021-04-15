// Get the filter
var filter = document.getElementsByClassName("filter")[0];

// Get the title
var title = document.getElementsByClassName("title")[0];
title.addEventListener("click",function(){
    window.location.href="index.html";
});

var bar = document.getElementsByClassName("sticky")[0];
var header = document.getElementsByClassName("header")[0];
// Get the button that opens the filter
var filterbtn = document.getElementById("hide");
var container = document.getElementsByClassName("container")[0];
filterbtn.onclick = function () {
    filter.style.display = "none";
};

        // Get the modal
        var modal = document.getElementById("myModal");
        
        var modalContent = document.getElementById("modal-content");

var resetBtn = document.getElementsByClassName("js-reset")[0];
//change the text in the button when filter btn is clicked
//click again to hide the filter and change back the text
filterbtn.addEventListener('click', function () {
    if (filterbtn.getAttribute("data-text-swap") == filterbtn.innerHTML) {
        filterbtn.innerHTML = filterbtn.getAttribute("data-text-original");
        filter.style.display = "block";
    } else {
        filterbtn.setAttribute("data-text-original", filterbtn.innerHTML);
        filterbtn.innerHTML = filterbtn.getAttribute("data-text-swap");
    }
}, false);

var gardenBtn = document.createElement("button")
        gardenBtn.classList.add("garden-btn");
        gardenBtn.innerHTML = "My garden";
       var headerContainer = document.getElementsByClassName("header")[0];
        headerContainer.append(gardenBtn);

var exitBtn = document.createElement("button")
        exitBtn.classList.add("exit-btn");
        exitBtn.innerHTML = "Exit My garden";
       var headerContainer = document.getElementsByClassName("header")[0];
        headerContainer.append(exitBtn);


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
    plants.forEach(plant => {
        console.log("Plants:", plant);
    });
}

// look through our airtable data, create elements
function showPlants() {
    plants.forEach(plant => {
        // create container for each plant
        var plantContainer = document.createElement("div");
        plantContainer.classList.add("plant-container");
        document.querySelector(".container").append(plantContainer);



        // add plant imgs
        /*var plantImage = document.createElement("img");
        plantImage.classList.add("plant-img");
        plantImage.src =plant.fields.plant_img[0].url;
        plantContainer.append(plantImage);*/


        var imgUrl = plant.fields.plant_img[0].url;
        plantContainer.style.backgroundImage = "url(" + imgUrl + ")";


        //create close Icon
        var close = document.createElement("div");
        close.classList.add("close");
        close.innerHTML = "&times;"
        plantContainer.append(close);



        // add plant names
        var plantName = document.createElement("h2");
        plantName.classList.add("plant-name");
        plantName.innerText = plant.fields.Name;
        plantContainer.append(plantName);

        // add plant care level
        var plantCare = document.createElement("p");
        plantCare.classList.add("plant-care");
        plantCare.innerText = plant.fields.CareLevel + " Care";
        plantContainer.append(plantCare);




        //create Sun Icon
        var sunIcon = document.createElement("div");
        sunIcon.classList.add("sun-icon");
        plantContainer.append(sunIcon);
        //Import Sun Icon Img
        var sunIconImg = document.createElement("img");
        sunIconImg.classList.add("sun-icon-img");
        sunIconImg.src = "assets/photos/sunicon.png"
        sunIcon.append(sunIconImg);




        // add plant sun requirement
        var plantSun = document.createElement("p");
        plantSun.classList.add("sun");
        plantSun.innerText = "Sun: " + plant.fields.lighting;
        sunIcon.append(plantSun);

        //create water Icon
        var waterIcon = document.createElement("div");
        waterIcon.classList.add("water-icon");
        plantContainer.append(waterIcon);
        //Import water Icon Img
        var waterIconImg = document.createElement("img");
        waterIconImg.classList.add("water-icon-img");
        waterIconImg.src = "assets/photos/watericon.png"
        waterIcon.append(waterIconImg);


        // add plant water requirement
        var plantWater = document.createElement("p");
        plantWater.classList.add("water");
        plantWater.innerText = "Water: " + plant.fields.Water;
        waterIcon.append(plantWater);

    // create Collect button
       var collectBtn = document.createElement("button")
    collectBtn.classList.add("collect-btn");
    collectBtn.innerHTML = "Keep the Plant!";
    collectBtn.style.display="block";
    plantName.append(collectBtn);

    function hideOthers(){
        if (plantContainer.classList.contains("clicked")) {
            plantContainer.style.opacity = "1";
        } else {
            plantContainer.style.opacity = "0.5";;
        }};
        
        // add event listener to add active class to plant container
        plantContainer.addEventListener("click", function () {
            sunIcon.classList.toggle("active");
            sunIconImg.classList.toggle("active");
            waterIcon.classList.toggle("active");
            waterIconImg.classList.toggle("active");
            plantSun.classList.toggle("active");
            plantWater.classList.toggle("active");
            plantCare.classList.toggle("active");
            plantName.classList.toggle("active");
            close.classList.toggle("active");
            collectBtn.style.display="block";
           // plantContainer.classList.add("clicked");
            plantContainer.classList.toggle("active");
            
           
        });
/*
        function hideOthers(){
            if (plantContainer.classList.contains("clicked")) {
                plantContainer.style.display="block";
            } else {
                plantContainer.style.display = "none";
            }};

      plantContainer.addEventListener("click",hideOthers);

      close.addEventListener("click", RevealOthers)

        function RevealOthers(){
            
            plantContainer.style.display="block";
            
        };

*/
        collectBtn.addEventListener("click", function(){
            plantContainer.classList.add("collected");
            collectBtn.innerHTML = "COLLECTED";
            collectBtn.disabled=true;
            plantContainer.style.border = "thick solid #395930";
            gardenBtn.style.display="block";
        });

   
        gardenBtn.addEventListener("click", function () {
            filter.style.display = "none";
            if (plantContainer.classList.contains("collected")) {
                plantContainer.style.display = "block";
                title.innerHTML= "my garden";
                filterbtn.style.display="none";
                resetBtn.style.display="none";
                gardenBtn.style.display="none";
                exitBtn.style.display="block";
                /*   plantContainer.addEventListener("click", function () {
                quizBtn.style.display="block";});*/
            } else {
                plantContainer.style.display = "none";
            }
        });

        exitBtn.addEventListener("click", function () {
            filter.style.display = "block";
                plantContainer.style.display = "block";
                filterbtn.style.display="inline";
                resetBtn.style.display="inline";
                gardenBtn.style.display="inline";
                exitBtn.style.display="none";
                title.innerHTML= "My<br>House<br>Plants";
        });
            /*      // create Collect button
       var quizBtn = document.createElement("button")
       quizBtn.classList.add("quiz-btn");
       quizBtn.innerHTML = "Are you Ready?";
       plantContainer.append(quizBtn);
*/
/*
        quizBtn.addEventListener("click", function(){
            var quizBox = document.createElement("INPUT");
            quizBox.setAttribute("id", "answer");
            quizBox.setAttribute("type", "text");
            quizBox.setAttribute("value", "indirect/direct");
            plantContainer.appendChild(quizBox);
            
            var submitBtn = document.createElement("button")
            submitBtn.setAttribute("id", "submit-button");
            submitBtn.innerHTML = "SUBMIT";
            plantContainer.append(submitBtn);
        });

 /* 
        var answer = quizBox.value;
        console.log(answer);
        submitBtn.addEventListener("click", function(){
       
      
        plantContainer.innerHTML = answer;
        if(answer = plant.fields.sunfilter) {
            plantContainer.innerHTML = "You are ready!"}
        });
*/


        // get sunfilter field from airtable
        // loop through the array and add each plantsunfilter as sunfilter 
        // a class to the plant container
        var plantSunFilter = plant.fields.sunfilter;
        //console.log(plantSunFilter);
        plantSunFilter.forEach(function (sunfilter) {
            plantContainer.classList.add(sunfilter);
        });


        // clicking on filter by indirect
        // display the indirect ones
        // else hide
        var filterIndirect = document.querySelector(".js-indirect");
        filterIndirect.addEventListener("click", function () {
            document.body.style.backgroundColor="  #8f8570";
            bar.style.backgroundColor="  #8f8570";
           header.style.backgroundColor="  #8f8570";
           filterIndirect.style.color = "red";
            if (plantContainer.classList.contains("indirect")) {
                plantContainer.style.display = "block";
                filterIndirect.style.color = "red";
                filterDirect.style.color = "black";
                filterDappled.style.color = "black";
                filterLow.style.color = "black";
                filterMedium.style.color = "black";
                filterBright.style.color = "black";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";
            } else {
                plantContainer.style.display = "none";
            }
        });


        // clicking on filter by direct
        // display the direct ones
        // else hide
        var filterDirect = document.querySelector(".js-direct");
        filterDirect.addEventListener("click", function () {
            document.body.style.backgroundColor="  #C9C0AD";
            bar.style.backgroundColor="  #C9C0AD";
           header.style.backgroundColor="  #C9C0AD";
           filterDirect.style.color = "red";
            if (plantContainer.classList.contains("direct")) {
                plantContainer.style.display = "block";
                
                filterIndirect.style.color = "black";
                filterDappled.style.color = "black";
                filterLow.style.color = "black";
                filterMedium.style.color = "black";
                filterBright.style.color = "black";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";
            } else {
                plantContainer.style.display = "none";
            }
        });

        // get lightfilter field from airtable
        // loop through the array and add each plantlightfilter as lightfilter 
        // a class to the plant container
        var plantLightFilter = plant.fields.lightfilter;
        plantLightFilter.forEach(function (lightfilter) {
            plantContainer.classList.add(lightfilter);
        });


        // clicking on filter by dappled
        // display the dapppled ones
        // else hide
        var filterDappled = document.querySelector(".js-dappled");
        var x = document.querySelectorAll('js.dappled').length;
        filterDappled.addEventListener("click", function () {
            document.body.style.backgroundColor="   #4E483A";
            bar.style.backgroundColor= "   #4E483A";
           header.style.backgroundColor="   #4E483A";
           filterDappled.style.color = "red";
           filterLow.style.color = "black";
            if (plantContainer.classList.contains("dappled")) {
                plantContainer.style.display = "block";
                filterLow.style.color = "black";
                filterMedium.style.color = "black";
                filterBright.style.color = "black";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";
            } else {
                plantContainer.style.display = "none";
                modal.style.display = "block";
                modalContent.innerHTML= "There are "+ x + " plants found."
            }
        });



// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

        // clicking on filter by low
        // display the low ones
        // else hide
        var filterLow = document.querySelector(".js-low");
        filterLow.addEventListener("click", function () {
            filterLow.style.color = "red";
            document.body.style.backgroundColor="   #7C715B";
            bar.style.backgroundColor= "   #7C715B";
           header.style.backgroundColor="   #7C715B" ;
            if (plantContainer.classList.contains("low")) {
                plantContainer.style.display = "block";
                filterDappled.style.color = "black";
                filterMedium.style.color = "black";
                filterBright.style.color = "black";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";
            } else {
                plantContainer.style.display = "none";
                
            }
        });

        // clicking on filter by medium
        // display the medium ones
        // else hide
        var filterMedium = document.querySelector(".js-moderate");
        filterMedium.addEventListener("click", function () {
            document.body.style.backgroundColor="  rgba(180, 172, 154, 1)";
            bar.style.backgroundColor="  rgba(180, 172, 154, 1)" ;
           header.style.backgroundColor="rgba(180, 172, 154, 1)" ;
           filterMedium.style.color = "red";
            if (plantContainer.classList.contains("moderate")) {
                plantContainer.style.display = "block";
                filterDappled.style.color = "black";
                filterLow.style.color = "black";
                filterBright.style.color = "black";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";
            } else {
                plantContainer.style.display = "none";
            }
        });

        // clicking on filter by bright
        // display the bright ones
        // else hide
        var filterBright = document.querySelector(".js-bright");
        filterBright.addEventListener("click", function () {
            document.body.style.backgroundColor="  #DAD0BB";
            bar.style.backgroundColor="  #DAD0BB" ;
           header.style.backgroundColor="#DAD0BB" ;
           filterBright.style.color = "red";
            if (plantContainer.classList.contains("bright")) {
                plantContainer.style.display = "block";
                filterDappled.style.color = "black";
                filterLow.style.color = "black";
                filterMedium.style.color = "black";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";
            } else {
                plantContainer.style.display = "none";
            }
        });

        // get waterfilter field from airtable
        // loop through the array and add each plantlWaterfilter as waterfilter 
        // a class to the plant container
        var plantWaterFilter = plant.fields.waterfilter;
        plantWaterFilter.forEach(function (waterfilter) {
            plantContainer.classList.add(waterfilter);
        });


        // clicking on filter by 25%
        // display the 25% ones
        // else hide
        var filter25 = document.querySelector(".js-25");
        filter25.addEventListener("click", function () {
            filter25.style.color = "red";
            if (plantContainer.classList.contains("25%")) {
                plantContainer.style.display = "block";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";

            } else {
                plantContainer.style.display = "none";
            }
        });

        // clicking on filter by 50%
        // display the 50% ones
        // else hide
        var filter50 = document.querySelector(".js-50");
        filter50.addEventListener("click", function () {
            filter50.style.color = "red";

            if (plantContainer.classList.contains("50%")) {
                plantContainer.style.display = "block";
                filter25.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";

            } else {
                plantContainer.style.display = "none";
            }
        });

        // clicking on filter by 75%
        // display the 75% ones
        // else hide
        var filter75 = document.querySelector(".js-75");
        filter75.addEventListener("click", function () {
            filter75.style.color = "red";
            if (plantContainer.classList.contains("75%")) {
                plantContainer.style.display = "block";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter100.style.color = "black";
                filterExcep.style.color = "black";

            } else {
                plantContainer.style.display = "none";
            }
        });

        // clicking on filter by 100%
        // display the 100% ones
        // else hide
        var filter100 = document.querySelector(".js-100");
        filter100.addEventListener("click", function () {
            filter100.style.color = "red";
            if (plantContainer.classList.contains("100%")) {
                plantContainer.style.display = "block";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filterExcep.style.color = "black";

            } else {
                plantContainer.style.display = "none";
            }
        });

        // clicking on filter by exceptive
        // display the exceptive ones
        // else hide
        var filterExcep = document.querySelector(".js-exceptive");
        filterExcep.addEventListener("click", function () {
            filterExcep.style.color = "red";
            if (plantContainer.classList.contains("exceptive")) {
                plantContainer.style.display = "block";
                filter25.style.color = "black";
                filter50.style.color = "black";
                filter75.style.color = "black";
                filter100.style.color = "black";

            } else {
                plantContainer.style.display = "none";
            }
        });


        // filter reset
        var filterReset = document.querySelector(".js-reset");
        filterReset.addEventListener("click", function () {
            window.location.href = "result.html";
            /*plantContainer.style.display = "none";
            filterDirect.style.color = "black";
            filterIndirect.style.color = "black";
            filterDappled.style.color = "black";
            filterLow.style.color = "black";
            filterMedium.style.color = "black";
            filterBright.style.color = "black";
            filter25.style.color = "black";
            filter50.style.color = "black";
            filter75.style.color = "black";
            filter100.style.color = "black";
            filterExcep.style.color = "black";*/
        });

    });
}


