const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope, rope1,rope2;
var ground;
var fruit,fruit_con,button

var bg_img,food,rabbit_img,rabbit


function preload(){
 bg_img=loadImage ("background.png") 
 food=loadImage ("melon.png")
 rabbit_img=loadImage ("Rabbit-01.png")
}



function setup() {
  createCanvas(500, 700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200, 680, 600, 20);


  var fruit_options = {
    density: 0.001
  }
  fruit = Bodies.circle(300, 300, 15, fruit_options)

  rope = new Rope(6, { x: 245, y: 30 })
  Matter.Composite.add(rope.body,fruit)

  // rope1=new Rope (6,{x:432,y:46})
  // Matter.Composite.add(rope1.body,fruit)

  // rope2=new Rope(6,{x:112,y:20})
  // Matter.Composite.add(rope2.body,fruit)

  fruit_con=new Link(rope,fruit)
//   fruit_con=new Link(rope1,fruit)
//  fruit_con=new Link(rope2,fruit)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  imageMode(CENTER)


  rabbit=createSprite (250,650,20,100)
 rabbit.addImage(rabbit_img)
 rabbit.scale=0.3

 button = createImg('cut_button.png')
 button.position(220,30)
 button.size(50,50)
 button.mouseClicked(drop)

}

function draw() {
  background(51);
  image(bg_img,width/2,height/2,500,700)
  ground.show();

  Engine.update(engine);
  rope.show()
  // rope1.show()
  // rope2.show()
  image(food,fruit.position.x, fruit.position.y, 60, 60)

drawSprites()

}

function drop(){
  rope.break()
  fruit_con.detach()
  fruit_con=null
}
