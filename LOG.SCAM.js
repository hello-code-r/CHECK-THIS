class scamLog{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.1,
            'friction':1,
            'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.angle = angle;
        Matter.Body.setAngle(this.body, this.angle);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
