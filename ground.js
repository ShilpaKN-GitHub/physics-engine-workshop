class Ground
{
  constructor(x, y, width, height)
  {
    const options =
    {
      isStatic: true
    }
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    Matter.World.add(world, this.body);

    this.width = width;
    this.height = height;
  }

  show()
  {
    const pos = this.body.position;
    const angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill("brown");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}