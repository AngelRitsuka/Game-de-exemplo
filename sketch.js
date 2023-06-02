var boneco ;
//imagemboneco;
var obs;

var chao;
 





function preload()
{
  //imagemboneco = loadAnimation("andando.gif");

 // ob = loadImage("ob.png");

bk = loadImage("giphy.gif");

}









function setup() 
{
 
createCanvas(500,500);
boneco = createSprite(35, 475,20,50);
boneco.shapeColor = rgb(0,0,0);
  //apenas cooque uma corzinha para diferenciar e tu editar o arquivo diconando a imagem.
//boneco.addAnimation("andando", imagemboneco);
//boneco.scale = 0.8;

chao = createSprite(250,495,500,20);
chao.shapeColor = rgb(77,117,69);

}


function draw() 
{
    background(bk);
    

    drawSprites();
    obstaculos();



}


function obstaculos()
{
    if(frameCount %60 === 0)
    {
        var obs = createSprite(495,475,20,20);
       // obs.addImage(ob); //nome do sprite. add(nome da imagem)
        obs.velocityX = -7;
        obs.lifetime = 75; //largura divido pela velocidade x
        obs.shapeColor = rgb(85,79,72);

    }
}






