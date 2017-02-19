//Julia Mueller  jm3048@bard.edu  20 Feb 2017  
//I tried to incorporate some randomized aspects into my interactive avatar that didn't work as well as I'd hoped. It still turned out okay. Now my avatar has a lot more personality. The dynamic aspect of coding was interesting but also extremely frustrating becuase I feel like it didn't work for me most of the time. I wish I was better a debugging the code.

function setup() {
    createCanvas(500, 500);
   
    
}

function draw() { 
    background(200);
    
    fill(12, 12, 12);
    
    //neck
    fill(150);
    rect(241, 220, 18, 15);
    
    //head
    fill(150);
    strokeWeight(1);
    ellipse(250, 200, 50);
    fill(300);
    ellipse(240, 195, 12);
    ellipse(260, 195, 12);
    fill(12, 12, 12);
    ellipse(240, 195, 5);
    ellipse(260, 195, 5);
    line(259, 210, 240, 210);
    
    //hat
    fill(170, 41, 8);
    triangle(227, 185, 273, 185, 253, 160);
    
    //body 
    fill(158, 230, 237);
    rect(226, 230, 50, 50);
    
    //text
    fill(180, 0 , 0);
    text("click!", 240, 255);
    

       
    //arms
    //left arm
    line(190, 250, 225, 250);
    //right arm
    line(313, 250, 277, 250);
     
    //legs
    //left leg
    line(240, 340, 240, 280);
    //right leg
    line(263, 340, 263, 280);
    
    //legs and arms changed
    if (mouseIsPressed == true){
        background(237, 83, 121);
        fill(0, 0, 255);
        ellipse(random(0, width), 200, 25, 25);
        fill(50, 200, 0);
        ellipse(random (0, width), 100, 25, 25);
        fill(255);
        ellipse(random (0, width), 300, 25, 25);
        
        
        //left arm
        line(190, 210, 225, 250);
        //right arm 
        line(313, 210, 277, 250);
        //neck
        fill(150);
        rect(241, 220, 18, 15);
    
    //head
    fill(150);
    strokeWeight(1);
    ellipse(250, 200, 50);
    fill(300);
    ellipse(240, 195, 12);
    ellipse(260, 195, 12);
    fill(12, 12, 12);
    ellipse(240, 195, 5);
    ellipse(260, 195, 5);
    line(259, 210, 240, 210);
    
    //hat
    fill(170, 41, 8);
    triangle(227, 185, 273, 185, 253, 160);
    
    //body 
    fill(158, 230, 237);
    rect(226, 230, 50, 50);
        
    //left leg top half
    line(230, 315, 240, 280);
        //left leg bottom half 
        line(240, 340, 230, 315);
    //right leg
    line(273, 315, 263, 280);
        //right leg bottom half
        line(265, 340, 273, 315);
        
        
        
         
    }
   
   
}
