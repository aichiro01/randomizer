//Japanese Culture

let image = [];
let captions = [
    'ぐそく (Gusoku)',
    '大小 (Daishō)',
    '太鼓 (Taiko)',
    'マスク (Mask)',
    '小袖 (Kosode)'
];
let ranNum;

let button;

let randomIndex;

let img;

function setup() {
  createCanvas(600,600);
  background(img);

  for (i = 0; i <= 4; i++) {
    image[i] = loadImage('assets/' + [i] + '.jpg');
    }
  ranNum= int(random(image.length));
  console.log(image[ranNum]);
  console.log(captions[ranNum]);

  textSize(45);
  text("始める", 240, 50)
  textAlign(CENTER);

  button = createButton('つぎ');
  button.position(275, 450);
    }

    function draw() {}

function mousePressed(){
if (captions[0]) {

      background(img);
      randomIndex = int(random(captions.length));
      background(image[randomIndex]);
      text(captions[randomIndex], 300, 50);
      captions.splice(randomIndex, 1);
      image.splice(randomIndex, 1);

  }else{
    background(img);
    text("終わりです。", 310, 50);
  }
  }

  function preload() {
    img = loadImage('wallpaper.jpg');
  }
