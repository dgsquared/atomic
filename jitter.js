
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
    
    function setup() {
      createCanvas(windowWidth, windowHeight);
    }
    
    function draw() {
      background('#000000');

      fill ('#FFFFFF');
      textAlign(CENTER);
      textFont('Adobe Garamond Pro');
      textSize(40);
      textFont('Adobe Garamond Pro');
      text('god\'s creation rebuffs our assimilation', width / 2, height * 5/6);
    }