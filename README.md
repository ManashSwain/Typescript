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

### numbers 

```javascript

function  addTwo(num : number){
  return num+2 ;
}
addTwo(3);

```

### strings


```javascript

function toUpperCase(str : string){
  return str.toUpperCase();
}
toUpperCase("manash");

```

### multiple values in function

```javascript

function signUpUser(name : string , email : string, isPaid : boolean){}

signUpUser("manash", "m@m.com" , false)


```

### giving default values in function

```javascript

function loginUser(name : string , email : string, isPaid : boolean = false){}

loginUser("manash", "m@m.com")


```

### modifying default values in function

```javascript

function loginUser(name : string , email : string, isPaid : boolean = false){}

loginUser("manash", "m@m.com" , true)


```

### better way to write functions

```javascript
function addTwo(num : number): number{
  return num + 2 ;
}
```

### arrow functions

```javascript
const greet = (s:string):string=>{
  return ` hello ${}`
}
```


### special functions when return value is unknown


```javascript

function getValue(myvalue : number){
  if(myvalue > 5){
    return true;
  }
  return "200 ok";
}

```
### arrays and map

```javascript
const heros = ["thor" , "superman" , "spiderman"];
heros.map((hero)=>{
    return`hero is ${hero}`
})


```

### other types void and never

### void

- void is a case where function does not return anything


```javascript
 function consoleError(errmsg : string):void{
    console.log(errmsg)
 }
```


### never

- never is same as void but incase of never we can do error handling

- never cannot have a reachable end point 


```javascript
 function handleError(errmsg : string):never{
    throw new Error(errmsg);
 }
```

### objects in typescript

## Usage/Examples

```javascript


const user = {
    name : "manash",
    email : "m@m.com",
    isActive : true
}
```

### functions that passes objects as an argument


```javascript

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {
    console.log(name, isPaid);
}

createUser({ name: "manash", isPaid: true });

```

### functions that has objects as a return type


```javascript

function createCourse({ name, price, isPaid }: { name: string; price: number; isPaid: boolean }) {
    return { name: "typescript", price: 645, isPaid: true };
}

const course = createCourse({ name: "React", price: 500, isPaid: false });
console.log(course); // { name: "typescript", price: 645, isPaid: true }

```

### type aliases 

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

### readonly and optional fields(?)


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


### mix and match cases

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
### arrays

```javascript

const superHero : string[] = [] ;
superHero.push("spiderman");
superHero.push("batman");
superHero.push("ironman");


console.log(superHero);

```

### pushing objects in array

```javascript

type User = {
    name : string,
    age : number 
}

const allUser : User[] = []

allUser.push({name : "manash" , age : 21})

```

### array of array

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

### other union use cases 

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

###  performing an action based on particular data type

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

### union in arrays

```javascript

const data1:number[] = [12,34,112];
const data2:string[] = ["batman" , "superman" , "spiderman"];

```
### below case can hold either string or number data type but not both


```javascript

const data3 : number[] | string[] = ["marvel" , "bollywood"];

```

### below case can hold mix and match of all data types


```javascript

const data3 : (string | number | boolean)[] = ["marvel" , "bollywood" , 834 , 34809 , true];

```

### variable of exact match 

```javascript

let seat : "aisle" | "middle" | "window";
seat = "aisle";
console.log(seat);

```


### tuples 

- In TypeScript, a tuple is a special type of array with a fixed number of elements, where each element has a specific type. It allows you to represent an array where the types of elements are known and fixed in order and count.

```javascript
let user:[number , string , boolean] = [32, "manash" , true];

```

### enums in typescript

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

- setting up string values
- string values should not be empty


``` javascript
const enum seatChoice  {
     AISLE = "aisle",
     MIDDLE = "middle",
     WINDOW = "window"
}

const myseat = seatChoice.MIDDLE ;
console.log(myseat);

```

- giving  random values


``` javascript
const enum seatChoice {
    AISLE = 32 ,
    MIDDLE = 98,
    WINDOW = 92
}

const user = seatChoice.WINDOW ;
console.log(user);

```

### interface in typescript

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










## Usage/Examples

```javascript

```





