function setup() {
    createCanvas(1112 , 834);
    colorMode(HSB,360,100,100,100);
    background(255);
    frameRate(10);
    noFill();
    strokeWeight(3);
  }
  
  function draw() {
    let x =random(width);
        y =random(height);
    
    if( random() < 0.5) {
      let myText=random(["NEW"])
      let w= textWidth(myText)
      
      let gradient = drawingContext.createLinearGradient(width/2-500,height/2-500,width/2+500,height/2+500);
      gradient.addColorStop(1,color(0,0,0,100));//BLACK
      
      drawingContext.fillStyle=gradient;
      drawingContext.shadowBlur=5;
      drawingContext.shadowColor=color(207,7,99);
      
      noStroke();
      rect(x,y,w+40,50,20)
      textSize(30);
      fill(255)
      text(myText,x+20,y+35)
   
    }else{
      let myText= random(["FRESH"])
      let w= textWidth(myText)
      fill(255);
      let gradient = drawingContext.createLinearGradient(width/2-500,height/2-500,width/2+500,height/2+500);

      gradient.addColorStop(1,color(0,0,0,100));//BLACK
      
      strokeWeight(3);
      stroke(0);    
      drawingContext.strokeStyle=gradient;
      drawingContext.shadowBlur=5;
      drawingContext.shadowColor=color(207,7,99);
      rect(x,y,w+100,85,60);
      textSize(50);
      noStroke();
      drawingContext.fillStyle=gradient;
      text(myText,x+20,y+65)
    }
   // "HELLO","DIGITAL","CREATIVE","COMPUTING","ARTS","CODING",
  }
  
  // save jpg
  /*
  let lapse = 0;    // mouse timer
  function mousePressed(){
    if (millis() - lapse > 400){
      save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
      lapse = millis();
    } 
  }*/