
function a(){
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}
a("hhh","jjj","jjjj")
console.log(a())



function personLogsSomeThings(person, ...msg) {
    msg.forEach(arg => {
    console.log(person, 'says', arg);
    });
   }
   personLogsSomeThings('John', 'hello', 'world');