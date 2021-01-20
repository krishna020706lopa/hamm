const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,sand;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    hammer = new Hammer(200,200,80,30);
    ground = new Ground(200,400,400,20);
    rubber = new Rubber(300,30,3);
    sand = new Sand(100,200,1);
}

function draw(){
    background(0);
    hammer.display();
    rubber.display();
    sand.display();
    Engine.update(engine);
    ground.display();
}