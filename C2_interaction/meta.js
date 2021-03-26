// define "myModal" as variable modal
let modal = document.getElementById("myModal");

// define the button that opens the modal
let button = document.getElementById("myBtn");


// When the button is clicked, change the modal display from "none" to "block", open the modal 
button.onclick = function() {
  modal.style.display = "block";
}

// Define the "close" icon
let closeIcon = document.getElementsByClassName("close")[0];

// When the user clicks on the "close" icon, the modal display changes back to "none", the modal disappers
closeIcon.onclick = function() {
  modal.style.display = "none";
}
