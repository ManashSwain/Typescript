class User {
    public name : string;
    public email : string;
    constructor(name:string ,email:string){
      this.name = name;
      this.email = email;
    }
}
const user1 = new User("manash" , "m@m.com");


// professional syntax 

class student{
    constructor(
        public name : string ,
        public email : string
    ){}
}

export{}