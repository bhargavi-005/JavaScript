
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("done")
        resolve(8)
    },2000)
})
p1.then((value)=>{
    console.log(value)
    let p2=new Promise((resolve,reject)=>{
        resolve("this")
    })
    return p2
}).then((value)=>{
    console.log("dine")
})