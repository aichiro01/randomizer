//Japanese Culture

let image = [];
let captions = [
    'ぐそく (Gusoku)',
    '大小 (Daishō)',
    '太鼓 (Taiko)',
    'マスク (Mask)',
    '小袖 (Kosode)',
    'アーティスト・ステートメント'
];
let ranNum;

let randomIndex;

let img;

function setup() {
  let canvas = createCanvas(windowWidth*0.6, (windowWidth*0.6)*1.25);
  canvas.parent('myCanvas');

  background(img);




  for (i = 0; i <= 5; i++) {
    image[i] = loadImage('assets/' + [i] + '.jpg');
    }
  ranNum= int(random(image.length));
  console.log(image[ranNum]);
  console.log(captions[ranNum]);

  textSize(30);
  fill(0, 0, 0);
  textAlign(CENTER);

 let button = createButton('つぎ');
 button.parent('button-holder');
 button.mousePressed(divination);

    }

function draw() {
    }

function divination(){
if (captions[0]) {

      background(img);
      randomIndex = int(random(captions.length));
      background(image[randomIndex]);
      text(captions[randomIndex], width/2, height*0.1);
      captions.splice(randomIndex, 1);
      image.splice(randomIndex, 1);

  }else{
    background(img);
    text("終わりです。", width/2, height*0.1);

  }
  }


  function preload() {
    img = loadImage('wallpaper.jpg');
  }
