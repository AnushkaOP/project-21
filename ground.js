class Ground{
constructor(x,y,w,h){
var option={
isStatic:true
}
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.ground=Bodies.rectangle(x,y,w,h,option)
World.add(world,this.ground)
}
display(){
rect(0,0,this.w,this.h)
}
}















