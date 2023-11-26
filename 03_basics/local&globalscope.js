// lecture no. 21 local and global scope
// block/local scope: not working outside the block,var is exception ,{}
// global scope:work everywhere but not inside the block
let a =10;
const b=15;
 
 if(true){
    let a =12;
    const b=5;
    // var c =300;
     c=80;
    console.log(c);
 }
 c=9;
//  console.log(b) 
// 5,15 
console.log(c)
//  value of c changes 
// that's why :avoid using var 
// global scope through node and dom (using chrome) is different.