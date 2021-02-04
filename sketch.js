var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var box1,box2,box3;box3Invisi;

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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	var options = {
		isStatic: true,
	  };
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 ground = Bodies.rectangle(width / 2, 650, width, 10, options);
	 World.add(world, ground);
   
	 box1 = createSprite(300, 610, 20, 100);
	 box1.shapeColor = color("red");
   
	
	 box2 = createSprite(400, 650, 200, 20);
	 box2.shapeColor = color("red");
   
   
	 box3 = createSprite(500, 610, 20, 100);
	 box3.shapeColor = color("red");
	 box3Invisi = Bodies.rectangle(400, 630, 200, 20, options);
	 World.add(world, box3Invisi);
   
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    Matter.Body.setStatic( packageBody , false);
  }
}



