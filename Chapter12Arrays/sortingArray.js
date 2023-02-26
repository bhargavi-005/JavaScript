var s=['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort();
console.log(s)


// Alphabetical Sort
var  g=['s', 't', 'a', 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', '-4'];
var r=g.sort(function(a,b){
    return a.localeCompare(b);
})
console.log(r)

var  g=['s',2,4, 't', 'a', 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', '-4'];
var k=g.sort(function(a,b){
    return a.toString().localeCompare(b);
})
console.log(k)



// String sorting by length (longest/shortest first)
var o= ["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
    return b.length - a.length;
    // return a.length - b.length;

   });
   console.log(o)

//    Sorting array by even and odd numbers
   var t=[4,3,5,6,10,4,8,7,9]
   var j=t.sort(function(x,y){
    return(x&1)-(y&1)||x-y

   })
   console.log(j)

   
