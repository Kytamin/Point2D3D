export class Point2D {
    private x:number
    private y:number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    setX(value: number) :void{
        this.x = value;
    }

    getY(): number {
        return this.y;
    }

    setY(value: number):void {
        this.y = value;
    }
    getXY():object{
        return {x:this.x,y:this.y}
    }
    setXY(x:number,y:number){
        this.x=x
        this.y=y
    }
}


let Point2D1=new Point2D(2,3)
Point2D1.setXY(5,5)
console.log(Point2D1.getXY())
console.log(Point2D1)