/* As a person who is interested in femenism and Body Positivity Movement, I want to be able to appreciate different bodies regardless of physical ability, size, or appearance, so I can better learn about the femle representatives as well understand this movement.*/
/* */
console.log("hello");

var entryCount = 0;
var displayCount = 0;
var result = document.querySelector("#result");

//capture key presses
document.addEventListener("keypress", function (e) {
  e.preventDefault();
  entryCount++;
  displayCount++;

  //translate unicode to characters
  //https://unicodelookup.com/
  var char = String.fromCharCode(e.which);
  console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
  createElement(char);
});
var container =document.querySelector("#container");
var chart=document.querySelector(".chart");
var tabTwo=document.querySelector("#tab-two");
tabTwo.addEventListener("click", function showChart() {
  if (chart.style.display === "block") {
    chart.style.display = "none";
    tabTwo.innerHTML="CHART";
    container.style.display = "block";
  } else {
    chart.style.display = "block";
    tabTwo.innerHTML="CLOSE CHART";
    container.style.display = "none";
   

  }
});

var intro=document.querySelector(".intro");
var tabOne=document.querySelector("#tab-one");
tabOne.addEventListener("click", function showIntro() {
  if (intro.style.display === "block") {
    intro.style.display = "none";
    tabOne.innerHTML="ABOUT";
    container.style.display = "block";
  } else {
    intro.style.display = "block";
    tabOne.innerHTML="CLOSE ABOUT";
    container.style.display = "none";

  }
});
//capture function keys
document.addEventListener("keydown", function (e) {
  /*var letter = document.createElement("span");
  letter.className = 'input';*/
  if (e.which !== 8) {
    result.innerHTML = e.key;
  }
  
  //result.parentNode.insertBefore(letter, result);

  //if pressed key is a backspace
  if (e.which == 8 && document.querySelectorAll('.inner').length) {
    e.preventDefault();
    entryCount++;
    displayCount--;
    console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
    deleteElement();
  }

});

var elem = document.querySelector('#cursor');
var img = document.querySelector("#image");
// create a new span to add
var newElem = document.createElement('div');
newElem.className = 'inner';
img.append(newElem);

var referPhoto = document.createElement('div');
referPhoto.className = 'refer-photo';
img.append(referPhoto);
function createElement(k) {


  if (k == "a" || k == "A") { newElem.style.backgroundImage = `url('img/A.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/abg.png')`; }
  if (k == "b" || k == "B") { newElem.style.backgroundImage = `url('img/B.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/bbg.png')`;}
  if (k == "c" || k == "C") { newElem.style.backgroundImage = `url('img/C.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/cbg.png')`;}
  if (k == "d" || k == "D") { newElem.style.backgroundImage = `url('img/D.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/dbg.png')`;}
  if (k == "e" || k == "E") { newElem.style.backgroundImage = `url('img/E.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/ebg.png')`; }
  if (k == "f" || k == "F") { newElem.style.backgroundImage = `url('img/F.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/fbg.png')`; }
  if (k == "g" || k == "G") { newElem.style.backgroundImage = `url('img/G.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/none.png')`;}
  if (k == "h" || k == "H") { newElem.style.backgroundImage = `url('img/H.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/none.png')`; }
  if (k == "i" || k == "I") { newElem.style.backgroundImage = `url('img/I.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/ibg.png')`;}
  if (k == "j" || k == "J") { newElem.style.backgroundImage = `url('img/J.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/jbg.png')`; }
  if (k == "k" || k == "K") { newElem.style.backgroundImage = `url('img/K.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/kbg.png')`; }
  if (k == "l" || k == "L") { newElem.style.backgroundImage = `url('img/L.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/lbg.png')`;}
  if (k == "m" || k == "M") { newElem.style.backgroundImage = `url('img/M.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/mbg.png')`; }
  if (k == "n" || k == "N") { newElem.style.backgroundImage = `url('img/N.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/nbg.png')`;}
  if (k == "o" || k == "O") { newElem.style.backgroundImage = `url('img/O.png')`; newElem.classList.add('letter-b') ;referPhoto.style.backgroundImage = `url('img/obg.png')`;}
  if (k == "p" || k == "P") { newElem.style.backgroundImage = `url('img/P.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/pbg.png')`;}
  if (k == "q" || k == "Q") { newElem.style.backgroundImage = `url('img/Q.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/qbg.png')`;}
  if (k == "r" || k == "R") { newElem.style.backgroundImage = `url('img/R.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/rbg.png')`; }
  if (k == "s" || k == "S") { newElem.style.backgroundImage = `url('img/S.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/sbg.png')`;}
  if (k == "t" || k == "T") { newElem.style.backgroundImage = `url('img/T.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/tbg.png')`;  }
  if (k == "u" || k == "U") { newElem.style.backgroundImage = `url('img/U.png')`; newElem.classList.add('letter-b');referPhoto.style.backgroundImage = `url('img/ubg.png')`;}
  if (k == "v" || k == "V") { newElem.style.backgroundImage = `url('img/V.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/vbg.png')`;  }
  if (k == "w" || k == "W") { newElem.style.backgroundImage = `url('img/W.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/wbg.png')`;}
  if (k == "x" || k == "X") { newElem.style.backgroundImage = `url('img/X.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/xbg.png')`; }
  if (k == "y" || k == "Y") { newElem.style.backgroundImage = `url('img/Y.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/ybg.png')`; }
  if (k == "z" || k == "Z") { newElem.style.backgroundImage = `url('img/Z.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/none.png')`; }
  if (k == " ") { newElem.innerHTML = '&nbsp;' };

}

function deleteElement() {
  let lastLetter = document.querySelectorAll(".input");
  if (lastLetter.length){
    lastLetter[lastLetter.length - 1].remove();
  }
  let lastImg = document.querySelectorAll(".inner");
  if (lastImg.length) {
    lastImg[lastImg.length - 1].remove();
  }
}

//var a = document.querySelector("letter-a'");
//console.log(a);
newElem.addEventListener("click", function showRefer() {
  if (referPhoto.style.display === "block") {
    referPhoto.style.display = "none";
  } else {
    referPhoto.style.display = "block";
  }
});



function showPhoto() {


  let lastImg = document.querySelectorAll(".inner");
  if (lastImg.length) {
    lastImg[lastImg.length - 1].remove();
  }
}

function resetFunction() {
  location.reload()
}

document.addEventListener('keydown', function (event) {
  
  if (event.keyCode == 8) {
      console.log('BACKSPACE was pressed');

      event.preventDefault();
      resetFunction();
  }
  if (event.keyCode == 46) {
      console.log('DELETE was pressed');

      // Call event.preventDefault() to stop the character after the cursor
      // from being deleted. Remove this line if you don't want to do that.
      event.preventDefault();
  }
});
