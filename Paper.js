class Paper{

    constructor(x,y,radius){
    
        var Poptions = {

            isStatic : false,
            'restitution' : 0.3,
            'friction': 0.5,
            'density' : 1.2
        
        }
        this.body = Bodies.circle(x,y,radius,Poptions);
        this.radius=radius;
       this.image=loadImage("paper.png");
          

        World.add(world,this.body);
}

display(){

    push();
    ellipseMode(RADIUS);
  imageMode(CENTER);
    fill(60);
   
 image(this.image,this.body.position.x,this.body.position.y,25,25); 
  //circle(this.body.position.x,this.body.position.y,this.radius);
    pop();
}
}