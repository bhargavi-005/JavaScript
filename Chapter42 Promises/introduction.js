
let promis=new Promise(function(resolve,reject)
{
    console.log("hello")
    resolve(55)
})

console.log("helleeeo")
setTimeout(function(){
    console.log("hii")
},2555)
console.log(promis)

// function myDisplayer(some) {
//     console.log(some);
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );