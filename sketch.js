const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var box1;
var box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    
box1=new Box(200,200,50,50);
box2=new Box(220,200,50,50);

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);
box1.display();
box2.display();
}
