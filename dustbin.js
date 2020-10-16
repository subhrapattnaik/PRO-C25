class Dustbin {
    constructor(x,y) {
      this.x=x;
      this.y=y;
    	
  this.leftBody = Bodies.rectangle(this.x, this.y, 20,100,{isStatic:true});
	this.rightBody = Bodies.rectangle(this.x+200, this.y, 20,100,{isStatic:true});
  this.baseBody = Bodies.rectangle(this.x+100, this.y+45, 200,20,{isStatic:true});
  
	this.leftBody.shapeColor="red";
	this.rightBody.shapeColor="red";
  this.baseBody.shapeColor="red";
  this.image=loadImage("dustbingreen.png")
  
	World.add(world, this.leftBody);
	World.add(world, this.rightBody);
  World.add(world, this.baseBody);
  
    }


    display(){
      var leftpos =this.leftBody.position;
      var rightpos =this.rightBody.position;
      var basepos =this.baseBody.position;

      rectMode(CENTER);
      fill("red");

      rect(leftpos.x, leftpos.y, 20,100);
      rect(rightpos.x, rightpos.y, 20,100);
      rect(basepos.x, basepos.y, 200,20);

      imageMode(CENTER);
      image(this.image,basepos.x-10,basepos.y-40,240, 120)

    }
  };