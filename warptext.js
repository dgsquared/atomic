let font
let points


function preload() {
  font = loadFont('Inconsolata-Bold.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //textAlign(CENTER); how do i center the warping text?
   
  points = font.textToPoints('Behold', width/4 , height/2 , height / 3, {
    sampleFactor: 0.1,
    simplifyThreshold: 0
  })

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

  fill('#FFFFFF');
  textAlign(CENTER);
    textSize(40);
    textFont('Adobe Garamond Pro');
    text('a gaze that admits no ray of light', width * 2/5, height * 4.5/6);
    text('overcome by treachery\'s grief', width * 3/5, height * 5/6);
}