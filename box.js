class Box
{
  constructor(x, y, width, height)
  {
    const options =
    {
      restitution: 0.5
    }
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    Matter.World.add(world, this.body);

    this.image = loadImage("images/coconut.png");
    this.width = width;
    this.height = height;
  }

  show()
  {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("pink");
    imageMode(CENTER);
    image(this.image, 0, 0, this.width * 2, this.height * 2);
    pop();
  }
}