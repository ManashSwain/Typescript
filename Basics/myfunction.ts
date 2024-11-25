// Numbers 

function addTwo(num : number){
  return num + 2 ;
}
addTwo(78);

// Strings 
function toUpper(value : string){
    return value.toUpperCase();
}
toUpper("manash");

// with multiple values 
function signUpUser(name : string , email : string , isPaid : boolean){}
signUpUser("manash" , "m@m.com", true);

// using arrow function and giving default values 
let loginUser = (name : string , email: string , isPaid : boolean = false)=>{}
loginUser("manash","m@m.com");

export{}
