interface Shape {
    computArea(): number;
    typeString(name: string): string;
    //it can also be implemented like tis
    //typeString: (name: string) => string
}



class Polygon implements Shape{
    h: number;
    constructor(height: number){
        this.h = height;
    }

    computArea() :number {
        return 0;
    }
    typeString(name: string){

        return name;

    }

}

class Elipse implements Shape {
    a: number;
    b: number;

    constructor(a: number, b: number){
        this.a = a;
        this.b = b
    }
    computArea(){
        return Math.PI * this.a * this.b
    }

    typeString(name: string){
        return "Elipse";
    }
}

var elipse = new Elipse(5, 5);

function addElipse(shape: Shape){
    alert(shape.computArea())
}

addElipse(elipse);

// classes can aslo use implements

class Triangle implements Polygon {
    h: number;
    computArea(){
        return 0;

    }
    constructor(){

    }
    typeString(name: string){
        return "awesomeness"

    }
}
