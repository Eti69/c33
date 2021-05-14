class Snow{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            'restitution':1.3,
            'friction':5,
            'density':1
        }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius,
    this.x=x,
    this.y=y,
   
    World.add(world,this.body);
    
    }
    
    display(){
    
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER)
    fill('#ffffff');
    ellipse(0,0,this.radius,this.radius)
    pop();
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,900),y:random(0,10)});
    }
    
    }
}