const User = {
    name: "Manash",
    email :"m@m.com", 
    isActive : true
}
function createUser({name:string ,isPaid:boolean}){}
createUser({name : "Manash",isPaid : true})

// odd behaviour of objects 
// it will throw error if we try to add email property 
// createUser({name : "Manash",isPaid : true, email : "m@m.com"})
let newUser = {name : "Manash",isPaid : true, email : "m@m.com"};
createUser(newUser);

// return type = object

function createCourse():{course : string , price : number}{
 return {course : "reactjs" , price : 7634}
}


export{}