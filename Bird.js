class Bird {
 constructor(x,y,width,height){
  var options={
   'restitution':20,
   'density':0.5,
   'friction':0.75,
  }
  this.x=x;
  this.y=y;
  this.width=width;
  this.height=height;
  this.body = Bodies.rectangle(x,y,width,height);
  World.add(world, this.body);
 }
   display(){
    var pos = this.body.position;
    var angle = this.body.angle
    push();
    translate(pos.x, pos.y); 
    strokeWeight(5)
    rotate(angle);
    rectMode(CENTER);
    stroke("black"); 
    fill("red");
    rect(0,0,this.width,this.height);
    pop();
 }
}