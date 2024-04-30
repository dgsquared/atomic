let font
let points


function preload() {
  font = loadFont('Inconsolata-Bold.ttf')
}

function setup() {
  createCanvas(1200, 600)
  textAlign(CENTER, CENTER)
   
  points = font.textToPoints('Behold', 130, 330, 180, {
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
}