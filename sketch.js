
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
var engine, world;
var box1, box2, box3, box4;
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
	box3=new Box(700, 240, 70, 70);
    box4=new Box(920, 240, 70, 70);
	ground = new Ground(600,height,1200,20);
}


function draw(){

    background("light blue");
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
	box3.display();
    box4.display();
    ground.display();

}






