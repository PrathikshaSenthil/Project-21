

    class Dustbin2{

        constructor(x,y,width,height){
            var Doptions = {
      isStatic : true,
      isVisible : false,
         'restitution' : 0,
        'friction': 0,
        'density' : 2
    
    
            }
    
               this.body=Bodies.rectangle(x,y,width,height,Doptions);
          
          
               this.width=width;
               this.height=height;
         
               World.add(world,this.body);
        }
    
        display(){
    
          var pos=this.body.position;
    
          push();
          rectMode(CENTER);
          fill(rgb(71,52,173));
          rect(pos.x,pos.y,this.width,this.height);
          pop();
        }
    
    
    
    
    }


