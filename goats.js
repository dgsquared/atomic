var gif;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gif = createImg('goatclear.gif');
  gif.position(0,0);
  gif.size(width, height);

  textone = createP('every living creature yearns to gnaw our bones');
}

function draw() {
  background('0, 0, 0, 0');

  goetry();
  
    
  textone.position(width / 2, height * 4/6);
  textone.style('color', 'white');

}
function goetry() {
    fill('#FFFFFF');
    textAlign(CENTER);
    textSize(50);
    textFont('Adobe Garamond Pro');
    text('every living creature yearns to gnaw our bones', width / 2, height * 4/6);
    text('eyes glint in vengeance, urging us to suicide', width / 2, height * 5/6);
}
