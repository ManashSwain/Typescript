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








## Usage/Examples

```javascript

```





