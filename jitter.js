
  //var gif;
  var speed = 15; 
  let x;
  
  //function preload() {
    //gif = loadImage("fourtwo.gif")
  //}

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    x = width / 2;
  }
  
  function draw() {
    background(0);
    //whenever i make the background transparent my text disappears, and if i put (0, 0) it makes the text look weird
    noStroke();
    strokeWeight();
    fill('#FFFFFF');
    //imageMode(CENTER);
    //image(gif, width/2, height/2)
    textAlign(CENTER);
    textSize(50);
    textFont('Adobe Garamond Pro');
    text('god\'s creation rebuffs our assimilation', width / 2, height * 5/6);
    if (mouseIsPressed) {
        wiggle(); 
      }
    
    }
    
    function wiggle() {
      text('god\'s creation rebuffs our assimilation', x, height * 5/6); 
      
      if (x > width / 2) {
        speed = -5;
      }
      if (x < width / 2) {
        speed = 5;
        
      }
      x += speed;
    }