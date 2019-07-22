export default function( sketch ) {
    const math = require('mathjs')

    var width = 0;
    var height = 0;
    var n = 200, xMin = -10, xMax = 10, yMin = -10, yMax = 10;
    var expr = '', 
    defaultExpr = '8*sin(cos(x)cos(x))-4';
    var scope = { x: 0, t: 0 }, compiled;
    var tree, time=0, timeInc = 0.1;

    sketch.setup = function() {
        let clientw = document.getElementById('sketch').clientWidth;
        let clienth = document.getElementById('sketch').clientHeight;
        width = clientw;
        height = clienth;
        sketch.createCanvas(width, height);       
        setExpr(defaultExpr);
        sketch.noFill();
        document.getElementById('expression').value = defaultExpr;
        document.getElementById('samplerate').value = n;
    }

    sketch.draw = function() {
        // sketch.background(255);
        sketch.background(59, 12, 33, 210);
        //axis
        sketch.strokeWeight(1);
        sketch.stroke(251, 182, 206);
        let xRatio = Math.abs(xMin)/Math.abs(xMax);
        let yRatio = Math.abs(yMin)/Math.abs(yMax);
        console.log(xRatio);
        sketch.line(xRatio*width/2, 0, xRatio*width/2, height);
        sketch.line(0, yRatio*height/2, width, yRatio*height/2);
        sketch.strokeWeight(2);
        sketch.stroke(214, 156, 193);
        render();
        sketch.noLoop();
    }

    function setExpr(str){
        expr = str;
        tree = math.parse(expr, scope);
        compiled = tree.compile();
        sketch.loop();
    }

    function updateRange(){
        sketch.loop();
    }

    function render(){
        time+=timeInc;
        drawCurve();
    }

    function drawCurve(){
        var mathX, mathY, pixelX, pixelY;
        sketch.beginShape(); 
        for (var i = 0; i < n; i++) {
            mathX = sketch.map(i, 0, n-1, xMin, xMax);
            mathY = -1*evaluateMathExpr(mathX);
            pixelX = sketch.map(mathX, xMin, xMax, 0, 1) * width;
            pixelY = sketch.map(mathY, yMin, yMax, 0, 1) * height;
            sketch.vertex(pixelX, pixelY); 
        }
        sketch.endShape();
    }

    function evaluateMathExpr(newX){
        scope.x = newX;
        scope.t = time;
        return compiled.eval(scope);
    }

    sketch.windowResized = function() {
        width = document.getElementById('sketch').clientWidth;
        height = document.getElementById('sketch').clientHeight;
        sketch.resizeCanvas(width, height);
    }

    document.getElementById('expression').addEventListener("keyup", function(){
        setExpr(this.value);
    });

    document.getElementById('xMin').addEventListener("keyup", function(){
        xMin = parseFloat(this.value);
        updateRange();
    });

    document.getElementById('xMax').addEventListener("keyup", function(){
        xMax = parseFloat(this.value);
        updateRange();
    });

    document.getElementById('yMin').addEventListener("keyup", function(){
        yMin = parseFloat(this.value);
        updateRange();
    });

    document.getElementById('yMax').addEventListener("keyup", function(){
        yMax = parseFloat(this.value);
        updateRange();
    });

    document.getElementById('samplerate').addEventListener("keyup", function(){
        n = Math.abs(Math.round(parseFloat(this.value)));
        updateRange();
    });
}


