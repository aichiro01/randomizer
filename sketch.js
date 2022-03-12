//Japanse Culture

let facts = [{
      name: "armor",
      color: "black color"
    }, {
      name: "katana",
      color: "gold"
    }, {
      name: "sake",
      color: "white color"
    }, {
      name: "mask",
      color: "dark oak"
    }, {
      name: "robe",
      color: "baige color"}];

let randomIndex;

    function setup() {
      createCanvas(600, 600);
      background(200);








    }

    function draw() {

    }

    function mousePressed(){
      background(random(200, 255));
      randomIndex = int(random(facts.length));
      text(facts[randomIndex].name, 50, 50);
      facts.splice(randomIndex, 1);
    }
