
  class Ground{

    constructor(x,y,width,height){
        var Goptions = {
  isStatic : true,
     'restitution' : 0,
    'friction': 0,
    'density' : 2


        }

           this.body=Bodies.rectangle(x,y,width,height,Goptions);
           this.width=width;
           this.height=height;
          
           World.add(world,this.body);
    }

    display(){

      var pos=this.body.position;

      push();
      rectMode(CENTER);
      fill(rgb(160,80,82));
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }




}