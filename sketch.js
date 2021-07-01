var bottom,left,right
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
var ball_option={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	
}
ball=Bodies.circle(260,100,50,ball_option)

	engine = Engine.create();
	world = engine.world;
World.add(world,ball)
	//Create the Bodies Here.
	bottom=new Ground(width/2,670,width,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipse(ball.position.x,ball.position.y,40)
bottom.display()
 
}



