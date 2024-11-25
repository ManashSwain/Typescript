interface User {
    readonly dbId : number,
    email : string,
    userId : number,
    googleId ?:string,
    // startTrial : ()=> string,
    startTrain():string,
    getCoupon(couponname : string ,value : number):number
}

const man : User = {dbId : 89,email : "m@m.com",userId : 54,startTrain :()=>{return "train"},getCoupon : (couponname="manash",value = 9)=>{return 789}}

interface person {
     readonly userId : string
     name : string,
     age : number
}
interface person {
  gender : string
}

const newperson : person = {
    userId : "newuser",
    name : "manash",
    age : 34,
    gender : "male"
}

console.log(newperson);

export{}