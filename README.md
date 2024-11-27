# Typescript

A brief description of Typescript

## Key Points

Typescript is a Javascript wrapper

Typescript is a superset of javascript

At the end Typescript is compiled to javascript

Typescript is not a programming language

It is a Development tool

It is used only for static checking

static checking is analyzing the code as we type

Typescript is all about typesafety

File extension is .ts

File extension with jsx component is .tsx


## Below mentioned cases can be avoided in typescript

-  2 + '2' => '22'

-  null + 2 => 2

-  undefined + 2 => NAN

## Installation

Install typescript globally

```bash
  npm install -g typescript
```

```bash
  npx tsc
```

To check the version

```bash
  tsc -v
```

Node js and npm should be installed

To check the node version

```bash
  node -v
```

To check the  npm version

```bash
  npm -v
```

To compile typescript file

```bash
  tsc filename.ts
```

To compile javascript file

```bash
  node filename.js
```


## Types in typescript

-  Number

-  String

-  Boolean

-  Null

-  Undefined

-  Void

-  Object

-  Array

-  Tuples

-  Any

-  Never

-  Unknown



## string

```javascript

const name : string = "manash";

```

## number

```javascript

const value : number = 78;

```


## boolean

```javascript

const isLoggedIn : boolean = true;

```


## any

- any is not a datatype

- In typescript if we use any the compiler will stop checking for types

## any

```javascript

const value : any = true;

```

## Functions in typescript 

### Numbers 

```javascript

function  addTwo(num : number){
  return num+2 ;
}
addTwo(3);

```

### Strings


```javascript

function toUpperCase(str : string){
  return str.toUpperCase();
}
toUpperCase("manash");

```

### Multiple values in function

```javascript

function signUpUser(name : string , email : string, isPaid : boolean){}

signUpUser("manash", "m@m.com" , false)


```

### Giving default values in function

```javascript

function loginUser(name : string , email : string, isPaid : boolean = false){}

loginUser("manash", "m@m.com")


```

### Modifying default values in function

```javascript

function loginUser(name : string , email : string, isPaid : boolean = false){}

loginUser("manash", "m@m.com" , true)


```

### Better way to write functions

```javascript
function addTwo(num : number): number{
  return num + 2 ;
}
```

### Arrow functions

```javascript
const greet = (s:string):string=>{
  return ` hello ${}`
}
```


### Special functions when return value is unknown


```javascript

function getValue(myvalue : number){
  if(myvalue > 5){
    return true;
  }
  return "200 ok";
}

```
### Arrays and map

```javascript
const heros = ["thor" , "superman" , "spiderman"];
heros.map((hero)=>{
    return`hero is ${hero}`
})


```

### Other types void and never

### Void

- void is a case where function does not return anything


```javascript
 function consoleError(errmsg : string):void{
    console.log(errmsg)
 }
```


### Never

- never is same as void but incase of never we can do error handling

- never cannot have a reachable end point 


```javascript
 function handleError(errmsg : string):never{
    throw new Error(errmsg);
 }
```

### Objects in typescript

## Usage/Examples

```javascript


const user = {
    name : "manash",
    email : "m@m.com",
    isActive : true
}
```

### Functions that passes objects as an argument


```javascript

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
    console.log(name, isPaid);
}

createUser({ name: "manash", isPaid: true });

```

### Functions that has objects as a return type


```javascript

function createCourse({ name, price, isPaid }: { name: string; price: number; isPaid: boolean }) {
    return { name: "typescript", price: 645, isPaid: true };
}

const course = createCourse({ name: "React", price: 500, isPaid: false });
console.log(course); // { name: "typescript", price: 645, isPaid: true }

```

### Type aliases 

- Lets say a function has many arguments .It will become lengthier to pass arguments. we can use key word type

```javascript

type User = {
    name: string;
    age: number;
    isPaid: boolean;
};

function createUser(user: User) {
    console.log(user);
}

// Correct usage:
createUser({ name: "manash", age: 56, isPaid: true });

```

### Readonly and optional fields(?)


```javascript

type newUser = {
    readonly _id : number ,
    name: string;
    age: number;
    isPaid: boolean;
    creditCardDetails ? : number
};

function createUser(user: newUser) {
    console.log(user);
}

// Correct usage:
createUser({_id : 683, name: "manash", age: 56, isPaid: true });
```


### Mix and match cases

```javascript
type cardNumber = {
    cardnumber : number
}

type cardData = {
    carddata : string
}

type cardDetails = cardNumber & cardData & {
    cardDetails : string
}

const allData : cardDetails = {
  cardnumber : 456567,
  carddata : "hdfc-card",
  cardDetails : "credit"
}


```
### Arrays

```javascript

const superHero : string[] = [] ;
superHero.push("spiderman");
superHero.push("batman");
superHero.push("ironman");


console.log(superHero);

```

### Pushing objects in array

```javascript

type User = {
    name : string,
    age : number 
}

const allUser : User[] = []

allUser.push({name : "manash" , age : 21})

```

### Array of array

```javascript

const aiModels : number[][] = []

const allColors:number[] = [255,255,255]

aiModels.push(allColors);


console.log(aiModels); // Output: [[255, 255, 255]]

```
### Union types in typescript

- sometimes you need two or more data types .In these cases  we will have to use union.

```javascript
let score : string | number = 89 ;
score = '456' ;
console.log(score);

```

### Other union use cases 

```javascript

type User = {
    uid : number,
    name : string
}

type Admin = {
    aid : number ,
    name : string
}

let loggedInUser : User | Admin = {
    aid : 84359,
    name : "manash"
}

```

###  Performing an action based on particular data type

```javascript

function getPass(id: number | string){
  if(typeof id === "string"){
    id = id.toUpperCase();
  }
  else {
    id = id.toFixed(2);
  }
}

getPass(74);
getPass("6832");

```

### Union in arrays

```javascript

const data1:number[] = [12,34,112];
const data2:string[] = ["batman" , "superman" , "spiderman"];

```
### Below case can hold either string or number data type but not both


```javascript

const data3 : number[] | string[] = ["marvel" , "bollywood"];

```

### Below case can hold mix and match of all data types


```javascript

const data3 : (string | number | boolean)[] = ["marvel" , "bollywood" , 834 , 34809 , true];

```

### Variable of exact match 

```javascript

let seat : "aisle" | "middle" | "window";
seat = "aisle";
console.log(seat);

```


### Tuples 

- In TypeScript, a tuple is a special type of array with a fixed number of elements, where each element has a specific type. It allows you to represent an array where the types of elements are known and fixed in order and count.

```javascript
let user:[number , string , boolean] = [32, "manash" , true];

```

### Enums in typescript

- In TypeScript, an enum is a way to define a collection of related values that can be numeric or string-based. It is used to give more readable and meaningful names to a set of values.

- default value is set to 0 and following values will be in the incremental order

- we can give mix and match values like string or number data type



``` javascript
const enum seatChoice  {
     aisle,
     middle,
     window
}

const myseat = seatChoice.middle ;
console.log(myseat);

```

- Setting up string values
- String values should not be empty


``` javascript
const enum seatChoice  {
     AISLE = "aisle",
     MIDDLE = "middle",
     WINDOW = "window"
}

const myseat = seatChoice.MIDDLE ;
console.log(myseat);

```

- Giving  random values


``` javascript
const enum seatChoice {
    AISLE = 32 ,
    MIDDLE = 98,
    WINDOW = 92
}

const user = seatChoice.WINDOW ;
console.log(user);

```

### Interface in typescript

- In TypeScript, an interface is a way to define the structure of an object. It specifies the types of properties and methods an object must have. Interfaces are used to enforce type safety and improve code readability. 

```javascript



interface User {
    dbId: number;
    email: string;
    startcourse: () => boolean; 
    startTrial(): boolean;
    getCoupon: (couponName: string, validity: boolean) => string; 
}

const userone: User = {
    dbId: 940423,
    email: "m@m.com",
    startcourse: () => { 
        return false;
    },
    startTrial: () => {
        return true;
    },
    getCoupon: (couponName: string, validity: boolean) => {
        return "coupon applied";
    },
};

console.log(userone);

```

### Other interface examples

```javascript

interface User {
    dbId: number;
    email: string;
    userId : number
}

interface User {
    githubId : number
}

const details : User= {

    dbId: 65456,
    email: "tkjldfg",
    userId : 79954,
    githubId : 654423
   
}

console.log(details)

```

### Interface with extends keyword

```javascript

interface Details {
    dbId : string,
    googleId : number,
}

interface User extends Details {
    role : "admin" | "ta" | "learner" 
}

const user : User = {
  dbId : "hjkfsd",
  googleId : 7890,
  role : "admin"
}

console.log(user)

```

### Production setup for typescript

Create a typescript config file

```bash
  tsc --init
```

Initialize npm package

```bash
  npm init -y
```

### Other steps

- Create 2 folders  src and dist

- Create a file index.ts in src and index.js in dist

- Create index.html file.

- Point the script tag to dist folder (index.js)

- Uncomment outDir in tsconfig and setup the output directory path

Run in watch mode

```bash
  tsc -w
```

- When we make changes in index.ts (src) .We can see the  changes in index.js file


### classes in typescript

``` javascript
class Person {
    name : string;
    age : number
    constructor(Name : string , Age : number){
      this.name = Name ;
      this.age = Age
    }
    greet(){
        console.log(`Hello ${this.name} and your age is ${this.age}`) ;
    }
}

const people = new Person("manash" , 32);
people.greet();

```








## Usage/Examples

```javascript

```





