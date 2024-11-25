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





## Usage/Examples

```javascript

```





