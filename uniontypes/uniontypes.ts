let score : number | string = 43 ;
score = 89 ;
score = "79"
console.log(score);

type User = {
    name : string,
    id : number
}
type Admin = {
    userName : string,
    id : number
}

let manash : User | Admin = {
    userName : "Manash",
    id : 89
}
console.log(manash);



// union in functions

function getDbId(id : string | number){
  console.log(`database id is : ${id}`)
}

getDbId("jgdf");
getDbId(89);

function getPass(id : string | number){
  if(typeof id == 'string'){
    id = id.toLowerCase();
    console.log(id)
  }
  else {
    id = id.toFixed(2);
    console.log(id)
  }
}

getPass("HJKL");
getPass(456.876);

// union in  arrays 

const data1 : number[] = [1,2,3];
const data2 : string[] = ["1","2","3"];
const data3 : string[] | number[] = ["1","2"];
const data4 : (number |string |boolean)[] = [1,"2" , false];

export {}

// exact matching values in union 

let seat : "aisle" | "middle" | "window" ;
seat = "aisle" ;
// seat = "crew" ; // will throw error
console.log("seat is : " + seat);


