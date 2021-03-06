const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21,b22,b23,b24,b25;
var polygon,slingshot;


function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0,690,1600,10);
    stand1 = new Ground(750,180,230,10);
    stand2 = new Ground(520,300,170,10);

    b1 = new Box(660,150,30,40);
    b2 = new Box(690,150,30,40);
    b3 = new Box(720,150,30,40);
    b4 = new Box(750,150,30,40);
    b5 = new Box(780,150,30,40);
    b6 = new Box(810,150,30,40);
    b7 = new Box(840,150,30,40);

    fill("red");
    b8 = new Box(690,110,30,40);
    b9 = new Box(720,110,30,40);
    b10 = new Box(750,110,30,40);
    b11 = new Box(780,110,30,40);
    b12 = new Box(810,110,30,40);

    fill("yellow");
    b13 = new Box(720,70,30,40);
    b14 = new Box(750,70,30,40);
    b15 = new Box(780,70,30,40);

    fill("green")
    b16 = new Box(750,30,30,40);

    fill("red");
    b17 = new Box(460,270,30,40);
    b18 = new Box(490,270,30,40);
    b19 = new Box(520,270,30,40);
    b20 = new Box(550,270,30,40);
    b21 = new Box(580,270,30,40);

    fill("yellow");
    b22 = new Box(490,230,30,40);
    b23 = new Box(520,230,30,40);
    b24 = new Box(550,230,30,40);

    fill("green");
    b25 = new Box(520,190,30,40);

    polygon = new Polygon(50,200,50);

    slingshot = new SlingShot(polygon.body,{x:130,y:200});

}

function draw(){
    background(255,144,84);
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    polygon.display();
    slingshot.display();

    polygon.debug = true;
}

function mouseDragged(){

 
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }


function mouseReleased(){
    slingshot.fly();
   
    
}

function keyPressed(){
    if(keyCode === 32){
      slingshot.attach(polygon.body);
    }
}