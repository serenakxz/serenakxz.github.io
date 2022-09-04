function changeBg() {
    document.getElementById("highlight1").style.backgroundColor= "#5C544A";
    document.getElementById("highlight2").style.backgroundColor= "#5C544A";
    document.getElementById("highlight3").style.backgroundColor= "#5C544A";
    document.getElementById("highlight4").style.backgroundColor= "#5C544A";
    document.getElementById("highlight5").style.backgroundColor= "#5C544A";
    document.getElementById("highlight6").style.backgroundColor= "#5C544A";
    document.getElementById("highlight7").style.backgroundColor= "#5C544A";
    document.getElementById("highlight8").style.backgroundColor= "#5C544A";
    document.getElementById("highlight9").style.backgroundColor= "#5C544A";
    document.getElementById("highlight10").style.backgroundColor= "#5C544A";
}

function bgReveal() {
   changeBg();
}    

window.onscroll = function() {myFunction()};
    
var header = document.getElementById("myContent");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function dimLight() {
  document.getElementById("bgText").style.lineHeight="210%";
  document.getElementById("bgText").style.fontWeight="300";
}