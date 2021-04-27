var starImg,bgImg;
var star, starBody;
var fairyImg,fairyVoice;
var fairy;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg=loadImage("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);


	//create fairy sprite and add animation for fairy
fairy=createSprite(74,340);
fairy.velocityX=0;
fairy.addImage(fairyImg);
fairy.scale=0.1;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.01;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

 

if (keyDown("LEFT_ARROW")){
	fairy.velocityX=-1
	}
if (keyDown("RIGHT_ARROW")){
	fairy.velocityX=1
}

fairy.velocityX=0;

star.x= starBody.position.x 
star.y= starBody.position.y 
  if( starBody.position.y>470 ) {
  Body.setStatic(starBody,true)

  drawSprites();

  //keyPressed();



}
}

function keyPressed() {
	if ( keyCode ==(RIGHT_ARROW) ){
		fairy.velocityX = 21
	}
if( keyCode== (LEFT_ARROW)){
			fairy.velocityX = -20
		}
			if( keyCode == DOWN_ARROW ) {
				Body.setStatic(starBody, false);
				
	  
}
}




	

