var reverse = function(arr) {
    if (!(Array.isArray(arr))) {
        throw new Error('first parameter must be only : Array');
    }
    if (!arr.length) {
        throw new Error('Array is empty');
    }
    let len=arr.length;

    for(let k = 0; k < len/2; k++) {
        let tmp = arr[k];
        arr[k]=arr[len-k-1];
        arr[len-k-1]=tmp;
    }

    return arr;
};

const arr = [3,2,1,0];

console.log(reverse(arr));