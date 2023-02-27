const m ={x:85,getX:function() {return this.x
    
}}

const un = m.getX;
const b = un.bind(m);
console.log(b());