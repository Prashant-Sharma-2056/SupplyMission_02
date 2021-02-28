class Block{
    constructor(x,y,width,height){
        var Options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width.height, Options);
    }
    display(){
        var pos=this.body.position;
        push();
        fill(red);
        rect=(pos.x,pos.y,this.width,this.height);
        pop();
    }
}