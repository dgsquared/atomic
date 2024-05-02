
var img1;
var img2;

function preload() {
  img1 = loadImage("image 1.jpg")
  img2 = loadImage("image 2.jpg")
 
}
// this class describes the properties of a single particle.
class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(){
      this.x = random(0, width);
      this.y = random(1, height);
      this.r = random(1,3);
      this.xSpeed = random(-2,2);
      this.ySpeed = random(-1,1.5);
    }
  
  // creation of a particle.
    createParticle() {
      noStroke();
      fill('#000000');
      circle(this.x,this.y,this.r);
    }
  
  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }
  
  }
  
  // an array to add multiple particles
  let particles = [];
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    for(let i = 0;i<width/3;i++){
      particles.push(new Particle());
    }


    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();
  }
  
  function draw() {
    background('#FFFFFF');
    filter(BLUR, 0);
    for(let i = 0;i<particles.length;i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
    }

    image(img1, width * 1/6 , height / 2 , 320, 240);
    image(img2, width * 3/6 , height / 2 , 320, 240);
    textAlign(CENTER);
    textSize(50);
    textFont('Adobe Garamond Pro');
    text('our atmosphere refuses to enfold us', width / 2, height * 5/6);

    //for camera
   
    imageMode(CENTER);
    image(capture, width * 5/6 , height / 2 , 320, 240);
    filter(GRAY);
    filter(BLUR, 2);
   
  }