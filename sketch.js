const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bird;
var box1;
var box2;
var box3;
var box4;
var box5;
var SCAM1;
var SCAM2;
var SCAM3;
var SCAM4;
var pig1;
var pig2;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50);
    box3 = new Box(700,240,50,50);
    box4 = new Box(920,240,50,50);
    box5 = new Box(810,160,50,50);
    SCAM1 = new scamLog(100,300,100,20, PI/2);
    SCAM2 = new scamLog(810,180,100,20,PI/2);
    SCAM3 = new scamLog(760,120,150,20,PI/7);
    SCAM4 = new scamLog(870,120,150,20,-PI/7);
    pig1 = new Pig(200,200,50,50);
    pig2 = new Pig(810,220,50,50);
    ground = new Ground(600,height,width,20);
    bird = new Bird(100,100,25,25);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();     
    box4.display();
    box5.display();
    SCAM1.display();
    SCAM2.display();
    SCAM3.display();
    SCAM4.display();
    bird.display();
    ground.display();
    pig1.display();
    pig2.display();
    text(mouseX + ","+mouseY,mouseX,mouseY); 
}