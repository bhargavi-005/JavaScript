function cat(sound){
    console.log("meau")
    sound()
}
cat(function(heloo){
    // setTimeout(heloo,1000)
    console.log("meaow");
})

//.................asynchronusly
function doSomethingAsync(then) {
    setTimeout(then, 100);
    console.log('Doing something asynchronously');
   }
   doSomethingAsync(function() {
    console.log('Done');
   });
   console.log('Doing something else');
   