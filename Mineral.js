class Mineral {
    constructor(x, y,r) {
      var options = {
        'density':2,
        'friction': 0.3,
        'restitution':0.4
      };

      
    	this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(2);
			stroke("black");
			fill("brown");
            ellipse(0,0,this.r,this.r);
			pop()
	}

}
    