function f(){
    var result = 0;
    for(item of arguments)
    {
        if(typeof(item)==='number') {
            result=result+item;
        }
        else {
            throw new Error('all parameters type should be a Number');
        }
    }
    return result;
}

console.log(f(1,2,3));
console.log(f(1,1,1,1,1,1,1,1));
console.logt(f(1,2,'s',4));