class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.bmimage = loadImage("Bestman-01.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if (frameCount>=200){
            image(this.bmimage,pos.x,pos.y+70,200,300)
            this.image.visibility=false
        }
       
    }
}