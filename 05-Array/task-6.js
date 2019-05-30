const arr = [1,2,3];
const acc = 0;

function reduceRight(arr, i, acc) {
    if(!Array.isArray(arr)) {
        throw new Error('Input is not an array!');
    }
    if(!typeof(i)==='function') {
        throw new Error('Input is not a function!');
    }
    if(!typeof(i)==='number' && !typeof(i)==='string') {
        throw new Error('Input is not a number or string!');
    }
    let tmp = acc;
    for(let k=arr.length-1; k>=0; k--){
        tmp = i(tmp,arr[k],k,arr);
    }
    return tmp;
};

const sum = reduceRight(arr, function(acc, item, i, arr) {
    return acc + item;
},acc);

console.log(sum);