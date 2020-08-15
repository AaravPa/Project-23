var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
var boxSprite1,boxSprite2,boxSprite3;
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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 World.add(world, ground);

	//Create a Box
	 boxSprite1 = createSprite(290,610,20,100);
	 boxSprite2 = createSprite(400,650,200,20);
	 boxSprite3 = createSprite(510,610,20,100);
	 boxSprite1.shapeColor = "red";
	 boxSprite2.shapeColor = "red";
	 boxSprite3.shapeColor = "red";
	fill(255);
	box1 = Bodies.rectangle(300, 590, 20, 100, {isStatic : true});
	box2 = Bodies.rectangle(400, 630, 200, 20, {isStatic : true});
	box3 = Bodies.rectangle(500, 590, 20, 100, {isStatic : true});
	World.add(world, box1);
	World.add(world, box2);
	World.add(world, box3);
    
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  boxSprite2.x = box2.position.x
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic(packageBody, false);
  }
}



