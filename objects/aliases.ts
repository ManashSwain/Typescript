type User = {
    name : string,
    age : number,
    isPaid : boolean
}

function createUser(user:User){}
createUser({name : "Manash" , age : 43, isPaid : true});

// readonly 

type newUser = {
    readonly _id : string ,
    name : string,
    email : string,
    isActive : boolean,
    creditcarddetails ?: number
}
// ? means optional 

let allUser : newUser = {
   _id : "235",
   name : "Manash",
   email: "m@m.com",
   isActive : false, 
}

// modifying email 

allUser.email = "a@a.com";
// allUser._id = "7689"; // not possible because it is in readonly 
console.log(allUser);

export {}