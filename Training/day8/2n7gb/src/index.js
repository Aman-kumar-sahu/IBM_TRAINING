// let num = 2;
// let a = new Promise(function (resolve, reject) {
//   if (num) resolve("Fulfilled");
//   else reject("Not Fulfilled");
// });
// a.then((result) => {
//   setTimeout(()=>{
//   console.log(result);},4000)
// })
//   .catch((result) => {
//     console.log(result);
//   })
//   .finally(() => {
//     console.log("It will be printed no matter what");
//   });
//Try and catch
// let pro=new Promise(function(resolve,reject){
//   setTimeout(()=>{
//   resolve("Promise nahi mila");
//   },4000);
// });
// async function b(){
//   try{
//     let res=await pro;
//     console.log(res);
//     console.log("hi");
//   } catch(error){
//     console.log(error);
//   }
// }
// b();
//Api Json async
async function jsonapi(){
  let data=fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>response.json()).then((result)=>console.log(result));
};
console.log(result);
jsonapi();


