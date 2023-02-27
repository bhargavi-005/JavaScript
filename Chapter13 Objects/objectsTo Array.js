var obj = {
    a: "hello",
    b: "this is",
    c: "javascript!",
   };
   var ss=Object.keys(obj).map(function(key){
    return obj[key]
   })
   console.log(ss)