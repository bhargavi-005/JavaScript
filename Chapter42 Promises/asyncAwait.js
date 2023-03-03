const { async } = require("q");

async function fun(){
    console.log('hghghhh')
    const res=await fetch('https://www.google.com/search?q=api+github.com%2Fusers&rlz=1C1CHBF_enIN914IN914&oq=api+git&aqs=chrome.3.69i57j0i512l6j69i60.4597j0j7&sourceid=chrome&ie=UTF-8')
    return res
}
let d=fun();
console.log(d)
console.log("bbbbb")
d.then(data=>console.log(data))