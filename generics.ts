// generics are used to passed custom type int to a functoin instead of 
// funciton overload

function foo<T>(a: T){
    return a;
}

var bar = foo<string>("Hello world");
var bar2 = foo<number>(78);
var bar3 = foo<HTMLElement>(document.createElement("div"));


//This is a special case with array

var baz = new Array<string>();


// a special case of generics with json

var json = '{"firstName": "John", "lastName":"Doe"}';

var json_data = JSON.parse(json); // this returns any so it might not be usable

interface Person{
    firstName: string;
    lastName: string;
}

var myJSON = {
    parse: function<T>(data:string): T{
        return JSON.parse(data);
    }
}
var obj = myJSON.parse<Person>(json);


// type can can be used with interfaces and classes

class Foo<T>{
    foo: T;
    bar(data: T){

    }
    baz(): T{
        return this.foo;
    }
}

// generics can also be extended

class Bar<T extends Person>{
    foo: T;
    bar(data: T){

    }
    baz(): T{
        return this.foo;
    }
}