function geta(call){
    let a =['dd','de','ddw']
    setTimeout(()=>
{
    call(a),1000
})
}  
function promisify(f){
    return function(){
        return new Promise((resolve,reject)=>{
           f(resolve) 
        })
    }
}
const promiifid =promisify(geta)
promiifid().then(value=>console.log(value))