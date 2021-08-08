
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var radius = 40
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(width/2,670,width,20)
	leftB = new Ground(1100,600,20,120)
	rightB = new Ground(1350,600,20,120)
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(260,100,radius/2,options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
	ground1.display()
	leftB.display()
	rightB.display()
	ellipseMode(CENTER)
	fill ("blue")
	ellipse(ball.position.x,ball.position.y,radius,radius)
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



