let slider = document.querySelector('[type=range]')
let div = document.querySelector(".focus")

slider.addEventListener('input', e => {
    div.style.background = 'radial-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1)'+ e.target.value + "%)";
})
const audio = document.getElementById('audio');
let c = document.getElementById("currentPbr");
function playAudio() {
  audio.play();
}


function changeRate(){
  playAudio;
  let x = document.getElementById("myRange").value;
  console.log(x);
  c.innerHTML = x/50;
  audio.playbackRate = x/50;
  return x/50
}
