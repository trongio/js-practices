function f(){
    var result = 0;
    for(item of arguments)
    {
        if(typeof(item)==='number') {
            result = (arguments[0]-arguments[1])/arguments[2];
        }
        else {
            throw new Error('all parameters type should be a Number');
        }
    }
    return result;
}

console.log(f(9,3,2));
console.log(f(150,50,10));
console.log(f('s',9,3));