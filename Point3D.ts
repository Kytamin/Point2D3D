import {Point2D} from "./Point2D";

class Point3D extends Point2D{
    private z:number
    constructor(x: number, y: number,z:number) {
        super(x, y);
        this.z=z
    }

    getZ(): number {
        return this.z;
    }

    setZ(value: number) {
        this.z = value;
    }
    getXYZ():object{
     return {x:super.getX(),y:super.getY(),z:this.z}
    }
    setXYZ(x:number,y:number,z:number):void{
        this.z=z
        super.setX(x)
        super.setY(y)
    }
}

let Point3D1=new Point3D(1,2,3)
Point3D1.setXYZ(3,3,3)
console.log(Point3D1.getXYZ())
console.log(Point3D1)