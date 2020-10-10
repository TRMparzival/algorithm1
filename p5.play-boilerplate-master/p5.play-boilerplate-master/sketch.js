var movingrect, stillrect;
function setup() {
  createCanvas(800,800);
  movingrect=createSprite(400, 200, 50, 100);
stillrect=createSprite(350,150,100,50);
movingrect.debug=true;
movingrect.shapeColor="red"
stillrect.debug=true;
stillrect.shapeColor="green"

}

function draw() {
  background("black");  
  movingrect.x=mouseX
  movingrect.y=mouseY
  console.log(movingrect.x-stillrect.x);
  if (movingrect.x-stillrect.x < movingrect.width/2+stillrect.width/2 &&
   movingrect.y-stillrect.y < movingrect.height/2+stillrect.height/2 &&
   stillrect.x-movingrect.x<movingrect.width/2+stillrect.width/2&&
   stillrect.y-movingrect.y<movingrect.height/2+stillrect.height/2)
  {
stillrect.shapeColor="grey";
  }
  else
  {
    stillrect.shapeColor="green";
  } 
  drawSprites();
}