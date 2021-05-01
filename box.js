class Box{
    constructor (x, y, height, width)
    {
        var options =
        {
            'restitution': 1,
            'density': 1,
            'frictionAir': 0.005
        }

        this.body = Bodies.rectangle(x,y,width,height);
        this.height = height;
        this.width = width;
        World.add (world, this.body);
    }

    display()
    {
        push();
        translate(this.body.position.x , this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0, this.height,this.width);
        pop()
    }
}