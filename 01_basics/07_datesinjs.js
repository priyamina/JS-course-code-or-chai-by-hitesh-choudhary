// dates
let mydate =new Date;
// console.log(mydate)
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toString())
// console.log(typeof(mydate)) -->object
// ++++++++++how to create a date+++++++
// let mycreateddate = new Date(2023,0,23);
// let mycreateddate = new Date(2023,0,23,5,3);
// let mycreateddate = new Date("2023-01-14"); YY-DD-MM
 let mycreateddate = new Date("01-14-2023");
// console.log(mycreateddate.toLocaleString())
let timestamps = Date.now()
// console.log(timestamps)
// all time in seconds from 1 jan ,1970
// console.log(mycreateddate.getTime())
// from 1 jan,1970 to this date
// console.log(Math.floor(Date.now()/1000))
// to get time in seconds 
// to customized local string and add suggestions
mycreateddate.toLocaleString('default',{weekdays:"long"})
// 