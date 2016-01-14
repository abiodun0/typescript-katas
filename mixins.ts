class Walker {
    name:string;
    walk(){
        return this.name + " is walking";
    }


}

class Speaker {
    name:string;
    speak(){
        return this.name + "is speaking";
    }

}
// classes can implement other classes
class Person implements Walker, Speaker {
    name:string;
    constructor(name: string){
        this.name = name;
    }
    walk: ()=>string
    speak: ()=>string
}

// custom mixing function without implementatin and inhritances
function mix(derivedType: any, ...baseTypes: any[]){
    baseTypes.forEach(baseType=>{
        Object.getOwnPropertyNames(baseType.proptotype).forEach(name=>{
            derivedType.protoType[name] = baseType.prototype[name];
        })
    })
}

mix(Person, Walker, Speaker);

var person = new Person("James hellen");

alert(person.speak());
alert(person.walk());