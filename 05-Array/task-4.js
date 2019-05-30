const arr = [1,2,3];

function some(arr, i) {
    if(!Array.isArray(arr)) {
        throw new Error('Input is not an array!');
    }
    if(!typeof(i)==='function') {
        throw new Error('Input is not a function!');
    }
    let stat = false;
    for(let k=0; k<arr.length; k++){
        const old = arr[k];
        stat = i(old,k,arr);
        if(stat){
            break;
        }
    }
    return stat;
};

const result = some(arr, function(item, i, arr) {
    return item % 3 === 0;
});

console.log(result);