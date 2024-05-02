    
      function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }
      
      function setup() {
        createCanvas(windowWidth, windowHeight);
        background(0, 0);
        
      }
      
      function draw() {
        fill('#FFFFFF');
        textAlign(CENTER);
        textSize(30);
        textFont('Adobe Garamond Pro');
        text('our atmosphere refuses to enfold us', width / 2, height * 5/6);
      }