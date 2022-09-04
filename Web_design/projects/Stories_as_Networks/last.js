function changeColor(color) { 
    document.body.style.background = color; 
} 
function lightOn() { 
    changeColor('#FFFCDF'); 
  }

  var button = document.querySelectorAll("button")[0];
button.addEventListener('click', function() {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    changeColor('#5C544A');
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
}, false);