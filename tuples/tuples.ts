let tupUser : (string | number)[] = [21,12,54,'manash'];
console.log(tupUser);
let newtpuser : [string,boolean,number];
newtpuser = ["manash",true,789];
console.log(newtpuser);
let rgb : [number,number,number]
rgb = [255,234,242];
console.log(rgb);
type User=[number,string];
const newUser:User=[234,"a@a.com"];
newUser[0]= 438;
newUser.push(344); // can be possible but avoid doing this 
console.log(newUser);

export {}