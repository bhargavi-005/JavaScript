function* v1(){
    yield 1;
    yield 2; yield 1;

}
function* v2(){
    yield* v1();
}
 const k =v2()
 console.log(k.next())
 console.log(k.next())
 console.log(k.next())
 console.log(k.next())
 console.log(k.next())