let draft, ready;

function preload() {
  ready = loadImage('goatblur.jpg')
  draft = loadImage('goatclear.jpg')
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
   image(ready, 0, 0);
    image(draft, 0, 0);

    fill('#FFFFFF');
    textAlign(CENTER);
    textSize(50);
    textFont('Adobe Garamond Pro');
    text('every living creature yearns to gnaw our bones', width / 2, height * 4/6);
    text('eyes glint in vengeance, urging us to suicide', width / 2, height * 5/6);
  }

  function mouseDragged() {
    copy(ready, mouseX, mouseY, 50, height, mouseX, mouseY, 50, height);
  }

  function draw() {
    background(0, 0, 0, 0);
    cursor(CROSS, 25, -100);
    draft.position(0,0);
    draft.size(width, height);
    ready.position(0,0);
    ready.size(width, height);
    //imageMode(CENTER);
    //image(gif, width/2, height/2)
    
    fill('#FFFFFF');
    textAlign(CENTER);
    textSize(50);
    textFont('Adobe Garamond Pro');
    text('every living creature yearns to gnaw our bones', width / 2, height * 4/6);
    text('eyes glint in vengeance, urging us to suicide', width / 2, height * 5/6);
    
    //push();
        //fill('#000000');
        //rect(0, height * 3.5/6, mouseX, height/8);
        //rect(0, height * 4.5/6, mouseX - height/7, height/8);
    //pop();
  }