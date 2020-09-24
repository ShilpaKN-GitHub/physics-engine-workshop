class Bob
{
  constructor(x, y, radius)
  {
    const options =
    {
      restitution: 0.4
    }
    this.body = Matter.Bodies.circle(x, y, radius, options);
    Matter.World.add(world, this.body);
    Matter.Body.setMass(this.body.mass * 5);

    this.image = loadImage("images/disc.png");
    this.radius = radius;
  }

  show()
  {
    const pos = this.body.position;
    const angle = this.body.angle;
    imageMode(RADIUS);
    image(this.image, pos.x, pos.y, this.radius * 2, this.radius * 2);
  }
}
