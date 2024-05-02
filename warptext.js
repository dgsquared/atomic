let font;
let points;
let fadeOpacity = 0;

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
      fill('#FFFFFF');
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

function preload() {
  font = loadFont('Inconsolata-Bold.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //textAlign(CENTER); how do i center the warping text?
   
  points = font.textToPoints('Behold', width/3.75 , height/2 , height / 3, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  })

  for(let i = 0;i<width/2;i++){
    particles.push(new Particle());
  }

}

function draw() {
  background("#000000")
  
  const nl = 0.01
  
  noFill()
  stroke("#FFFFFF")
  beginShape()
 	points.forEach(point => {
		let movement = createVector(0, 0)
    if (mouseX) {
      distance = dist(point.x, point.y, mouseX, mouseY)
      movement = createVector(point.x - mouseX, point.y - mouseY)
      movement = movement.mult(60 / distance)
    }
    
//     const move = 1 / distance
    const nx = movement.x + (noise(nl * point.x, nl * point.y, nl * frameCount) * 40 - 20)
    const ny = movement.y + (noise(nl * point.x, nl * point.y, nl * frameCount) * 40 - 20)
    vertex(point.x + nx, point.y + ny)
  })
  endShape()
  
  noStroke()
  noFill()
  points.forEach(point => {
    let movement = createVector(0, 0)
    if (mouseX) {
      distance = dist(point.x, point.y, mouseX, mouseY)
      movement = createVector(point.x - mouseX, point.y - mouseY)
      movement = movement.mult(60 / distance)
    }
    
//     const move = 1 / distance
    const nx = movement.x
    const ny = movement.y
    circle(point.x + nx, point.y + ny, 5)
  })

  fill(255, 255, 255, fadeOpacity);
  textAlign(CENTER);
    textSize(40);
    textFont('Adobe Garamond Pro');
    text('a gaze that admits no ray of light', width * 2/5, height * 4.5/6);
    text('overcome by treachery\'s grief', width * 3/5, height * 5/6);

  for(let i = 0;i<particles.length;i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
    }
push();
  if (fadeOpacity < 255) {
    fadeOpacity += .5;
  }
pop();
}