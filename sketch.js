const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,plane;
var stone,iron;
var min1,min2,min3,min4,min5,min6,min7,min8,min9,min10;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
  
    stone = new Stone(550,320,100,100);
    iron = new Iron(300,350);
    
    min1 = new Mineral(350,520,10);
    min2 = new Mineral(355,520,10);
    min3 = new Mineral(625,520,10);
    min4 = new Mineral(627,520,10);
    min5 = new Mineral(630,520,10);
    min6 = new Mineral(633,510,10);
    min7 = new Mineral(635,500,10);
    min8 = new Mineral(637,500,10);
    min9 = new Mineral(639,500,10);
    min10 = new Mineral(641,500,10);
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    min1.display();
    min2.display();
    min3.display();
    min4.display();
    min5.display();
    min6.display();
    min7.display();
    min8.display();
    min9.display();
    min10.display();

}