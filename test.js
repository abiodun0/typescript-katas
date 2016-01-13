var foo;
function concat(a, b) {
    return a.toString() + b.toFixed;
}
concat("abiodun", 99).toString();
var pointer = {
    x: 1,
    y: 2
};
function addscores(p1, p2) {
    return p1.x + p2.y;
}
//Classes
var Point = (function () {
    // class properties
    //private methods
    // private c : number;
    // private d : number;
    // constructor(x: number, y: number){
    //     this.c = x;
    //     this.d = y;
    // }
    // cleaner code
    function Point(d, e) {
        this.d = d;
        this.e = e;
    }
    Point.addPoints = function (p1, p2) {
        return p1.add(p2);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.d;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.add = function (point) {
        return point.d + this.e;
    };
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this.e;
        },
        enumerable: true,
        configurable: true
    });
    Point.origin = new Point(0, 0);
    return Point;
})();
var p = new Point(90, 30);
p.x;
p.x = 1001;
var p1 = new Point(100, 200);
// testing the adding function
var sum = p1.add(p1);
var anotherSum = Point.addPoints(p, p1);
