function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480,);
    tint(tint_color);
}

function take_snapshot() {
    save('color_filter_image.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}


function draw() {
 
      fill(255, 0, 0);
      stroke(2, 500, 90);
      circle(30, 10, 100);

      fill(255, 0, 0);
      stroke(2, 500, 90);
      circle(640, 10, 100);

      fill(255, 0, 0);
      stroke(2, 500, 90);
      circle(25, 500, 100);

      fill(255, 0, 0);
      stroke(2, 500, 90);
      circle(630, 500, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(-10, 60, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(-10, 140, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(-10, 220, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(-10, 290, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(-10, 350, 100);



      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(80, 350, 100);

      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(160, 350, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(240, 350, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(320, 350, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(400, 350, 100);



      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(480,350, 100);

      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(560, 350, 100);

      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(560, 250, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(560, 150, 100);



      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(560, 60, 100);



      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(460, 60, 100);

      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(360, 60, 100);



      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(260, 60, 100);



      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(160, 60, 100);



      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(60, 60, 100);


      fill(10, 0, 0);
      stroke(2, 500, 900);
      rect(0, 60, 100);
    }