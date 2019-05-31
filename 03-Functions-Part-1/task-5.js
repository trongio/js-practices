function isPositive(n){
    var result = false;
    if(typeof(n)==='number') {
        if(n>0){
            result=true;
        }
    }
    else {
        result=false;
        throw new Error('parameter type is not a Number');
    }
    return result;
}

const arr = [1, 2, -4, 3, -9, -1, 7];
let newarr = [];

for(var i=0; i<arr.length; i++) {
    if(isPositive(arr[i])) {
        newarr.push(arr[i]);
    }
}

console.log(newarr);
console.log(isPositive(-3));
console.log(isPositive(3));
console.log(isPositive('s'));
