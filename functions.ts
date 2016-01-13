function sum(a: number, b: number){
    return a  + b;
}

var sum2 = function(a: number, b: number){
    return a + b;
}

// lambda function same thing with arrow funcitons

var sum3 = (a: number, b: number) => {
    return a + b;
}

var sum4 = (a: number, b: number ) => a + b;

// the question mark stands for optional parameters
function sayHello(firstName: string, lastName?: string){
    return "Hello " + firstName + " " + lastName;
}
// default parameters
function sayHelloDefualt(firstName: string, lastName = " "){
    var greeting = "Hello " + firstName;
    if(lastName){
        greeting += " " + lastName;
    }

    return greeting;
}
// assuming you have more than two numbers

function sum5(a: number, b: number, ...c:number[]){

    var total = a + b;
    c.forEach((value)=>{
        total += value
    });
    return total
}


var total = sum5(1,27,8,9,9,100,2938);

//function overloads for function signature

function foo(a: number, b: number): number;
function foo(a: string, b: string): string;

function foo(a, b): any{
    if(typeof a == "string" && typeof b == "string"){
        return a + " " + b;
    }
    return a + b;

}

var a = foo(1, 2);

// this also works for classes
class Foo {
    foo(a: number, b: string): string;
    foo(a, b){
        return a + b;
    }

}