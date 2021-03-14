const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var rand;

var maxDrops = 100;
function preload(){
    
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(400,700);


   //creating rain drops.
   if(frameCount % 150 === 0 ){
       drops.push(new createDrop(random(0,400), random(0,400)));

   }
    
}

function draw(){
    Engine.update(engine);
    background(0);



    //displaying rain drops.
    for(var i=0; i<maxDrops;i++){
        
        drops[i].display();
        drops[i].update();
      }
    


    drawSprites();

              

}   


