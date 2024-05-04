
  var gif;
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
    gif = createImg('fourtwo.gif');
  }
  
  function draw() {
    background(0);
    gif.position(0,0);
    gif.size(width, height);
    //whenever i make the background transparent my text disappears, and if i put (0, 0) it makes the text look weird
    noStroke();
    strokeWeight();
    fill(255, 255, 255);
    //imageMode(CENTER);
    //image(gif, width/2, height/2)
    textAlign(CENTER);
    textSize(50);
    textFont('Adobe Garamond Pro');
    text('god\'s creation rebuffs our assimilation', width / 2, height * 5/6);
    wiggle(); 

    //push();
      //if (fadeOpacity < 255) {
        //fadeOpacity += .5;
      //}
    //pop();

  }
    
    function wiggle() {
      //fill(255, 255, 255, fadeOpacity);
      text('god\'s creation rebuffs our assimilation', x, height * 5/6); 
      
      if (x > width / 2) {
        speed = -5;
      }
      if (x < width / 2) {
        speed = 5;
        
      }
      x += speed;
    }