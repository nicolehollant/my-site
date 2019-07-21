export default function( sketch ) {

    var width = 0;
    var height = 0;
    var particleArr = [];
    var numParticles = 80;
    var wind = 0;
    var yoff = 0.0;


    sketch.setup = function() {
        width = document.getElementById('sketch').clientWidth;
        height = document.getElementById('sketch').clientHeight;
        sketch.createCanvas(width, height);
        sketch.noStroke();
        sketch.fill(176, 191, 212);
        sketch.strokeWeight(2);
        for(var i = 0; i < numParticles; i++){
            particleArr.push(new Particle());
        }
        sketch.ellipseMode(sketch.CENTER);
    }

    sketch.draw = function() {
        wind = sketch.map(sketch.mouseX, 0, width, -1, 1);
        sketch.clear();
        for (var i = 0; i < numParticles; ++i) {
            particleArr[i].move();
            particleArr[i].display();
        }
        
        sketch.beginShape(); 
        var xoff = 0;
        for (var x = 0; x <= width; x += 10) {
            var y = sketch.map(sketch.noise(xoff, yoff), 0, 1, height-10,height-140);
            sketch.vertex(x, y); 
            xoff += 0.025;
        }
        yoff += wind/200;
        sketch.vertex(width, height);
        sketch.vertex(0, height);
        sketch.endShape(sketch.CLOSE);
    }

    sketch.windowResized = function() {

        width = document.getElementById('sketch').clientWidth;
        height = document.getElementById('sketch').clientHeight;
        sketch.resizeCanvas(width, height);
    }


    class Particle {

        constructor(){
            this.diameter = Math.random()*10 + 10;
            this.diam2 = this.diameter*.5;
            this.dx = this.diameter;
            this.x = Math.random()*width;
            this.y = Math.random()*-height;
            this.dy = this.diam2*0.1;
            this.ay = Math.pow(this.diam2, 0.025);
            this.maxVel = Math.pow(this.diam2, 1.1);
            this.maxXVel = Math.pow(this.diameter, 2);
        }
      
        move() {
            this.x += this.dx * 0.05;
            this.dx += wind;
            this.dx = sketch.constrain(this.dx, -this.maxXVel, this.maxXVel);
            this.y += this.dy;
            this.dy += this.ay;
            if(this.dy > this.maxVel) this.dy = this.maxVel;
            if(this.y  > height){
                this.reset();
            } else if (this.x > width) {
                this.x = -this.diameter;
            } else if(this.x < -this.diameter) {
                this.x = width;
            }
        }
      
        display() {
            sketch.circle(this.x, this.y, this.diam2+3);
        }
    
        reset(){
            this.x = Math.random()*width;
            this.y = -this.diameter;
            this.dy = this.diam2*0.1;
            this.dx = this.diameter;
        }
      }
}


