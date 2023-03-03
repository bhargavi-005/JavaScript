// const { resolve } = require("path");

// const p1 = Promise.resolve((123))

// p1.then((value) => {
//   console.log(value);
  
// });

function r(value){
    console.log('done')
}

function nr(value){
    console.log('not')
}

let p=Promise.reject('fail')
p.catch(reason=>{
    console.log(reason)
})
