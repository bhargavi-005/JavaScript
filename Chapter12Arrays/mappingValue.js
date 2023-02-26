

var a= ["1","2","34","45","22"]

let v= a.map(function(value,index,array){
    console.log(this)
    return value.lenght;
});
console.log(v)