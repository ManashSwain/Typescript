// implements => class to interface

interface vehicle {
    wheels : number ;
    drive():void;
}
class car implements vehicle {
    wheels : 4;
    drive(){
       console.log("I am driving") 
    }
    newfun(){
        console.log("I have been added!")
    }
}

let car1:car = new car();
console.log(car1.newfun());
console.log(car1.drive());

// extends class to class

class Animal {
    sound : string;
    constructor(sound : string){
        this.sound = sound ;
    }
    makesound(){
        console.log(this.sound);
    }
}

class dog extends Animal {
    bark(){
        console.log('woof!')
    }
}

let dog1 = new dog("bow bow");
dog1.bark();
dog1.makesound();

// extends interface to interface 

interface person {
    name : string;
}
interface employee extends person {
    eid : number;
}

const people : employee ={
    name : "manash",
    eid : 7
}

console.log(people);
