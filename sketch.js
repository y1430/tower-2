const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand1,stand2;
var holder,ball,slingshot,ploygonIMG;

function preload () {
ploygonIMG=loadImage("Hexagon.png");
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
//Engine.run(engine);

ground=new Ground();
 stand1=new Stand(390,300,250,10);
stand2=new Stand(700,200,200,10);

//set one
//level one
block1=new Block(300,275,30,40);
block2=new Block(330,275,30,40);
block3=new Block(360,275,30,40);
block4=new Block(390,275,30,40);
block5=new Block(420,275,30,40);
block6=new Block(450,275,30,40);
block7=new Block(480,275,30,40);
//level two
block8=new Block(330,235,30,40);
block9=new Block(360,235,30,40);
block10=new Block(390,235,30,40);
block11=new Block(420,235,30,40);
block12=new Block(450,235,30,40);
//level three
block13=new Block(360,195,30,40);
block14=new Block(390,195,30,40);
block15=new Block(420,195,30,40);
//level four
block16=new Block(390,155,30,40);

//set two
//level one
Block1=new Block(640,175,30,40);
Block2=new Block(670,175,30,40);
Block3=new Block(700,175,30,40);
Block4=new Block(730,175,30,40);
Block5=new Block(760,175,30,40);
//level two 
Block6=new Block(670,135,30,40);
Block7=new Block(700,135,30,40);
Block8=new Block(730,135,30,40);
//level three
Block9=new Block(700,95,30,40);

ball=Bodies.circle(50,200,20);
World.add(world,ball);

slingshot=new SlingShot(this.ball,{x:100,y:200});

}

function draw() {
  background("white");  
    Engine.update(engine);

  textSize(20);
  fill("black");
  text("Drag and Release the hexagonal stone to launch it towards the blocks",200,30);

  fill("brown");
  stand1.display();
  stand2.display();
  ground.display();
stroke("black");
  strokeWeight(2);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("lightpink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("#F1B8FF");
  block13.display();
  block14.display();
  block15.display();
  fill("#FFF7DF");
  block16.display();
fill("#9FFFB7");
Block1.display();
Block2.display();
Block3.display();
Block4.display();
Block5.display();
fill("#EEFF86");
Block6.display();
Block7.display();
Block8.display();
fill("#FFC44F");
Block9.display();
imageMode(CENTER);
image(ploygonIMG,ball.position.x,ball.position.y,400,200);

slingshot.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if (keyCode===32) {
    slingshot.attach(this.ploygonIMG);
  }
}