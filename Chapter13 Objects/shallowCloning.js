var e={ a: 1, b: 2, c: 3}
var c ={}
for (var p in e){
    if (e.hasOwnProperty(p)){
        c[p]=e[p];
    }
}
console.log(c)


var r ={ a: 1, b: 2, c: 3}
// var f =Object.assign({},r)

var {...f}=r
console.log(f)