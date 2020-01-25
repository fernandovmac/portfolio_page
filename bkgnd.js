var yoff = 0.0;
var yoff2 = 0.0;
var yoff3 = 0.0;
var blob ;
var blobs = [];


function setup() {
 createCanvas(1270, 720);
 for (var i = 1; i < 14; i++) {
//   blobs.push(new Blob(i, i*35, random(10, 40), random(0,110), random(100,150), random(100,150), random(80, 190)));
   blobs.push(new Blob(i, i*35, random(10, 40), i*14, 0, i*30, 205));

 }
              
}

function mousePressed() {
 blob = new Blob(mouseX, mouseY, random(10,40), random(0,110), random(100,150), random(100,150) );
 blobs.push(blob);

}

function draw(){
  background(255);
  

   for (var i = 0; i < blobs.length; i++) {
     blobs[i].display();
    }
}

function Blob(posX,posY,r, colorR, colorG, colorB, alpha){
this.pos = createVector(posX, posY);  
var yoff=0;  


  this.display = function(){
  var c = color(colorR, colorG, colorB, alpha);  
  fill(c); 
  noStroke();  
  push();
  translate(this.pos.x, this.pos.y);
  var xoff = map(mouseX, 0, width, 120,130);
  beginShape();
  for (var a = 0; a < TWO_PI/3; a += 0.1) {
    var offset = map(noise( xoff, yoff), 0, 1, 80,300) ;
    var distort = r + offset;
    var x = distort * 10 * cos(a);
    var y = distort * sin(a);
    vertex(x, y);
    xoff += 10.9;
//    xoff += random(100);
    
  }
  endShape(CLOSE);
  pop();
  yoff+=0.01;


}
}
  

  

  


  
//  push();
//  fill(200,0,180,100);
//  translate(300, map(interactionY, 0, 4, -5,15));
//  var radius2 = 200;
//  beginShape();
//  var xoff2 = 0;
//  for (var a = 0; a < TWO_PI-2; a += 1) {
//
//    var offset2 = map(noise(xoff2 +interaction, yoff2 + interactionY ), 0, 1, -55, 55);
//    var r2 = radius2 + offset2;
//    var x2 = r2 * sin(a);
//    var y2 = r2 * cos(a);
//    vertex(x2, y2);
//    xoff2 += 0.5;
//  }
//  endShape();
//  pop();
//  
//  
//  push();
//  fill(0,30,255,90);
//  translate(380, 280 + map(interactionY, 0, 4, -50,55));
//  var radius3 = 100;
//  beginShape();
//  var xoff3 = 0;
//  for (var a = 0; a < TWO_PI-1; a += 1) {
//
//    var offset3 = map(noise(xoff3 +interaction, yoff3 + interactionY ), 0, 1, -55, 55);
//    var r3 = radius3 + offset3;
//    var x3 = r3 * sin(a);
//    var y3 = r3 * cos(a);
//    vertex(x3, y3);
//    xoff3 += 1;
//  }
//  endShape();
//  pop();
//  
//  
//    push();
//  fill(255,0,255,90);
//  translate(360, 200 + map(interactionY, 0, 4, -50,55));
//  var radius4 = 150;
//  beginShape();
//  var xoff4 = 0;
//  for (var a = 0; a < TWO_PI-0.76; a += 1.4) {
//
//    var offset4 = map(noise(xoff4 +interaction, yoff3 + interactionY ), 0, 1, -105, 105);
//    var r4 = radius4 + offset4;
//    var x4 = r4 * sin(a);
//    var y4= r4 * cos(a);
//    vertex(x4, y4);
//    xoff4 += 1;
//  }
//  endShape();
//  pop();
  
//}
  

