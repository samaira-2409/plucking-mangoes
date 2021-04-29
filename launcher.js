class Launcher{
constructor (bodyA,pointB){
    var options ={
        'length':10,
        'stiffness':0.004,
        'bodyA':bodyA,
        'pointB':pointB
    
}
this.pointB = pointB
    this.launcher = Constraint.create(options);
    World.add(world,this.launcher);

}
fly(){
    this.launcher.bodyA = null;
}
attach(body){
    this.launcher.bodyA = body
}
display(){
    if(this.launcher.bodyA !== null){
    var posA =this.launcher.bodyA.position
    var posB =this.pointB
    strokeWeight(4);
    line(posA.x,posA.y,posB.x,posB.y);
}
}

}
