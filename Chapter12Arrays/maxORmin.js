var a=[1,2,3,4,5,6,7,8]
var t=Math.min.apply(null,a)
console.log(t)


var h=Math.max(...a)
console.log(h)

//............
var max=a[0];
len=a.length
for(var i=1;i<len;i++){
    var c=a[i];
    if(c>max){
        max=c;
    }


}
console.log(max)