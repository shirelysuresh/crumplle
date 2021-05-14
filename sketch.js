const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;

function preload()
{
	
}

function setup() {
	
createCanvas(1800, 700);
	

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(900,690,1800,10)
    dustbin1=new Ground(1100,660,20,200)
	dustbin2=new Ground(880,650,20,200)
	 paper = new Paper(350,110,40,50)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();


  drawSprites();

  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.posiiton,{x:85,y:-85});
  
	}
}


