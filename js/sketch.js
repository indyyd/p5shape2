function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
}

function draw() {
    background(220);

//sweet wrapper L    
    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(35, 20);
    vertex(65, 50);
    vertex(35, 80);
    endShape();

    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(35, 30);
    vertex(65, 50);
    vertex(35, 70);
    endShape();

    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(35, 40);
    vertex(65, 50);
    vertex(35, 60);
    endShape();

    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(35, 50);
    vertex(65, 50);
    vertex(35, 50);
    endShape();

    //sweet wrapper R
    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(175, 20);
    vertex(145, 50);
    vertex(175, 80);
    endShape();

    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(175, 30);
    vertex(145, 50);
    vertex(175, 70);
    endShape();

    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(175, 40);
    vertex(145, 50);
    vertex(175, 60);
    endShape();

    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(175, 50);
    vertex(145, 50);
    vertex(175, 50);
    endShape();

    //body
    fill(255, 255, 255);
    ellipse(105, 50, 110, 55);
}