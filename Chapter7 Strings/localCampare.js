var arr=['D','F','z','V']
arr.sort(function(a,b){
    return a.localeCompare(b);
})
console.log(arr);