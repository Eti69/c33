const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var engine,world;

var x,xImage;
var bgImage;

var array=[];
var maxDrops=100;

function preload(){
xImage=loadImage("snow1.jpg");
}



function setup() {

  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

}

function draw() {
  background(xImage); 
  Engine.update(engine);
  drawSprites();
  
  if(frameCount%60===0){
    array.push(new Snow(random(0,400),random(0,400)))
    }
    
    for(var i=0;i<array.length;i++){
    array[i].display();
  }

}