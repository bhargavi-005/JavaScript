const r ={key :43}
Object.seal(r)

r.key =9

console.log(r.key)

delete r.key;
console.log(r.key)
