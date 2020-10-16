
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	
	
	paperObject=new Paper(200,200,40);
	groundObject=new Ground(width/2,390,width,20);
	dustbinObj=new Dustbin(600,300);
	Engine.run(engine);
  
}


function draw() {
 
  background("skyblue");
   rectMode(CENTER);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-60});
    
	}
}


