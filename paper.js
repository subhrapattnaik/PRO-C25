class Paper {
    constructor(x,y,diameter) {
      var options = {
       isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

      }
      this.x=x;
      this.y=y;
      this.diameter = diameter;
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x,y,this.diameter/2,options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //ellipseMode(RADIUS);
      //fill("yellow");
      //ellipse(0, 0, this.diameter/2,this.diameter/2);
      imageMode(CENTER);
      image(this.image, 0,0,this.diameter, this.diameter)
      pop();
    }
  };
  