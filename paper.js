class Paper {
  constructor(x,y) {
    var options = {
      isStatic:false,
      restitution:0.1,
      friction:0.5,
      density:0.5
    }
    this.body = Bodies.rectangle(x,y,70,70,options);
    this.width = 70;
    this.height = 70;
    this.image = loadImage("paper.png");

    World.add(world,this.body)
  }
  display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,15,11,70,70);
    pop();
  }
}