const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2 , box3 , box4 , box5;
var ground1;
var pig1 , pig2;
var log1 , log2 , log3 , log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig1 = new pig (810,350);
    pig2 = new pig (810,220);
    log1 = new log (810,260,300,PI/2);
    log2 = new log (810,180,300,PI/2);
    log4 = new log (760,120,150,PI/7);
    log5 = new log (870,120,150,-PI/7);
    bird1 = new bird (60,60);



    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box1 = new Box(700,320,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(800,150,70,70);

    ground1 = new ground(600,390,1200,10);
  
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    log1.display();
    log2.display();
    box3.display();
    box4.display();
    pig2.display();
    box5.display();
    log4.display();
    log5.display();
    bird1.display();

}