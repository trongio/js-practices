const arr = [1,2,3];

function forEach(arr, i) {
    if(!Array.isArray(arr)) {
        throw new Error('Input is not an array!');
    }
    if(!typeof(i)==='function') {
        throw new Error('Input is not a function!');
    }
    for(let k=0; k<arr.length; k++){
        i(arr[k],k,arr);
    }
};

forEach(arr, function(item, i, arr) {
    console.log(`Index: ${i}, Element: ${item}, Array: ${arr}`);
});