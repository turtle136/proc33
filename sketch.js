const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundImg;
var snow = [];

function preload() {
  getBackgroundImg();
}

function setup(){
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}



function draw() {
  if(backgroundImg){
        background(backgroundImg);
   };

    Engine.update(engine);



    if(frameCount%20===0){
      snow.push(new snowFlake(random(1,800),10));
    }
    for (var i = 0; i < snow.length; i++) {
      snow[i].display();
    }


  drawSprites();
}


async function getBackgroundImg(){

     var response= await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
      
     var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);


      if(hour>=01 && hour<=08){
          bg = "snow1.jpg"
      }
      else if(hour>=08&&hour<=16){
         bg="snow3.jpg"
      }
      else if(hour>=16&&hour<=24){
        bg="snow2.jpg"
     }

  //load the image in backgroundImg variable here
  backgroundImg = loadImage(bg);
  
}