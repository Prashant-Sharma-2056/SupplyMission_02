var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1, box2, box3
var box1s, box2s, box3s
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	var Options = {
		isStatic : true
	}

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(width/2.6,610,20,100);
	box1.shapeColor="red";

	box2=createSprite(width/1.6,610,20,100);
	box2.shapeColor="red";

	box3=createSprite(width/2, height-50,200,20);
	box3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	box1s=Bodies.rectangle(width/2.6,610,20,100, Options);
	World.add(world,box1s);

	box2s=Bodies.rectangle(width/1.6, 610, 20,100, Options);
	World.add(world,box2s);

	packageBody = Bodies.circle(width/2 ,200, 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box3s=Bodies.rectangle(width/2,630,200,20, Options);
	 World.add(world,box3s);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();


 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody,false);
	   
	 }
   }



