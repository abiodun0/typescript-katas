class Polygon {
    h: number;
    constructor(height: number){
        this.h = height;
    }

    computeArea() :number {
        return 0;
    }

}

class Triangle extends Polygon {
    base: number;
    constructor(height: number, base: number){
        super(height);
        this.b = base;
    }
    computeArea(){
        return *.5 * this.h * this.b
    }
}

class Rectangle extends Polygon {
    width: number;
    constructor(height: number, width: number){
        super(height);
        this.width = width;
    }
    computeArea(){
        return this.h * this.width
    }
}

class Square extends Rectangle {
    constructor(length: number){
        super(length, length)
    }
}


class Point{
    static origin = new Point(0, 0)
    static addPoints(p1: Point, p2: Point){
        return p1.add(p2)

    }
    constructor(private d: number,
        private e: number){
 }
    get x(){
        return this.d;
    }
    add(point: Point){
        return point.d + this.e
    }

    set x(value: number){
        this.x = value;
    }
    get y(){
        return this.e;
    }
}

// Inheritance does not inheriting static properties or methods

class ThreeDPoint extends Point {
    //Consturtor cant take in private variables of the same name
    constructor(d: number, y:number){
        super(d, y);
    }


}
var d3 = new ThreeDPoint(90, 900);
d3.x = 893;
