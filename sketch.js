const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(200,700,160);
  rope = new Rope(hero.body, { x: 200, y: 50 });
  monster = new Monster(1100,400,200);

  box1 = new Box(600, 100, 50, 50);
  box2 = new Box(900, 100, 50, 50);
  box3 = new Box(900, 100, 50, 50);
  box4 = new Box(900, 100, 50, 50);
  box5 = new Box(600, 120, 50, 50);
  box6 = new Box(600, 140, 50, 50);
  box7 = new Box(600, 100, 50, 50);
  box8 = new Box(600, 90, 50, 50);
  box9 = new Box(900, 100, 50, 50);
  box10 = new Box(900, 100, 50, 50);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  hero.display();
  
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}