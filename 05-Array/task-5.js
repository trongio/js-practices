const arr = [1,2,3];

function reduce(arr, i, acc) {
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
    for(let k=0; k<arr.length; k++){
        tmp = i(tmp,arr[k],k,arr);
    }
    return tmp;
};

const sum = reduce(arr, function(acc, item, i, arr) {
    return acc + item;
},0);

console.log(sum);