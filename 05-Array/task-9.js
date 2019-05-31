var arrayFill = function(filler, length) {
    if (!(typeof filler === 'number' || typeof filler === 'string' || typeof filler === 'object')) {
        throw new Error('first parameter must be only : Number, String, Object, Array');
    }
    if (!(typeof length === 'number')) {
        throw new Error('second parameter is not a Number');
    }

    let data = [];

    for(let k = 0; k < length; k++) {
        data.push(filler);
    }

    return data;
};

var arr = arrayFill('x',5);

console.log(arr);