interface student {
     readonly sid : string,
     age : number,
     classid : string,
     roll : number
}

interface marks extends student {
    marks : number
}

const score : marks = {
    sid :"sid",
    classid : "uid",
    age : 5,
    roll : 87,
    marks : 100
}
console.log(score);

export{}