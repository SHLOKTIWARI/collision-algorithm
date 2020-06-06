var fixedrectangle,movingrectangle;
function setup() {
  createCanvas(800,400);
  movingrectangle=createSprite(400, 200, 50, 50);
  movingrectangle.shapeColor="white";
  fixedrectangle=createSprite(300,300,80,50) ;
  fixedrectangle.shapeColor="white";
}

function draw() {
  background(0);
  movingrectangle.x=World.mouseX
  movingrectangle.y=World.mouseY  
  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.widt/2&&
    fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2&&
    fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2)
    {movingrectangle.shapeColor="blue"
    fixedrectangle.shapeColor="blue"
  }

    else{
      movingrectangle.shapeColor="white"
      fixedrectangle.shapecolor="white"
    }

    
  drawSprites();
}