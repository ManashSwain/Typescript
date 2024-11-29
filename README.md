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
class User {
  _name : string;
  _age : number ;
   readonly _city : string = "chennai"
  constructor(name : string , age : number ){
   this._name = name ;
   this._age = age 
  }

  getDetails(){
    console.log(`My name is ${this._name} and my age is  ${this._age}`)
  }
}

const user = new User("manash" , 21);
user.getDetails()
   
   

```

### Getter Example 

``` javascript 

class User {
  _name : string ;
  _age : number ;
  _city  : string = "chennai";
  constructor(name : string , age : number){
     this._name = name ,
     this._age = age
  }

   get getDetails() : string{
    return (`My name is ${this._name} and my age is ${this._age}`) ;
  }
}

const user = new User("manash" , 43);
console.log(user.getDetails)


```

### Setter Example in classes

- setter does not have a return type(type checking)

```javascript
class User {
  private _name: string;
  private _age: number;
  private _city: string = "chennai";
  private _courseCount: number = 1;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for user details
  get getDetails(): string {
    return `My name is ${this._name}, and my age is ${this._age}.`;
  }

  // Getter for course count
  get courseCount(): number {
    return this._courseCount;
  }

  // Setter to update course count
  set incrementCourseCount(course: number) {
    if (course > 0) {
      this._courseCount += course;
    } else {
      console.error("Course count must be a positive number.");
    }
  }
}

// Usage
const user = new User("Manash", 43);

// Accessing details
console.log(user.getDetails); // Output: My name is Manash, and my age is 43.

// Increment course count
user.incrementCourseCount = 1; // Increment by 1
console.log("Updated Course Count:", user.courseCount); // Output: Updated Course Count: 2

user.incrementCourseCount = 3; // Increment by 3
console.log("Updated Course Count:", user.courseCount); // Output: Updated Course Count: 5

// Invalid course increment
user.incrementCourseCount = -2; // Output: Course count must be a positive number.


```


### Public , private and protected 
# Access Modifiers in TypeScript

TypeScript provides three access modifiers—**public**, **private**, and **protected**—to control the visibility of class members (properties and methods). Here's a detailed comparison:

| **Modifier** | **Description**                                                                 | **Accessible Within Class** | **Accessible in Derived Class** | **Accessible Outside Class** |
|--------------|---------------------------------------------------------------------------------|-----------------------------|----------------------------------|------------------------------|
| `public`     | Default modifier. Accessible from anywhere (inside or outside the class).       | ✅                           | ✅                                | ✅                            |
| `private`    | Accessible only within the class it is declared in.                             | ✅                           | ❌                                | ❌                            |
| `protected`  | Accessible within the class and its subclasses, but not outside of these.       | ✅                           | ✅                                | ❌                            |

---

## Examples

### 1. Public Modifier



Members marked with `public` (or without an explicit modifier) are accessible from anywhere: inside the class, in derived classes, and outside the class.

```typescript

class PublicExample {
  public name: string; // Public property
  public age: number; // Another public property

  constructor(name: string, age: number) {
    this.name = name; // Assign values
    this.age = age;
  }

  public getDetails(): string { // Public method
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const pub = new PublicExample("Manash", 30);
console.log(pub.name); // ✅ Accessible
console.log(pub.age); // ✅ Accessible
console.log(pub.getDetails()); // ✅ Accessible

```

## private modifier

```typescript

class PrivateExample {
  private secret: string;

  constructor(secret: string) {
    this.secret = secret;
  }

  getSecret() {
    return this.secret; // ✅ Accessible within the class
  }
}

const priv = new PrivateExample("Top Secret");
// console.log(priv.secret); // ❌ Error: Property 'secret' is private
console.log(priv.getSecret()); // ✅ Accessible via method



```

## Protected modifier

```javascript
class Base {
  protected id: number;

  constructor(id: number) {
    this.id = id;
  }
}

class Derived extends Base {
  displayId() {
    return this.id; // ✅ Accessible in subclass
  }
}

const derived = new Derived(123);
// console.log(derived.id); // ❌ Error: Property 'id' is protected
console.log(derived.displayId()); // ✅ Accessible via subclass method


```


### classes and derived classes example 

``` javascript

// Base class
class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name; // Assign the name property
    this.age = age; // Assign the age property
  }

  public greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Derived class
class Employee extends Person {
  public jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age); // Correctly pass name and age to the base class constructor
    this.jobTitle = jobTitle; // Assign the jobTitle property
  }

  public getDetails(): string {
    return `${this.greet()} I work as a ${this.jobTitle}.`;
  }
}

// Create an instance of the derived class
const employee = new Employee("Manash", 30, "Software Developer");
console.log(employee.getDetails());


```

### Interface and Classes with implements and extends

# TypeScript - Interface and Class Usage: `implements` and `extends`

In TypeScript, you can create **interfaces** to define the structure of an object, and then **classes** can either implement an interface or extend another class.

## 1. **Class Implements Interface** (`implements`)

A class can **implement** an interface, ensuring it follows the structure defined by the interface.

### Example:

```typescript
// Interface defining the structure
interface Person {
  name: string;
  age: number;
  greet(): string;
}

// Class implementing the interface
class Employee implements Person {
  name: string;
  age: number;
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. I work as a ${this.jobTitle}.`;
  }
}

// Create an instance of the class
const employee = new Employee("Manash", 30, "Software Developer");
console.log(employee.greet()); // Output: Hello, my name is Manash and I am 30 years old. I work as a Software Developer.


 ```

 ### Other Examples 

 ###  implements => class to interface

 ```typescript 

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

 ```

 ### extends class to class

 ```typescript

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


 ```

 ### extends interface to interface

 ``` typescript

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


 
 ```

 ## Summary Table

| **Action**                   | **Syntax**                                          | **Explanation**                                                                                      |
|------------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------------|
| **Class Implements Interface** | `class <ClassName> implements <InterfaceName>`      | Ensures the class adheres to the structure defined by the interface.                                 |
| **Class Extends Class**       | `class <DerivedClass> extends <BaseClass>`          | Allows a class to inherit properties and methods from another class.                                 |
| **Class Implements and Extends** | `class <ClassName> extends <BaseClass> implements <InterfaceName>` | A class can inherit from a base class and adhere to an interface simultaneously.                     |

















## Usage/Examples

```javascript

```





