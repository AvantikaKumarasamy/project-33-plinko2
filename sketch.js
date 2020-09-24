var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var gameState ="play";
var turn =0;

var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("100",20,600);
  text("200",100,600);
  text("100",180,600);
  text("400",260,600);
  text("300",340,600);
  text("500",420,600);
  text("400",500,600);
  text("500",580,600);
  text("300",660,600);
  text("200",740,600);

  
  
  

  Engine.update(engine);


  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
    // particles.push(new particle(random(width/2-30, width/2+30), 10,10));
    // score++;
  // }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

     if(score === 2500){
      gameState = "end";
    }
   }
}

function mousePressed(){
  particle = new Particle(mouseX,10,10,10);
}