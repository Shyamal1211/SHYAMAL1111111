
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground,left,right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,
}

ball=Matter.Bodies.circle(150,100,20,ball_options)
World.add(world,ball)


ground=new Ground(700,570,10,150);
left=new Ground(190,650,1250,15);
right=new Ground(500,570,10,150);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  ellipseMode(RADIUS);
background(0);
ellipse(ball.position.x,ball.position.y,20)

  ground.display();
  left.display();
  right.display();
Engine.update(engine);


  drawSprites();
 }

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:40,y:0});
		Matter.Body.applyForce(ball,{x:0,y:-40},{x:0,y:0});
	}
	}

