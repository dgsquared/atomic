
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
      for(let i = 0;i<width/2;i++){
        particles.push(new Particle());
      }
    }
    
    function draw() {
      background('#FFFFFF');
      for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
      }

        textAlign(CENTER);
    textSize(30);
    textFont('Adobe Garamond Pro');
    text('memories of the atomic bomb', width / 2, height * 2/6);
    text('原爆の記憶', width / 2, height * 2.5/6);
    text('original text by kenji endō', width / 2, height * 4/6);
    text('code by diego gomez', width / 2, height * 3/6);
    textSize(15);
    text('nuclear test footage courtesy of lawrence livermore national laboratories', width / 2, height * 4.5/6);
    }