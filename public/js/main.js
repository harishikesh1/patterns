// setting up canvas size, colors, and design properties

let canvasWidth = 250;
let canvasHeight = 250;
let density = 5;
let strokeColor = '#ecc94b';
let secondaryColor = '#48bb78';
let backgroundColor = '#2b2b31';

 
let zoom = 1;  
let angleOffset = 0;  

// generating patterns wiht new p5() to set up a new instance of a sketch  
// and it ensures that each sketch doesnot interfere with the others.
new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('heartPatternContainer');
    p.background(backgroundColor);
  };

  p.draw = () => {
    p.clear();
    p.background(backgroundColor);
    
    const numHearts = 10;   
    const heartSize = 20;  
    const spaceBetween = 15;  
    const offsetX = heartSize + spaceBetween; 
    const offsetY = heartSize + spaceBetween;  
 
    for (let i = 0; i < numHearts; i++) {
      for (let j = 0; j < numHearts; j++) {
        const x = offsetX * i + spaceBetween;
        const y = offsetY * j + spaceBetween;
 
        const currentColor = (i + j) % 2 === 0 ? strokeColor : secondaryColor;
        p.fill(currentColor);

        
        drawHeart(x, y, heartSize);
      }
    }
  };
 
  function drawHeart(x, y, size) {
    p.beginShape();
    p.vertex(x, y);
    p.bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 2, x, y + size);
    p.bezierVertex(x + size, y + size / 2, x + size / 2, y - size / 2, x, y);
    p.endShape(p.CLOSE);
  }
});



new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('trianglesGridContainer');
    p.background(backgroundColor);
    p.noFill();
  };

  p.draw = () => {
    p.clear();
    p.background(backgroundColor);
    const step = Math.min(canvasWidth, canvasHeight) / density;
    const triangleSize = step * 0.6;  
    for (let y = 0; y <= canvasHeight; y += step) {
      for (let x = 0; x <= canvasWidth; x += step) {
        
        const currentColor = (Math.floor(x / step) + Math.floor(y / step)) % 2 === 0 ? strokeColor : secondaryColor;
        p.stroke(currentColor);

        if ((Math.floor(x / step) + Math.floor(y / step)) % 2 === 0) {
    
          p.triangle(x, y - triangleSize / 2, x - triangleSize / 2, y + triangleSize / 2, x + triangleSize / 2, y + triangleSize / 2);
        } else {
          
          p.triangle(x, y + triangleSize / 2, x - triangleSize / 2, y - triangleSize / 2, x + triangleSize / 2, y - triangleSize / 2);
        }
      }
    }
  };
});



new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('cylinderGridContainer');
    p.background(backgroundColor);
    p.noFill();
  };

  p.draw = () => {
    p.clear();
    p.background(backgroundColor);
    const step = Math.min(canvasWidth, canvasHeight) / density;
    const radius = step * 0.3;  

    for (let y = 0; y <= canvasHeight; y += step) {
      for (let x = 0; x <= canvasWidth; x += step) {   
        const currentColor = (Math.floor(x / step) + Math.floor(y / step)) % 2 === 0 ? strokeColor : secondaryColor;
        p.stroke(currentColor);
        
         
        p.ellipse(x, y - radius, radius * 2, radius);

       
        p.ellipse(x, y + radius, radius * 2, radius);
 
        p.line(x - radius, y - radius, x - radius, y + radius);
        p.line(x + radius, y - radius, x + radius, y + radius);
      }
    }
  };
});





new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('checkerboardContainer');
    p.background(backgroundColor);
    p.noStroke();  
    p.noLoop();    
  };

  p.draw = () => {
    p.clear();
    p.background(backgroundColor);
    const step = Math.min(canvasWidth, canvasHeight) / density;

    for (let y = 0; y < canvasHeight; y += step) {  
      for (let x = 0; x < canvasWidth; x += step) { 
        const isEven = (Math.floor(x / step) + Math.floor(y / step)) % 2 === 0;
 
 
        p.fill(isEven ? strokeColor : secondaryColor);
 
        p.rect(x, y, step, step);
      }
    }
  };
});



 

new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('triangleGridContainer');
    p.background(backgroundColor);
    p.noFill();
  };

  p.draw = () => {
    p.clear();
    p.background(backgroundColor);
    p.push();
    p.translate(canvasWidth / 2, canvasHeight / 2);  
    p.scale(zoom);
    p.rotate(angleOffset);

    let rows = 10;
    let cols = 10;
    let size = 50;
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let x = col * size - (cols * size) / 2;
        let y = row * size - (rows * size) / 2;
        
        
        p.fill((row + col) % 2 === 0 ? strokeColor : secondaryColor);
 
        p.beginShape();
        p.vertex(x, y);
        p.vertex(x + size, y);
        p.vertex(x + size / 2, y + size);
        p.endShape(p.CLOSE);
      }
    }

    p.pop();
  };
});


new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('minusignGridContainer');
    p.background(backgroundColor);
    p.noFill();

    const step = Math.min(canvasWidth, canvasHeight) / density;
    const minusSize = step * 0.4;   

    p.strokeWeight(2);  

    for (let y = 0; y <= canvasHeight; y += step) {
      for (let x = 0; x <= canvasWidth; x += step) { 
        if ((Math.floor(x / step) + Math.floor(y / step)) % 2 === 0) {
          p.stroke(strokeColor);
        } else {
          p.stroke(secondaryColor);
        }
 
        p.line(x - minusSize / 2, y, x + minusSize / 2, y);
      }
    }
  };
});



 



new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('plusSignGridContainer');
    p.background(backgroundColor);
    p.noFill();

    const step = Math.min(canvasWidth, canvasHeight) / density;
    const plusSize = step * 0.4;   

    p.strokeWeight(2); 
    for (let y = 0; y <= canvasHeight; y += step) {
      for (let x = 0; x <= canvasWidth; x += step) {
       
       

        if ((Math.floor(x / step) + Math.floor(y / step)) % 2 === 0) {
          p.stroke(strokeColor);
        } else {
          p.stroke(secondaryColor);
        }
 
        p.line(x - plusSize / 2, y, x + plusSize / 2, y); 
        p.line(x, y - plusSize / 2, x, y + plusSize / 2);
      }
    }
  };
});


new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('wavyGridContainer');
    p.background(backgroundColor);
    p.noFill();

    const step = Math.min(canvasWidth, canvasHeight) / density;
    for (let y = 0; y <= canvasHeight; y += step) {
      p.beginShape();
      for (let x = 0; x <= canvasWidth; x += step) {
        const offset = 10 * p.sin(x * 0.1);

        
        if ((Math.floor(x / step) + Math.floor(y / step)) % 2 === 0) {
          p.stroke(strokeColor);   
        } else {
          p.stroke(secondaryColor);  
        }
 
        p.vertex(x, y + offset);
      }
      p.endShape();
    }
  };
});



new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('zigzagContainer');
    p.background(backgroundColor);
    p.noFill();
    const step = Math.min(canvasWidth, canvasHeight) / density;
    const cols = Math.ceil(canvasWidth / step);
    const rows = Math.ceil(canvasHeight / step);

    for (let y = 0; y < rows; y++) {
      p.beginShape();

      for (let x = 0; x < cols; x++) {

        let xPos = x * step;
        let yPos = y * step;

        if (x === cols - 1) {
          xPos = canvasWidth;
        }
        if (y === rows - 1) {
          yPos = canvasHeight;
        }
        if ((x + y) % 2 === 0) {
          p.stroke(strokeColor);
        } else {
          p.stroke(secondaryColor);
        }

        p.vertex(xPos, yPos + (x % 2 === 0 ? 0 : step));
      }

      p.endShape();
    }
    p.stroke(strokeColor);

  };
});


new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('radialTrianglesContainer');
    p.background(backgroundColor);
    p.noFill();
    p.translate(canvasWidth / 2, canvasHeight / 2);

    for (let i = 0; i < 360; i += 10) {
      const angle = p.radians(i);
      const x1 = 100 * p.cos(angle);
      const y1 = 100 * p.sin(angle);
      const x2 = 200 * p.cos(angle + p.PI / 3);
      const y2 = 200 * p.sin(angle + p.PI / 3);
      const x3 = 200 * p.cos(angle - p.PI / 3);
      const y3 = 200 * p.sin(angle - p.PI / 3);

      p.stroke(i % 20 === 0 ? strokeColor : secondaryColor);
      p.triangle(x1, y1, x2, y2, x3, y3);
    }
  };
});


new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('diamondGridContainer');
    p.background(backgroundColor);
    p.noFill();

    const diamondSize = Math.min(canvasWidth, canvasHeight) / density;
    for (let x = 0; x < canvasWidth; x += diamondSize) {
      for (let y = 0; y < canvasHeight; y += diamondSize) {
        p.push();
        p.translate(x, y);
        p.rotate(p.HALF_PI);


        p.stroke((x + y) % 20 === 0 ? strokeColor : secondaryColor);
        p.beginShape();
        p.vertex(0, -diamondSize / 2);
        p.vertex(diamondSize / 2, 0);
        p.vertex(0, diamondSize / 2);
        p.vertex(-diamondSize / 2, 0);
        p.endShape(p.CLOSE);
        p.pop();
      }
    }
  };
});






new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('wavePatternContainer');
    p.background(backgroundColor);
    p.noFill();

   
    let strokeCol = p.color(strokeColor);
    let secCol = p.color(secondaryColor);

    for (let y = 0; y < canvasHeight; y += density) {
      p.beginShape();
      for (let x = 0; x < canvasWidth; x += density) {
        

        const offset = 20 * p.sin((x + y) * 0.02); 
        let r = p.map(offset, -20, 20, p.red(strokeCol), p.red(secCol));
        let g = p.map(offset, -20, 20, p.green(strokeCol), p.green(secCol));
        let b = p.map(offset, -20, 20, p.blue(strokeCol), p.blue(secCol));

        p.stroke(r, g, b);
        p.vertex(x, y + offset);
      }
      p.endShape();
    }
  };
});


// Hexagonal Grid
new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('hexagonalGridContainer');
    p.background(backgroundColor);  

    const hexSize = Math.min(canvasWidth, canvasHeight) / density;

   
    for (let y = -hexSize * 9; y < canvasHeight + hexSize; y += hexSize * 0.866) {
      for (let x = -hexSize * 9; x < canvasWidth + hexSize; x += hexSize * 1.5) {
        const xOffset = (Math.floor(y / (hexSize * 0.866)) % 2 === 0) ? 0 : hexSize * 0.75;
 
        const useSecondaryColor = Math.floor(x / hexSize + y / hexSize) % 2 === 0;
        p.stroke(useSecondaryColor ? secondaryColor : strokeColor);

        p.noFill();
        p.hexagon(x + xOffset, y, hexSize * 0.5);  
      }
    }
  };

  // Function to draw a hexagon
  p.hexagon = (x, y, s) => {
    p.beginShape();
    for (let i = 0; i < 6; i++) {
      const angle = p.radians(i * 60);
      p.vertex(x + s * p.cos(angle), y + s * p.sin(angle));
    }
    p.endShape(p.CLOSE);
  };
});








// Spiral Pattern
new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('spiralContainer');
    p.background(backgroundColor);
    p.noFill();
    p.translate(canvasWidth / 2, canvasHeight / 2);

    for (let i = 0; i < 360 * density; i++) {
      const angle = 0.1 * i + angleOffset;
      const x = zoom * (1 + angle) * p.cos(angle);
      const y = zoom * (1 + angle) * p.sin(angle);
 
      p.stroke(i % 2 === 0 ? strokeColor : secondaryColor);
      p.ellipse(x, y, 2);
    }
  };
});

 
new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('gridContainer');
    p.background(backgroundColor);
    p.noFill();
    const cellSize = Math.min(canvasWidth, canvasHeight) / density;

    for (let x = 0; x <= canvasWidth; x += cellSize) {
      p.stroke((x / cellSize) % 2 === 0 ? strokeColor : secondaryColor);
      p.line(x, 0, x, canvasHeight);
    }
    for (let y = 0; y <= canvasHeight; y += cellSize) {
      p.stroke((y / cellSize) % 2 === 0 ? strokeColor : secondaryColor);
      p.line(0, y, canvasWidth, y);
    }
  };
});
 
new p5((p) => {
  const drawFractalTree = (x, y, angle, depth, length) => {
    if (depth === 0) return;

    const x1 = x + length * p.cos(p.radians(angle + angleOffset));
    const y1 = y + length * p.sin(p.radians(angle + angleOffset));

   
    p.stroke(depth % 2 === 0 ? strokeColor : secondaryColor);
    p.line(x, y, x1, y1);
    drawFractalTree(x1, y1, angle - 20, depth - 1, length * 0.7);
    drawFractalTree(x1, y1, angle + 20, depth - 1, length * 0.7);
  };

  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('fractalContainer');
    p.background(backgroundColor);
    p.noFill();
    drawFractalTree(canvasWidth / 2, canvasHeight, -90, density + 2, density * 10);
  };
});

// Circle Packing Pattern
new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('circleContainer');
    p.background(backgroundColor);
    p.noFill();

    const circles = [];
    for (let i = 0; i < density * 50; i++) {
      const radius = p.random(5, 20);
      const x = p.random(radius, canvasWidth - radius);
      const y = p.random(radius, canvasHeight - radius);

      let overlapping = false;
      for (const circle of circles) {
        const d = p.dist(x, y, circle.x, circle.y);
        if (d < circle.r + radius) {
          overlapping = true;
          break;
        }
      }

      if (!overlapping) {
        circles.push({ x, y, r: radius });

        // Alternate stroke colors
        p.stroke(i % 2 === 0 ? strokeColor : secondaryColor);
        p.ellipse(x, y, radius * 2);
      }
    }
  };
});


new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('concentricCircleContainer');
    p.background(backgroundColor);
    p.noFill();
    p.translate(canvasWidth / 2, canvasHeight / 2);

    for (let i = 0; i < density; i++) {
      const radius = (i + 1) * 20;
      p.stroke(i % 2 === 0 ? strokeColor : secondaryColor);
      p.ellipse(0, 0, radius * 2);
    }
  };
});

new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('concentricSquareContainer');
    p.background(backgroundColor);
    p.noFill();
    p.translate(canvasWidth / 2, canvasHeight / 2);

    for (let i = 0; i < density; i++) {
      const size = (i + 1) * 30;
      p.stroke(i % 2 === 0 ? strokeColor : secondaryColor);
      p.rect(-size / 2, -size / 2, size, size);
    }
  };
});








let canvas;

function setup() {
  noFill();
  stroke(0);
  generatePattern();
}


// event listen every time the input changes the new pattern is generated simultaneously
document.getElementById('generateBtn').addEventListener('click', () => {
  generatePattern();
});

document.getElementById('densitySlider').addEventListener('input', generatePattern);
document.getElementById('strokeWeight').addEventListener('input', generatePattern);
document.getElementById('colorPicker').addEventListener('input', generatePattern);
document.getElementById('colorPickerSe').addEventListener('input', generatePattern);
document.getElementById('bgcolorPicker').addEventListener('input', generatePattern);
document.getElementById('canvasWidth').addEventListener('input', generatePattern);
document.getElementById('canvasHeight').addEventListener('input', generatePattern);
document.getElementById('patternType').addEventListener('change', generatePattern);

 
document.getElementById('zoomSlider').addEventListener('input', (event) => {
  zoom = parseFloat(event.target.value);  
  generatePattern();
});

 
document.getElementById('angleSlider').addEventListener('input', (event) => {
  angleOffset = parseFloat(event.target.value); 
  generatePattern();
});


// pattern genrate function it genrates new patter when user input changes
function generatePattern() {
  const width = parseInt(document.getElementById('canvasWidth').value, 10);
  const height = parseInt(document.getElementById('canvasHeight').value, 10);
  const patternType = document.getElementById('patternType').textContent.trim().split(' ')[0].toLowerCase();

  const density = parseInt(document.getElementById('densitySlider').value, 10);
  const strokeWeightValue = parseInt(document.getElementById('strokeWeight').value, 10);
  const color = document.getElementById('colorPicker').value;
  const bgcolor = document.getElementById('bgcolorPicker').value;
  const seColor = document.getElementById('colorPickerSe').value; 

 
  if (canvas) canvas.remove();

  // create a new p5.js canvas
  const canvasWrapper = document.getElementById('canvas-wrapper');
  if (!canvasWrapper) {
    console.error('Canvas wrapper not found!');
    return;
  }

  canvas = createCanvas(width, height);
  canvas.elt.width = width;
  canvas.elt.height = height;
  canvas.parent('canvas-wrapper');
  background(bgcolor);
  strokeWeight(strokeWeightValue);
  console.log(width, " ", height);

   
  translate(width / 2, height / 2);

  scale(zoom);  
  rotate(radians(angleOffset));  

  // Draw the selected pattern and then call the function to genrate the pattern with given arguments
  if (patternType === 'spiral') {
    drawSpiral(density, width, height, color, seColor);
  } else if (patternType === 'grid') {
    drawGrid(density, width, height, color, seColor);
  } else if (patternType === 'fractal') {
    drawFractalTree(0, height / 2, -90, density + 2, density * 10, color, seColor);
  } else if (patternType === 'circle') {
    drawCirclePacking(density, width, height, color, seColor);
  }
  else if (patternType === 'concentric') {
    drawConcentric(density, width, height, color, seColor);
  }
  else if (patternType === 'hexagonal') {
    drawHexagonal(density, width, height, color, seColor);
  }
  else if (patternType === 'wave') {
    drawWave(density, width, height, color, seColor);
  }
  else if (patternType === 'concentricsquare') {
    drawconcentricSquare(density, width, height, color, seColor);
  }
  else if (patternType === 'radialtriangles') {
    drawRadialTriangles(density, width, height, color, seColor);
  }
  else if (patternType === 'diamondgrid') {
    drawdiamondGrid(density, width, height, color, seColor);
  }
  else if (patternType === 'zigzag') {
    drawZigzag(density, width, height, color, seColor);
  }
  else if (patternType === 'wavygrid') {
    drawWavygrid(density, width, height, color, seColor);
  }
  else if (patternType === 'plus') {
    drawplus(density, width, height, color, seColor);
  }
  else if (patternType === 'minus') {
    drawMinus(density, width, height, color, seColor);
  }
  else if (patternType === 'heart') {
    drawHeartContainer(density, width, height, color, seColor);
  }
  else if (patternType === 'trianglesgrid') {
    drawTrianglesgrid(density, width, height, color, seColor);
  }
  else if (patternType === 'cylinder') {
    drawCylinder(density, width, height, color, seColor);
  }
  else if (patternType === 'triangle') {
    drawTriangle(density, width, height, color, seColor);
  }
  else if (patternType === 'check') {
    drawCheck(density, width, height, color, seColor);
  }
  
  

  else {
    console.error('Unknown pattern type:', patternType);
  }
}



 

function drawTriangle(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  clear();
  background(backgroundColor);
  push();

  scale(zoom);
  rotate(angleOffset);
 
  const size = Math.min(canvasWidth, canvasHeight) / density;
  const cols = Math.ceil(canvasWidth / size);
  const rows = Math.ceil(canvasHeight / size);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      
      const x = col * size - (cols * size) / 2;
      const y = row * size - (rows * size) / 2;
 
      fill((row + col) % 2 === 0 ? strokeColor : secondaryColor);
 
      beginShape();
      vertex(x, y);
      vertex(x + size, y);
      vertex(x + size / 2, y + size);
      endShape(CLOSE);
    }
  }

  pop();
}


new p5((p) => {
  p.setup = () => {
    p.createCanvas(canvasWidth, canvasHeight).parent('checkerboardContainer');
    p.background(backgroundColor);
    p.noStroke();   
    p.noLoop();     
  };

  p.draw = () => {
    p.clear();
    p.background(backgroundColor);
    const step = Math.min(canvasWidth, canvasHeight) / density;

    for (let y = 0; y < canvasHeight; y += step) {   
      for (let x = 0; x < canvasWidth; x += step) { 
        const isEven = (Math.floor(x / step) + Math.floor(y / step)) % 2 === 0;
 
 
        p.fill(isEven ? strokeColor : secondaryColor);
 
        p.rect(x, y, step, step);
      }
    }
  };
});


 
   


function drawCheck(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const step = Math.min(canvasWidth, canvasHeight) / density;

  const xOffset = -((Math.floor(canvasWidth / step) * step) / 2);
  const yOffset = -((Math.floor(canvasHeight / step) * step) / 2);

  for (let y = 0; y < canvasHeight; y += step) {
    for (let x = 0; x < canvasWidth; x += step) {
      const isEven = (Math.floor(x / step) + Math.floor(y / step)) % 2 === 0;

      fill(isEven ? strokeColor : secondaryColor);

      rect(x + xOffset, y + yOffset, step, step);
    }
  }
}
 

function drawCylinder(density, canvasWidth, canvasHeight, strokeColor, secondaryColor){
  const step = Math.min(canvasWidth, canvasHeight) / density;
  const radius = step * 0.3; 
  const xOffset = -canvasWidth / 2;
  const yOffset = -canvasHeight / 2;

  for (let y = 0; y <= canvasHeight; y += step) {
    for (let x = 0; x <= canvasWidth; x += step) {
 
      const currentColor = (Math.floor(x / step) + Math.floor(y / step)) % 2 === 0 ? strokeColor : secondaryColor;
      stroke(currentColor);
       
      ellipse(x + xOffset, y + yOffset - radius, radius * 2, radius);
 
      ellipse(x + xOffset, y + yOffset + radius, radius * 2, radius);
 
      line(x + xOffset - radius, y + yOffset - radius, x + xOffset - radius, y + yOffset + radius);
      line(x + xOffset + radius, y + yOffset - radius, x + xOffset + radius, y + yOffset + radius);
    }
  }
}



function drawTrianglesgrid(density, canvasWidth, canvasHeight, strokeColor, secondaryColor){
  const step = Math.min(canvasWidth, canvasHeight) / density;
  const triangleSize = step * 0.6;  
 
  const xOffset = -canvasWidth / 2;
  const yOffset = -canvasHeight / 2;

  for (let y = 0; y <= canvasHeight; y += step) {
    for (let x = 0; x <= canvasWidth; x += step) {
   
      const currentColor = (Math.floor(x / step) + Math.floor(y / step)) % 2 === 0 ? strokeColor : secondaryColor;
      stroke(currentColor);

      if ((Math.floor(x / step) + Math.floor(y / step)) % 2 === 0) {
     
        triangle(x + xOffset, y + yOffset - triangleSize / 2, x + xOffset - triangleSize / 2, y + yOffset + triangleSize / 2, x + xOffset + triangleSize / 2, y + yOffset + triangleSize / 2);
      } else {
        
        triangle(x + xOffset, y + yOffset + triangleSize / 2, x + xOffset - triangleSize / 2, y + yOffset - triangleSize / 2, x + xOffset + triangleSize / 2, y + yOffset - triangleSize / 2);
      }
    }
  }
}




 
function drawHeartContainer(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const heartSize = Math.min(canvasWidth, canvasHeight) / density;  
  const spaceBetween = heartSize * 0.5; 
  const offsetX = heartSize + spaceBetween; 
  const offsetY = heartSize + spaceBetween; 
 
  const numHeartsX = Math.floor(canvasWidth / offsetX);
  const numHeartsY = Math.floor(canvasHeight / offsetY);
 
  const totalWidth = numHeartsX * offsetX;
  const totalHeight = numHeartsY * offsetY;
 
  push();
  scale(zoom); 
  rotate(radians(angleOffset));  

 
  const startX = -totalWidth / 2 + offsetX / 2;
  const startY = -totalHeight / 2 + offsetY / 2;
 
  for (let i = 0; i < numHeartsX; i++) {
    for (let j = 0; j < numHeartsY; j++) {
      const x = startX + offsetX * i;
      const y = startY + offsetY * j;
 
      const currentColor = (i + j) % 2 === 0 ? strokeColor : secondaryColor;
      fill(currentColor);

 
      drawHeart(x, y, heartSize);
    }
  }

  pop();  
  function drawHeart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 2, x, y + size);
    bezierVertex(x + size, y + size / 2, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
  }
}





  



function drawMinus(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const step = Math.min(canvasWidth, canvasHeight) / density;
  const minusSize = step * 0.4;   
  const xOffset = -canvasWidth / 2;
  const yOffset = -canvasHeight / 2;

  for (let y = 0; y <= canvasHeight; y += step) {
    for (let x = 0; x <= canvasWidth; x += step) {
       
      if ((Math.floor(x / step) + Math.floor(y / step)) % 2 === 0) {
        stroke(strokeColor);
      } else {
        stroke(secondaryColor);
      }
 
      line(x + xOffset - minusSize / 2, y + yOffset, x + xOffset + minusSize / 2, y + yOffset);
    }
  }
}


function drawplus(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const step = Math.min(canvasWidth, canvasHeight) / density;
  const plusSize = step * 0.4;
 
  const xOffset = -canvasWidth / 2;
  const yOffset = -canvasHeight / 2;

  for (let y = 0; y <= canvasHeight; y += step) {
    for (let x = 0; x <= canvasWidth; x += step) {

      if ((Math.floor(x / step) + Math.floor(y / step)) % 2 === 0) {
        stroke(strokeColor);
      } else {
        stroke(secondaryColor);
      }
 
      line(x + xOffset - plusSize / 2, y + yOffset, x + xOffset + plusSize / 2, y + yOffset);
 
      line(x + xOffset, y + yOffset - plusSize / 2, x + xOffset, y + yOffset + plusSize / 2);
    }
  }
}


function drawWavygrid(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const step = Math.min(canvasWidth, canvasHeight) / density;
 
  const xOffset = -canvasWidth / 2;
  const yOffset = -canvasHeight / 2;

  for (let y = 0; y <= canvasHeight; y += step) {
    beginShape();

    for (let x = 0; x <= canvasWidth; x += step) {
      const offset = 10 * sin((x + xOffset) * 0.1);  
      if ((Math.floor(x / step) + Math.floor(y / step)) % 2 === 0) {
        stroke(strokeColor);  
      } else {
        stroke(secondaryColor);  
      }
 
      vertex(x + xOffset, y + yOffset + offset);
    }

    endShape();
  }
}





function drawZigzag(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const step = Math.min(canvasWidth, canvasHeight) / density;
  const cols = Math.ceil(canvasWidth / step);
  const rows = Math.ceil(canvasHeight / step);

  const xOffset = -canvasWidth / 2; 
  const yOffset = -canvasHeight / 2;  

  for (let y = 0; y < rows; y++) {
    beginShape();

    for (let x = 0; x < cols; x++) {
      let xPos = x * step + xOffset;  
      let yPos = y * step + yOffset;  

      if ((x + y) % 2 === 0) {
        stroke(strokeColor);
      } else {
        stroke(secondaryColor);
      }

      vertex(xPos, yPos + (x % 2 === 0 ? 0 : step));
    }

    endShape();
  }

  stroke(strokeColor);
}







function drawdiamondGrid(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const diamondSize = Math.min(canvasWidth, canvasHeight) / density;

  console.log("Diamond Size: ", diamondSize);   
  for (let x = 0; x < canvasWidth; x += diamondSize) {
    for (let y = 0; y < canvasHeight; y += diamondSize) {
      push();
 
      translate(x - canvasWidth / 2, y - canvasHeight / 2);   
      



      stroke((x + y) % 50 === 0 ? strokeColor : secondaryColor);
      beginShape();



      vertex(0, -diamondSize / 2);
      vertex(diamondSize / 2, 0);
      vertex(0, diamondSize / 2);
      vertex(-diamondSize / 2, 0);

      endShape(CLOSE);

      pop();
    }
  }
}




function drawRadialTriangles(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const step = 360 / density/2;  

  for (let i = 0; i < 360; i += step) {
    const angle = radians(i);
    const x1 = 100 * cos(angle);
    const y1 = 100 * sin(angle);
    const x2 = 200 * cos(angle + PI / 3);
    const y2 = 200 * sin(angle + PI / 3);
    const x3 = 200 * cos(angle - PI / 3);
    const y3 = 200 * sin(angle - PI / 3);

    
    stroke(i % (2 * step) === 0 ? strokeColor : secondaryColor);
    triangle(x1, y1, x2, y2, x3, y3);
  }
}








function drawconcentricSquare(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {

  for (let i = 0; i < density; i++) {
    const size = (i + 1) * 30;
    stroke(i % 2 === 0 ? strokeColor : secondaryColor);
    rect(-size / 2, -size / 2, size, size);
  }
}












function drawHexagonal(density, canvasWidth, canvasHeight, strokeColor, secondaryColor) {
  const hexSize = Math.min(canvasWidth, canvasHeight) / density;

 
  for (let y = 0; y < canvasHeight + hexSize; y += hexSize * 0.866) {
    for (let x = 0; x < canvasWidth + hexSize; x += hexSize * 1.5) {
      const xOffset = (Math.floor(y / (hexSize * 0.866)) % 2 === 0) ? 0 : hexSize * 0.75;

    
      const useSecondaryColor = Math.floor(x / hexSize + y / hexSize) % 2 === 0;
      stroke(useSecondaryColor ? secondaryColor : strokeColor);

      noFill();
      hexagon(x + xOffset - canvasWidth / 2, y - canvasHeight / 2, hexSize * 0.5); 
    }
  }

  function hexagon(x, y, s) {
    beginShape();
    for (let i = 0; i < 6; i++) {
      const angle = radians(i * 60);
      vertex(x + s * cos(angle), y + s * sin(angle));
    }
    endShape(CLOSE);
  }
}




function drawConcentric(density, width, height, strokeColor, secondaryColor) {
  for (let i = 0; i < density; i++) {
    const radius = (i + 1) * 20;
    stroke(i % 2 === 0 ? strokeColor : secondaryColor);
    ellipse(0, 0, radius * 2);
  }
}
function drawSpiral(density, width, height, strokeColor, secondaryColor) {
  for (let i = 0; i < 360 * density; i++) {
    const angle = 0.1 * i;
    const x = (1 + angle) * cos(angle);
    const y = (1 + angle) * sin(angle);

  
    stroke(i % 2 === 0 ? strokeColor : secondaryColor);
    ellipse(x, y, 2);
  }
}

function drawGrid(density, width, height, strokeColor, secondaryColor) {

  const cellSize = Math.min(width, height) / density;

  
  for (let x = -width / 2, i = 0; x <= width / 2; x += cellSize, i++) {
    stroke(i % 2 === 0 ? strokeColor : secondaryColor); 
    line(x, -height / 2, x, height / 2);
  }

 
  for (let y = -height / 2, i = 0; y <= height / 2; y += cellSize, i++) {
    stroke(i % 2 === 0 ? strokeColor : secondaryColor); 
    line(-width / 2, y, width / 2, y);
  }
}




function drawWave(density, width, height, strokeColor, secondaryColor) {
 
  let strokeCol = color(strokeColor);
  let secCol = color(secondaryColor);
 
  for (let y = 0; y < height; y += density) {  
    beginShape();
    for (let x = 0; x < width; x += density) {  
      const offset = 5 * sin((x + y) * 0.05);  
      let r = map(offset, -20, 20, red(strokeCol), red(secCol));
      let g = map(offset, -20, 20, green(strokeCol), green(secCol));
      let b = map(offset, -20, 20, blue(strokeCol), blue(secCol));

      stroke(r, g, b);  
      vertex(x - width / 2, y - height / 2 + offset);  
    }
    endShape();
  }
}





function drawFractalTree(x, y, angle, depth, length, strokeColor, secondaryColor) {
  if (depth === 0) return;

  const x1 = x + length * cos(radians(angle));
  const y1 = y + length * sin(radians(angle));

 
  stroke(depth % 2 === 0 ? strokeColor : secondaryColor);
  line(x, y, x1, y1);

  drawFractalTree(x1, y1, angle - 20, depth - 1, length * 0.7, strokeColor, secondaryColor);
  drawFractalTree(x1, y1, angle + 20, depth - 1, length * 0.7, strokeColor, secondaryColor);
}

function drawCirclePacking(density, width, height, strokeColor, secondaryColor) {
  const circles = [];
  for (let i = 0; i < density * 50; i++) {
    const radius = random(5, 20);
    const x = random(-width / 2 + radius, width / 2 - radius);
    const y = random(-height / 2 + radius, height / 2 - radius);

    let overlapping = false;
    for (const circle of circles) {
      const d = dist(x, y, circle.x, circle.y);
      if (d < circle.r + radius) {
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      circles.push({ x, y, r: radius });
 
      stroke(i % 2 === 0 ? strokeColor : secondaryColor);
      ellipse(x, y, radius * 2);
    }
  }
}



document.getElementById('exportBtn').addEventListener('click', () => {
  if (canvas) {
    const format = document.getElementById('imageFormatSelect').value;
    const fileName = 'pattern';
 
    saveCanvas(canvas, fileName, format);
  } else {
    alert('Please generate a pattern first!');
  }
});
