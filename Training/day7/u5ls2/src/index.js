// let a = [1, 2, 3, 4, 5];
// let b=a.map(item=>item*4);
// console.log(b);
// let even=a.filter(item=>item%2===0);
// console.log(even);
// let odd=a.filter(item=>item%2===1);
// console.log(odd);
// let c=a.reduce((reduce,item)=>reduce+item,1);
// console.log(c);
// let student = {
//   name: "naruto",
//   age: "49"
// };
// console.log(student);
// student.salary = "3900";
// student.branch = "ECE";
// for (let a in student) {
//   console.log(a);
//   console.log(student[a]);
// }
//Destructring ,rest(),spread operator
// let newArr = [1, 2, 3, 4, 5];
// //let[x,y,z]=newArr;
// //console.log(x,y,z);
// let [x, , z] = newArr;
// console.log(x, z);
let emp = {
  name: "mark",
  lname: "jay",
  age: 30
};
let(name, lname, (age = 39)) = emp;
console.log(name, lname, age);
