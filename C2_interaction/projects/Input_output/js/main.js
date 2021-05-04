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

var chart=document.querySelector(".chart");
var tab=document.querySelector(".tab");
tab.addEventListener("click", function showChart() {
  if (chart.style.display === "block") {
    chart.style.display = "none";
    tab.innerHTML="CHART";
  } else {
    chart.style.display = "block";
    tab.innerHTML="CLOSE";
  }
});

//capture function keys
document.addEventListener("keydown", function (e) {
  /*var letter = document.createElement("span");
  letter.className = 'input';*/
  result.innerHTML = e.key;
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


  if (k == "a" || k == "A") { newElem.style.backgroundImage = `url('img/a.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/abg.png')`; }
  if (k == "b" || k == "B") { newElem.style.backgroundImage = `url('img/b.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/bbg.png')`;}
  if (k == "c" || k == "C") { newElem.style.backgroundImage = `url('img/c.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/cbg.png')`;}
  if (k == "d" || k == "D") { newElem.style.backgroundImage = `url('img/d.png')`; newElem.classList.add('letter-b');newElem.classList.remove('letter-a') }
  if (k == "e" || k == "E") { newElem.style.backgroundImage = `url('img/e.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/ebg.png')`; }
  if (k == "f" || k == "F") { newElem.style.backgroundImage = `url('img/f.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/fbg.png')`; }
  if (k == "g" || k == "G") { newElem.style.backgroundImage = `url('img/g.png')`; newElem.classList.add('letter-b') ;newElem.classList.remove('letter-a')}
  if (k == "h" || k == "H") { newElem.style.backgroundImage = `url('img/h.png')`; newElem.classList.add('letter-b');newElem.classList.remove('letter-a') }
  if (k == "i" || k == "I") { newElem.style.backgroundImage = `url('img/i.png')`; newElem.classList.add('letter-b') ;newElem.classList.remove('letter-a')}
  if (k == "j" || k == "J") { newElem.style.backgroundImage = `url('img/j.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/jbg.png')`; }
  if (k == "k" || k == "K") { newElem.style.backgroundImage = `url('img/k.png')`; newElem.classList.add('letter-a') ;referPhoto.style.backgroundImage = `url('img/kbg.png')`; }
  if (k == "l" || k == "L") { newElem.style.backgroundImage = `url('img/l.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/lbg.png')`;}
  if (k == "m" || k == "M") { newElem.style.backgroundImage = `url('img/m.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/mbg.png')`; }
  if (k == "n" || k == "N") { newElem.style.backgroundImage = `url('img/n.png')`; newElem.classList.add('letter-b') ;newElem.classList.remove('letter-a')}
  if (k == "o" || k == "O") { newElem.style.backgroundImage = `url('img/o.png')`; newElem.classList.add('letter-b') ;newElem.classList.remove('letter-a')}
  if (k == "p" || k == "P") { newElem.style.backgroundImage = `url('img/p.png')`; newElem.classList.add('letter-b') ;newElem.classList.remove('letter-a')}
  if (k == "q" || k == "Q") { newElem.style.backgroundImage = `url('img/q.png')`; newElem.classList.add('letter-b') ;newElem.classList.remove('letter-a')}
  if (k == "r" || k == "R") { newElem.style.backgroundImage = `url('img/r.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/rbg.png')`; }
  if (k == "s" || k == "S") { newElem.style.backgroundImage = `url('img/s.png')`; newElem.classList.add('letter-b');newElem.classList.remove('letter-a') }
  if (k == "t" || k == "T") { newElem.style.backgroundImage = `url('img/t.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/tbg.png')`;  }
  if (k == "u" || k == "U") { newElem.style.backgroundImage = `url('img/u.png')`; newElem.classList.add('letter-b');newElem.classList.remove('letter-a') }
  if (k == "v" || k == "V") { newElem.style.backgroundImage = `url('img/v.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/vbg.png')`;  }
  if (k == "w" || k == "W") { newElem.style.backgroundImage = `url('img/w.png')`; newElem.classList.add('letter-b') ;newElem.classList.remove('letter-a')}
  if (k == "x" || k == "X") { newElem.style.backgroundImage = `url('img/x.png')`; newElem.classList.add('letter-b');newElem.classList.remove('letter-a') }
  if (k == "y" || k == "Y") { newElem.style.backgroundImage = `url('img/y.png')`; newElem.classList.add('letter-a');referPhoto.style.backgroundImage = `url('img/ybg.png')`; }
  if (k == "z" || k == "Z") { newElem.style.backgroundImage = `url('img/z.png')`; newElem.classList.add('letter-b');newElem.classList.remove('letter-a') }
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