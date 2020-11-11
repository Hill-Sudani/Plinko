class particle
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic : false,
            restitution : 0.4
        } 

        this.x = x;
        this.y = y;

        this.body = Bodies.circle(this.x,this.y,5,options);
        this.color = color(random(0,255),random(0,255),random(0,255),);

        World.add(world,this.body);
    }

    display()
    {
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x,position.y);
        rotate(angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,10)
        pop();
    }
}