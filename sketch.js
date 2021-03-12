var m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12;

function preload()
{
  mazeImg = loadImage("Maze.jfif");
  trophyImg = loadImage("troph.png");
  ywImg = loadImage("yw.jfif");
}
function setup() {
  createCanvas(1280,610);

  bluro = createSprite(70,70,10,10);
  bluro.shapeColor ="black";

  bd1 = createSprite(635,30,1240,30);
  bd1.shapeColor ="green";
  bd2 = createSprite(635,570,1240,30);
  bd2.shapeColor ="green";
  bd3 = createSprite(30,305,30,560);
  bd3.shapeColor ="green";
  bd4 = createSprite(1240,305,30,560);
  bd4.shapeColor ="green";

  m1 = createSprite(665,420,380,20);
  m1.shapeColor ="green";
  m2 = createSprite(115,100,20,60);
  m2.shapeColor ="green";
  m3 = createSprite(150,120,80,20);
  m3.shapeColor ="green";
  m4 = createSprite(200,120,20,95);
  m4.shapeColor ="green";
  m5 = createSprite(240,170,100,20);
  m5.shapeColor ="green";
  m6 = createSprite(275,100,20,60);
  m6.shapeColor ="green";
  m7 = createSprite(340,230,20,320);
  m7.shapeColor ="green";
  m8 = createSprite(270,80,160,20);
  m8.shapeColor ="green";
  m9 = createSprite(380,120,80,20);
  m9.shapeColor ="green";
  m10 = createSprite(410,120,20,95);
  m10.shapeColor ="green";
  m11 = createSprite(80,170,90,20);
  m11.shapeColor ="green";
  m12 = createSprite(115,200,20,40);
  m12.shapeColor ="green";
  m13 = createSprite(160,210,110,20);
  m13.shapeColor ="green";
  m14 = createSprite(130,260,170,20);
  m14.shapeColor ="green";
  m15 = createSprite(205,290,20,40);
  m15.shapeColor ="green";
  m16 = createSprite(80,300,90,20);
  m16.shapeColor ="green";
  m17 = createSprite(115,350,20,80);
  m17.shapeColor ="green";
  m18 = createSprite(170,340,90,20);
  m18.shapeColor ="green";
  m19 = createSprite(415,320,20,60);
  m19.shapeColor ="green";
  m20 = createSprite(380,255,90,20);
  m20.shapeColor ="green";
  m21 = createSprite(415,225,20,60);
  m21.shapeColor ="green";
  m22 = createSprite(380,340,90,20);
  m22.shapeColor ="green";
  m23 = createSprite(415,400,20,50);
  m23.shapeColor ="green";
  m24 = createSprite(280,315,20,220);
  m24.shapeColor ="green";
  m25 = createSprite(265,420,320,20);
  m25.shapeColor ="green";
  m26 = createSprite(480,110,20,130);
  m26.shapeColor ="green";
  m27 = createSprite(230,470,260,20);
  m27.shapeColor ="green";
  m28 = createSprite(190,520,180,20);
  m28.shapeColor ="green";
  m29 = createSprite(110,490,20,60);
  m29.shapeColor ="green";
  m30 = createSprite(350,490,20,60);
  m30.shapeColor ="green";
  m31 = createSprite(525,520,240,20);
  m31.shapeColor ="green";
  m32 = createSprite(415,490,20,60);
  m32.shapeColor ="green";
  m33 = createSprite(480,490,20,60);
  m33.shapeColor ="green";
  m34 = createSprite(520,470,90,20);
  m34.shapeColor ="green";
  m35 = createSprite(560,140,20,140);
  m35.shapeColor ="green";
  m36 = createSprite(600,170,100,20);
  m36.shapeColor ="green";
  m37 = createSprite(670,80,220,20);
  m37.shapeColor ="green";
  m38 = createSprite(705,190,20,140);
  m38.shapeColor ="green";
  m39 = createSprite(770,105,20,60);
  m39.shapeColor ="green";
  m40 = createSprite(485,240,20,50);
  m40.shapeColor ="green";
  m41 = createSprite(635,255,20,100);
  m41.shapeColor ="green";
  m42 = createSprite(565,320,20,60);
  m42.shapeColor ="green";
  m43 = createSprite(560,255,160,20);
  m43.shapeColor ="green";
  m44 = createSprite(560,300,170,20);
  m44.shapeColor ="green";
  m45 = createSprite(560,380,170,20);
  m45.shapeColor ="green";
  m46 = createSprite(635,430,20,90);
  m46.shapeColor ="green";
  m47 = createSprite(520,340,90,20);
  m47.shapeColor ="green";
  m48 = createSprite(485,360,20,40);
  m48.shapeColor ="green";
  m49 = createSprite(845,190,20,140);
  m49.shapeColor ="green";
  m50 = createSprite(775,170,150,20);
  m50.shapeColor ="green";
  m51 = createSprite(750,210,100,20);
  m51.shapeColor ="green";
  m52 = createSprite(1000,80,320,20);
  m52.shapeColor ="green";
  m53 = createSprite(1065,125,340,20);
  m53.shapeColor ="green";
  m54 = createSprite(980,170,180,20);
  m54.shapeColor ="green";
  m55 = createSprite(910,275,20,140);
  m55.shapeColor ="green";
  m56 = createSprite(705,510,20,100);
  m56.shapeColor ="green";
  m57 = createSprite(1030,215,240,20);
  m57.shapeColor ="green";
  m58 = createSprite(1140,190,20,60);
  m58.shapeColor ="green";
  m59 = createSprite(990,150,20,30);
  m59.shapeColor ="green";
  m60 = createSprite(705,340,20,90);
  m60.shapeColor ="green";
  m61 = createSprite(770,275,20,50);
  m61.shapeColor ="green";
  m62 = createSprite(770,400,20,50);
  m62.shapeColor ="green";
  m63 = createSprite(845,400,20,50);
  m63.shapeColor ="green";
  m64 = createSprite(845,320,20,50);
  m64.shapeColor ="green";
  m65 = createSprite(985,240,20,50);
  m65.shapeColor ="green";
  m66 = createSprite(1135,320,20,50);
  m66.shapeColor ="green";
  m67 = createSprite(1060,280,20,50);
  m67.shapeColor ="green";
  m68 = createSprite(770,305,140,20);
  m68.shapeColor ="green";
  m69 = createSprite(700,340,160,20);
  m69.shapeColor ="green";
  m70 = createSprite(877.5,340,85,20);
  m70.shapeColor ="green";
  m71 = createSprite(1020,305,240,20);
  m71.shapeColor ="green";
  m72 = createSprite(1100,260,100,20);
  m72.shapeColor ="green";
  m73 = createSprite(812.5,520,100,20);
  m73.shapeColor ="green";
  m74 = createSprite(745,470,80,20);
  m74.shapeColor ="green";
  m75 = createSprite(875,470,80,20);
  m75.shapeColor ="green";
  m76 = createSprite(1025,470,90,20);
  m76.shapeColor ="green";
  m77 = createSprite(955,520,100,20);
  m77.shapeColor ="green";
  m78 = createSprite(1100,520,100,20);
  m78.shapeColor ="green";
  m79 = createSprite(955,380,100,20);
  m79.shapeColor ="green";
  m80 = createSprite(955,420,100,20);
  m80.shapeColor ="green";
  m81 = createSprite(1100,420,100,20);
  m81.shapeColor ="green";
  m82 = createSprite(1180,380,100,20);
  m82.shapeColor ="green";
  m83 = createSprite(1025,345,100,20);
  m83.shapeColor ="green";
  m84 = createSprite(1062.5,385,25,90);
  m84.shapeColor ="green";
  m85 = createSprite(1140,420,20,90);
  m85.shapeColor ="green";
  m86 = createSprite(773,500,23,60);
  m86.shapeColor ="green";
  m87 = createSprite(849,500,27,60);
  m87.shapeColor ="green";
  m88 = createSprite(992,450,27,140);
  m88.shapeColor ="green";
  m89 = createSprite(1060,500,20,60);
  m89.shapeColor ="green";
  
  
  m90 = createSprite(1190,485,20,50);
  m90.shapeColor ="yellow";

}


function draw() {
  background("lightblue"); 

if(bluro.isTouching(m1)||bluro.isTouching(m2)||bluro.isTouching(m3)||bluro.isTouching(m4)||bluro.isTouching(m5)||bluro.isTouching(m6)||bluro.isTouching(m7)||bluro.isTouching(m8)||bluro.isTouching(m9)||bluro.isTouching(m10)||bluro.isTouching(m11)||bluro.isTouching(m12)||bluro.isTouching(m13)||bluro.isTouching(m14)||bluro.isTouching(m15)||bluro.isTouching(m16)||bluro.isTouching(m17)||bluro.isTouching(m18)||bluro.isTouching(m19)||bluro.isTouching(m20)||bluro.isTouching(m21)||bluro.isTouching(m22)||bluro.isTouching(m23)||bluro.isTouching(m24)||bluro.isTouching(m25)||bluro.isTouching(m26)||bluro.isTouching(m27)||bluro.isTouching(m28)||bluro.isTouching(m29)||bluro.isTouching(m30)||bluro.isTouching(m31)||bluro.isTouching(m32)||bluro.isTouching(m33)||bluro.isTouching(m34)||bluro.isTouching(m35)||bluro.isTouching(m36)||bluro.isTouching(m37)||bluro.isTouching(m38)||bluro.isTouching(m39)||bluro.isTouching(m40)||bluro.isTouching(m41)||bluro.isTouching(m42)||bluro.isTouching(m43)||bluro.isTouching(m44)||bluro.isTouching(m45)){
   bluro.x = 80;
   bluro.y = 60;
}

if(bluro.isTouching(m46)||bluro.isTouching(m47)||bluro.isTouching(m48)||bluro.isTouching(m49)||bluro.isTouching(m50)||bluro.isTouching(m51)||bluro.isTouching(m52)||bluro.isTouching(m53)||bluro.isTouching(m54)||bluro.isTouching(m55)||bluro.isTouching(m56)||bluro.isTouching(m57)||bluro.isTouching(m58)||bluro.isTouching(m59)||bluro.isTouching(m60)||bluro.isTouching(m61)||bluro.isTouching(m62)||bluro.isTouching(m63)||bluro.isTouching(m64)||bluro.isTouching(m65)||bluro.isTouching(m66)||bluro.isTouching(m67)||bluro.isTouching(m68)||bluro.isTouching(m69)||bluro.isTouching(m70)||bluro.isTouching(m71)||bluro.isTouching(m72)||bluro.isTouching(m73)||bluro.isTouching(m74)||bluro.isTouching(m75)||bluro.isTouching(m76)||bluro.isTouching(m77)||bluro.isTouching(m78)||bluro.isTouching(m79)||bluro.isTouching(m80)||bluro.isTouching(m81)||bluro.isTouching(m82)||bluro.isTouching(m83)||bluro.isTouching(m84)||bluro.isTouching(m85)||bluro.isTouching(m86)||bluro.isTouching(m87)||bluro.isTouching(m88)||bluro.isTouching(m89)){
  bluro.x = 80;
  bluro.y = 60;
}

if(bluro.isTouching(m90)){

  //Miss when I use the image YOU WIN it is coming behind the mazes and not very visible. What can I do?
  //image(ywImg,1,1,1280,610)
  //text("YOU WIN", 640,305);
}
  edges = createEdgeSprites();
  //image(mazeImg, 20,25,1240,600);
  image(trophyImg, 1140,430,100,100);
  drawSprites();
  }

  function keyPressed(){
    if(keyCode===UP_ARROW){
      bluro.y -= 10;
      }

    if(keyCode===DOWN_ARROW){
      bluro.y += 10;
      }

    if(keyCode===RIGHT_ARROW){
      bluro.x += 10;
      }

    if(keyCode===LEFT_ARROW){
      bluro.x -= 10;
      }
  }

