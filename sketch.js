const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() 
{
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  Ground = new ground(240,790,480,20);

  for(var k = 0; k<= width; k = k+80)
  {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var l = 40; l <= width; l = l+50)
  {
    plinkos.push(new plinko(l,75))
  }

  for(var m = 15; m<= width-10; m = m+50)
  {
    plinkos.push(new plinko(l,75))
  }

  for(var l = 40; l <= width; l = l+50)
  {
    plinkos.push(new plinko(l,75))
  }

  for(var m = 15; m<= width-10; m = m+50)
  {
    plinkos.push(new plinko(l,75))
  }
}

function draw() 
{
  background(0);  
  Engine.update(engine); 

  if(frameCount%60===0)
  {
    particles.push(new particle(random(width/2 - 10,width/2 + 10),10))
  }

  Ground.display();

  for(var a=0;a<particles.length;a=a++)
  {
    particles[a].display()
  }

  for(var b = 0;a<divisions.length;b=b++)
  {
    divisions[b].display();
  }

  for(var c = 0;c<plinkos.length;c=c++)
  {
    plinkos[c].display();
  }
}