class Polygon {
    constructor(x, y, r) {
        var options = {
            restitution:0.2,
            density:0.4          
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body);
        this.r = r
        this.image = loadImage("polygon.png")
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
      }
}