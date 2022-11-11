
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");


btn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const container = document.querySelector(".container");
const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".output");
const buttons = document.querySelectorAll(".button");


// Display property values
for (let i = 0; i < sliders.length; i++) {
  sliderValues[i].innerHTML = sliders[i].value;
}

// Update text property and displayed property value for each slider
sliders.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
      container.style.setProperty(`--${this.id}`, this.value);
    };
  });

// Reset text property and update display property value for each slider
buttons.forEach(button => {
  const buttonIndex = button.getAttribute("data-index");
  const resetOutput = document.querySelector(
    `.output[data-index="${buttonIndex}"]`
  );
  const resetSlider = document.querySelector(
    `.slider[data-index="${buttonIndex}"]`
  );
  button.onclick = function() {
    container.style.removeProperty(`--${resetSlider.id}`);
    resetOutput.innerHTML = resetSlider.defaultValue;
    resetSlider.value = resetSlider.defaultValue;
    console.log(resetSlider.defaultValue);
  };
});


const audio = document.getElementById('audio');
let c = document.getElementById("currentPbr");

let age_contianer= document.querySelector("header")

age_contianer.addEventListener('mouseover', function() {
  audio.play();
  document.querySelector("header").style.opacity="100%";
}, false);

  
 age_contianer.addEventListener('mouseleave', function() {
    audio.pause();
    audio.currentTime = 0;
    document.querySelector("header").style.opacity="50%";
  }, false);

function changeRate(){
  let weight = document.getElementsByClassName("container")[0].style.getPropertyValue('--text-weight');
  console.log(weight);
  c.innerHTML = (1100-weight)/500+0.3;
  audio.playbackRate = (1100-weight)/500+0.3;
  return (1100-weight)/500
}


/*
const playbackrate = document.querySelector('.speedcontrolcontainer input');
const display = document.querySelector('.speedcontrolcontainer span');
const displayvalue = val => {
  return parseInt(val * 100, 10) + '%'
}
if (window.localStorage.pbspeed) {
  audio.playbackRate = window.localStorage.pbspeed;
  playbackrate.value = window.localStorage.pbspeed;
}
display.innerText = displayvalue(audio.playbackRate);
playbackrate.addEventListener('change', e => {
  audio.playbackRate = playbackrate.value;
  window.localStorage.pbspeed = playbackrate.value;
});
*/

let sliderTwo = document.getElementById("myRange");
let div = document.querySelector(".focus");
sliderTwo.addEventListener('input', e => {
    div.style.background = 'radial-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1)'+ e.target.value + "%)";
})
const audioTwo = document.getElementById('focus-audio');
let cTwo = document.getElementById("currentPbrTwo");

let focus_contianer= document.querySelector("aside")

focus_contianer.addEventListener('mouseover', function() {
  audioTwo.play();
  document.querySelector("aside").style.opacity="100%";
}, false);

  
 focus_contianer.addEventListener('mouseleave', function() {
    audioTwo.pause();
    audioTwo.currentTime = 0;
    document.querySelector("aside").style.opacity="50%";
  }, false);

function changeRateTwo(){
  let x = sliderTwo.value;
  console.log(x);
  cTwo.innerHTML = x/33;
  audioTwo.playbackRate = x/33;
  return x/33
}

let novel_contianer= document.querySelector("footer")

novel_contianer.addEventListener('mouseover', function() {
  audio.play();
  document.querySelector("footer").style.opacity="100%";
}, false);
novel_contianer.addEventListener('mouseleave', function() {
  document.querySelector("footer").style.opacity="50%";
}, false);
let sliderThree = document.getElementById("text-width");


function changeRateThree(){
  let textWidth = sliderThree.value;
  console.log(textWidth);
  
}


let impluse_contianer= document.querySelector("article")

impluse_contianer.addEventListener('mouseover', function() {
  audio.play();
  document.querySelector("article").style.opacity="100%";
}, false);
impluse_contianer.addEventListener('mouseleave', function() {
  document.querySelector("article").style.opacity="50%";
}, false);
