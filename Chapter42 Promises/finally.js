const { resolve } = require("path");
const { reject } = require("q");

function A(){
    return new Promise((resolve,reject)=>{
        if(Math.random()>0.5){
            resolve('done')
        }
        else{
            reject("error",error)
        }
    })
}
A()
.then((g)=>{
    console.log(g)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log('complete')
})
 