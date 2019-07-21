export default function( sketch ) {

    var width = 0;
    var height = 0;
    var theta2 = 0.9;
    var initialThickness = 100;
    var initialXLeft, initialXRight;

    sketch.setup = function() {
        width = document.getElementById('sketch2').clientWidth;
        height = document.getElementById('sketch2').clientHeight;
        sketch.createCanvas(width, height);
        sketch.stroke(211, 223, 227);
        makeTrees();
    }

    sketch.windowResized = function() {
        width = document.getElementById('sketch2').clientWidth;
        height = document.getElementById('sketch2').clientHeight;
        sketch.resizeCanvas(width, height);
        setTimeout(() => {
            makeTrees();
        }, 200);
    }

    function makeTrees() {
        initialXLeft = width/9;
        initialXRight = width*8/9;
        new Tree().makeTree(height*.20, initialThickness, initialXLeft, height, initialXLeft, height - (height*.25), 0);
        new Tree().makeTree(height*.15, initialThickness, initialXRight, height, initialXRight, height - (height*.15), 0);
    }

    class Tree{
        constructor(){
            this.branches = [];
            this.numBranches = 7;
        }

        drawBranch(b){
            sketch.push();
            if(b.thickness>1){
                sketch.strokeWeight(Math.floor(b.thickness*0.15));
            }
            else{
                sketch.strokeWeight(1);
            }
            sketch.translate(b.x1, b.y1);
            sketch.line(0,0,b.x2-b.x1, b.y2-b.y1);
            sketch.pop();
        }

        makeTree(length, thickness, x, y, x2, y2, num){
            if(num == 0) {
                let b = {
                    'x1': x,
                    'y1': y,
                    'x2': x2,
                    'y2': y2,
                    'length': length,
                    'thickness': thickness
                }
                y = y2;
                this.drawBranch(b);
            }
            theta2+=sketch.random()*.01;
            let oldLen = length;
            x2 = x - (length * sketch.cos(theta2) * sketch.random());
            var xb = x + (length * sketch.cos(theta2) * sketch.random());
            y2 = y - length;
            let lengthScalar = 0.55;
            var length2=length * (sketch.random()+0.5)*lengthScalar;
            length*= (sketch.random()+0.5)*lengthScalar;
            
            thickness = Math.pow(thickness, 0.90);
            
            if(num < this.numBranches){
                num++;
                this.makeTree(length,thickness, x2, y2, x2 - (length * sketch.cos(theta2)), y2 - length, num);
                this.makeTree(length2,thickness, xb, y2, xb + (length2 * sketch.cos(theta2)), y2 - length2, num);
                this.drawBranch({
                    'x1': x,
                    'y1': y,
                    'x2': x2,
                    'y2': y2,
                    'length': length,
                    'thickness': thickness
                });
                this.drawBranch({
                    'x1': x,
                    'y1': y,
                    'x2': xb,
                    'y2': y2,
                    'length': length2,
                    'thickness': thickness
                });

                if(Math.random() > 0.2){
                    num++;
                    xb = x + (oldLen * sketch.cos(theta2) * sketch.random());
                    y2 = y - (oldLen);
                    length*= (sketch.random()+0.5)*(0.2);
                    this.drawBranch({
                        'x1': x,
                        'y1': y,
                        'x2': xb,
                        'y2': y2,
                        'length': length,
                        'thickness': thickness
                    });
                    this.makeTree(length,thickness, xb, y2, xb + (length * sketch.cos(theta2)), y2 - length, num);
                }
            }
        }
    }
}


