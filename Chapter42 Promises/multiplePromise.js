

const p=Promise.all([
    new Promise((resolve,reject)=>{setTimeout(()=>resolve(1),1000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>resolve(2),2000)}),
    new Promise((resolve,reject)=>{setTimeout(()=>resolve(3),3000)})


])
p.then(value=>console.log(value))