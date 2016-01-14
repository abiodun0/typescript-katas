interface Box {
    height: number;
    width: number;
}

interface Box {
    depth: number;
    recycle(tearDown: boolean): void;
}

//declaring a variable that returns the interface

var box: Box = {
    height: 99,
    width: 98,
    depth: 100,
    recycle: function (x:boolean) {

    },

}
//module can be merged with modules

// functions can be of the same name with module
module Foo {
    var foo = "Module string";
    export function bar(){
        return foo;
    }
}
module Foo {
    export function baz(){
        return "checks";
    }
}

var check_foo = Foo.baz()


function sayHello(name: string){
    if(sayHello.pre !== ''){
        return sayHello.pre + name;
    }
    return name;
}
// module with the same name as function
module sayHello {
    export var pre = "Hello ";
}
