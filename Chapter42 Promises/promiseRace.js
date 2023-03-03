let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("done")
        resolve(5)
    },2000)
})
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("not done")
         resolve("t")
    },100)
})
let p =Promise.race([p1,p2]).then((value)=>{
    console.log(value)
})
console.log(p)