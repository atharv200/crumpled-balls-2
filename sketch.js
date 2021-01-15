const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side0,side1,side2,paperImg
 var bin , binImage

function preload(){
	binImage = loadImage("dustbingreen.png")
}

function setup() {
	 createCanvas(800, 700);
  
	 bin = createSprite(660,570,10,10)
	 bin.addImage(binImage)
	 bin.scale = 0.6
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 400, 25);

	 ground = new Ground(400, 680, 800, 20);

	 
	 side0 = new dustbin(590,560,5,170)
	 side1 = new dustbin(660,660,100,5)
	 side2 = new dustbin(730,560,5,170)

	 


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("grey");

  Engine.update(engine);

  paper.display();

  ground.display();

  side0.display()
  side1.display()
  side2.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110})
	}
}



