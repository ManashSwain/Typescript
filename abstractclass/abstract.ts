abstract class Animals {
    public name : string ;
    constructor(name : string){
        this.name = name;
    }
    eat():void{
        console.log(`I am eating ${this.name} is eating`);
    }
    // abstract methods 
    abstract makesound():void
}

class Dog extends Animals {
    constructor(name : string){
      super(name);
    }
    makesound(): void {
       console.log("bow bow") 
    }
}

const mydog = new Dog("buddy")
mydog.makesound();
mydog.eat();

export{}