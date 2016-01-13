var foo: string;

function concat(a: string, b: number ){

    return a.toString() + b.toFixed;
}

concat("abiodun", 99).toString();

var pointer = {
    x: 1,
    y: 2
};


// use interfaces to build type inting
interface Pointers{
    x: number;
    y: number;
} 

// You can also extend interfaces to contain more interfaces
// custom types
interface ThreeDPoint extends Pointers {
    z:number

}
function addscores(p1: Pointers, p2: Pointers){
    return p1.x + p2.y;
}

//Classes

class Point{
    static origin = new Point(0, 0)
    static addPoints(p1: Point, p2: Point){
        return p1.add(p2)

    }
    // class properties

    //private methods
    // private c : number;
    // private d : number;
    // constructor(x: number, y: number){
    //     this.c = x;
    //     this.d = y;


    // }
    // cleaner code
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

var p = new Point(90, 30);
p.x
p.x = 1001;
var p1 = new Point(100, 200);
// testing the adding function
var sum = p1.add(p1);

var anotherSum = Point.addPoints(p, p1);



