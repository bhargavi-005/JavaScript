
const expected = true;
function compare(a, s, f) {
    if (a === expected) {
    success();
    } else {
    failure();
    }
   }
   

function Campare(a,s,f){
    setTimeout(function(){
        compare(a,s,f)
    },1000)
}
function onS(){
    console.log("dd")
}
function onF(){
    console.log("hh")

}

Campare(true,onS,onF)
Campare(false,onS,onF)