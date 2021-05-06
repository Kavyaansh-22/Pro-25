class Paper{
  constructor(x,y,r){

    var options = {
        
        'isStatic' : false,
        'restitution' : 0.1,
        'friction' :0,
        'density' :7.5

    }
    this.image = loadImage("paper.png");
    this.body= Bodies.circle(x,y,r,options);
    this.x = x;
    this.y = y;
    this.r = r; 

    World.add(world, this.body);

  }
  display()
	{
			var paperpos=this.body.position;		
			push()
			//translate(paperpos.x, paperpos.y);
			rectMode(CENTER)			
      image(this.image,paperpos.x,paperpos.y,this.r*1,this.r*1);
			//fill("white");		
        //    ellipse(0,0,this.r,this.r); 


			pop()
	}

}
