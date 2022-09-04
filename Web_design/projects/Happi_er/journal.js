var intro = document.getElementById("intro");
var headline = document.getElementById("headline");
var number = document.getElementById("number");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var box_one =  document.getElementById("box1");
var box_two =  document.getElementById("box2");
var box_three = document.getElementById("box3");
var box_four =  document.getElementById("box4");
var box_five = document.getElementById("box5");
var button_one = document.getElementById("button1");
var button_two = document.getElementById("button2");
var button_three = document.getElementById("button3");
var button_four = document.getElementById("button4");
var button_five = document.getElementById("button5");
var button_six = document.getElementById("button6");


function backToOne(){
    headline.innerHTML = "Write about the event";
 intro.innerHTML = "Try to focus on the facts (who, what, when, where). By being brief and specific, the better you’ll understand the emotiins and reactions that followed. This allows you to separate the situation and your emotions.";
 number.innerHTML = "1";
 box_two.style.display="none";
 box_three.style.display="none";
 box_four.style.display="none";
 box_five.style.display="none";
 box_one.style.display="block";
 button_three.style.display="none";
  button_two.style.display="none";
  button_four.style.display="none";
  button_five.style.display="none";
 button_one.style.display="block";
 two.innerHTML = "2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note the emotion";
 three.innerHTML = "3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Track the intensity";
 four.innerHTML = "4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Identify patterns";
 
 two.style.opacity="100%";
 three.style.opacity="100%";
 four.style.opacity="100%";
five.style.opacity="100%";

};



function backToTwo(){
    headline.innerHTML = "Note the emotiom";
 intro.innerHTML = "If you can record how you are feeling and what you are thinking, you are better able to track your emotions, notice people or places that are triggers, and recognize warning signs of your strong emotions";
 number.innerHTML = "2";
 box_two.style.display="block";
 box_three.style.display="none";
 box_four.style.display="none";
 box_five.style.display="none";
 box_one.style.display="none";
 button_three.style.display="none";
  button_two.style.display="block";
  button_four.style.display="none";
  button_five.style.display="none";
 button_one.style.display="none";
 two.innerHTML = "1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write about the event";
 three.innerHTML = "3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Track the intensity";
 four.innerHTML = "4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Identify patterns";
 five.innerHTML="5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reframe your perspective";
 two.style.opacity="50%";
 three.style.opacity="100%";
 four.style.opacity="100%";
five.style.opacity="100%";
};


function backToThree(){
    headline.innerHTML = "Track the intensity";
 intro.innerHTML = "By rating the intensity of the primary emotions we will be able to visually show progress over time and a reduction of negative emotions.";
 number.innerHTML = "3";
 box_two.style.display="none";
 box_three.style.display="block";
 box_four.style.display="none";
 box_five.style.display="none";
 box_one.style.display="none";
 button_three.style.display="block";
  button_two.style.display="none";
  button_four.style.display="none";
  button_five.style.display="none";
 button_one.style.display="none";
 two.innerHTML = "1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write about the event";
 three.innerHTML = "2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note the emotions";
 four.innerHTML = "4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Identify patterns";
 five.innerHTML="5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reframe your perspective";
 two.style.opacity="50%";
 three.style.opacity="50%";
 four.style.opacity="100%";
five.style.opacity="100%";
};

function backToFour(){
    headline.innerHTML = "Identify patterns";
 intro.innerHTML = "Does this situation remind you of something from your past?  Do you notice any situations that tend to repeat themselves—like always getting involved with a similar type of person or continuously bypassing opportunities because you don't feel you're “good enough”? Take note of that. It's your clue";
 number.innerHTML = "4";
 box_two.style.display="none";
 box_three.style.display="none";
 box_four.style.display="block";
 box_five.style.display="none";
 box_one.style.display="none";
 button_three.style.display="none";
  button_two.style.display="none";
  button_four.style.display="block";
  button_five.style.display="none";
 button_one.style.display="none";
 two.innerHTML = "1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write about the event";
 three.innerHTML = "2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note the emotions";
 four.innerHTML = "3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Track the intensity";
 five.innerHTML="5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reframe your perspective";
 two.style.opacity="50%";
 three.style.opacity="50%";
 four.style.opacity="50%";
five.style.opacity="100%";
};

function stepTwo(){
 headline.innerHTML = "Note the emotion";
 intro.innerHTML = "If you can record how you are feeling and what you are thinking, you are better able to track your emotions, notice people or places that are triggers, and recognize warning signs of your strong emotions";
 number.innerHTML = "2";
 box_two.style.display="block";
 box_one.style.display="none";
 button_two.style.display="block";
 button_one.style.display="none";
 two.innerHTML = "1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write about the event";
 two.style.opacity="50%";
 two.setAttribute("class","write");
 var write = document.getElementsByClassName("write")[0];
 write.addEventListener("click",backToOne);
 $(".write").hover(function(){
    $(this).stop().animate({"opacity": "1"});
},function(){
    $(this).stop().animate({"opacity": "0.5"});
    $(this).css('cursor', 'pointer');
});

};





function stepThree(){
    headline.innerHTML = "Track the intensity";
    intro.innerHTML = "By rating the intensity of the primary emotions we will be able to visually show progress over time and a reduction of negative emotions.";
    number.innerHTML ="3";
    three.innerHTML = "2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note the emotion";
    three.style.opacity="50%";
    box_three.style.display="block";
    box_two.style.display="none";
    button_two.style.display="none";
 button_three.style.display="block";
 three.setAttribute("class","note");
 var note = document.getElementsByClassName("note")[0];
 note.addEventListener("click",backToTwo);
 $(".note").hover(function(){
    $(this).stop().animate({"opacity": "1"});
},function(){
    $(this).stop().animate({"opacity": "0.5"});
    $(this).css('cursor', 'pointer');
});

};

function stepFour(){
    headline.innerHTML = "Identify patterns";
 intro.innerHTML = "Does this situation remind you of something from your past?  Do you notice any situations that tend to repeat themselves—like always getting involved with a similar type of person or continuously bypassing opportunities because you don't feel you're “good enough”? Take note of that. It's your clue";
 number.innerHTML = "4";
 box_three.style.display="none";
 box_four.style.display="block";
 button_three.style.display="none";
 button_four.style.display="block";
 two.innerHTML = "1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write about the event";
 three.innerHTML = "2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note the emotion";
 four.innerHTML = "3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Track the intensity";
four.style.opacity="50%";
four.setAttribute("class","track");
 var track = document.getElementsByClassName("track")[0];
 track.addEventListener("click",backToThree);
 $(".track").hover(function(){
    $(this).stop().animate({"opacity": "1"});
},function(){
    $(this).stop().animate({"opacity": "0.5"});
    $(this).css('cursor', 'pointer');
});

};

function stepFive(){
    headline.innerHTML = "Reframe your perspective";
 intro.innerHTML = "Once you recognize the pattern, you can start looking for the beliefs that created it, and this is how you release it. Do you feel that you are looking at the event, thoughts or feeling from another angle? Write down the changes.";
 number.innerHTML = "5";
 box_five.style.display="block";
 box_four.style.display="none";
 button_four.style.display="none";
 button_five.style.display="block";
 five.innerHTML = "4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Identify patterns";
five.style.opacity="50%";
five.setAttribute("class","identify");
 var identify = document.getElementsByClassName("identify")[0];
 identify.addEventListener("click",backToFour);
 $(".identify").hover(function(){
    $(this).stop().animate({"opacity": "1"});
},function(){
    $(this).stop().animate({"opacity": "0.5"});
    $(this).css('cursor', 'pointer');
});
};

function preview(){
headline.style.display="none";
number.style.display="none";
box_one.style.display="block";
box_two.style.display="block";
box_three.style.display="block";
box_four.style.display="block";
box_five.style.display="block";
button_one.style.display="none";
button_two.style.display="none";
button_three.style.display="none";
button_four.style.display="none";
button_five.style.display="none";
intro.style.display="none";
box_one.style.paddingTop="0";
six.innerHTML="5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reframe your perspective";
button_six.style.display="block";
};


   button_one.addEventListener("click", stepTwo);
   button_two.addEventListener("click", stepThree);
   button_three.addEventListener("click", stepFour);
   button_four.addEventListener("click", stepFive);
button_five.addEventListener("click",preview)


