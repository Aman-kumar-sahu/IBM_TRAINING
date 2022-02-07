//Destructring
let stud={
  name:"ram",
  lname:"jo",
  age:"40"
};
console.log(stud);
let{name,lname,age=90}=stud;
console.log(name,lname,age);
//rest parameter
function showRest(a,...args){
  console.log(a);
  console.log(args);
};
showRest(3,4,5,6,4,5,6);
//spread operator
let a=[1,2,3];
let b=[...a,4,5,6];
console.log(b);
//promise
let s="true";
let k=new Promise(function(resolve,reject){
  setTimeout(()=>{
  if(s==="true")
  resolve("Promise full");
  else
  reject("Promise not full")},2000)
});
// setTimeout(k,2000);
console.log(k);

