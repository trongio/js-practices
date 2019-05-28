function isEven (n){
    var k=false;
    if(typeof(n)==='number') {
        if(n%2==0){
            k=true;
        }
    }
    else {
        throw new Error('parameter type is not a Number');
    }
    return k;
}

console.log(isEven(3));
console.log(isEven(4));
console.log(isEven('Content'));
