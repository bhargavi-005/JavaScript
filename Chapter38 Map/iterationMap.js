const m= new Map([[1, 2], [3, 4]]);
console.log(m)
for (const [k,v]of m){
    console.log(`k:${k},v:${v}`)
}