const arr = [1,2,3];

function filter(arr, i) {
    if(!Array.isArray(arr)) {
        throw new Error('Input is not an array!');
    }
    if(!typeof(i)==='function') {
        throw new Error('Input is not a function!');
    }
    const arr2 = [];
    for(let k=0; k<arr.length; k++){
        const old = arr[k];
        const stat = i(old,k,arr);
        if(stat){
            arr2.push(old);
        }
    }
    return arr2;
};

const filtered = filter(arr, function(item, i, arr) {
    return item % 3 === 0;
});

console.log(filtered);