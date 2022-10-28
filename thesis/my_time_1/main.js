
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
function playAudio() {
  audio.play();
}

function changeRate(){
  playAudio;
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

