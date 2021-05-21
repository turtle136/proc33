class snowFlake{
    constructor(x,y){
        var options ={
            'restitution':0.008,
            'friction':1.0,
            'density':.04,
                isStatic:false
        } 
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;          

         push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
        
}