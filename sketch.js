
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,ground2;
var paper;
var Rdustbin,Bdustbin,Ldustbin,Rdustbin,Bdustbin;
var dustbin;
var bg,bgImg;

function preload()
{
	
 bgImg=loadImage("greenbg.png");

}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

  
  
  
	//Create the Bodies Here.
	paper = new Paper (100,250,10,10);
 


   Bdustbin =new Dustbin (650,430,20,200);
  
  	ground = new Ground (400,470,800,80);
	ground2 = new Ground (40,150,20,1000); 
    
   
  
     Rdustbin = new Dustbin2 (660,400,1,120);
   Ldustbin = new Dustbin2 (600,400,1,120);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // background(rgb(242, 128, 210));
   background("lightblue");
  ground2.display();
  
 bg = createSprite(300,350);
  bg.addImage(bgImg);
  bg.scale=7;
  bg.depth=-3;
  Engine.update(engine);
  drawSprites();

paper.display();

  Rdustbin.display();
  Ldustbin.display();
  Bdustbin.display();
  ground.display();
  

  


}


function keyPressed(){

	if(keyCode=== UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}

}