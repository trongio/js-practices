const f = array => {

    if (!(Array.isArray(array))) {
        throw new Error('Error: parameter type should be an array');
    }
 
    const newArr = array.flat(Infinity)
    let sum = 0;
 
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
 
    return sum;
 }
const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

 console.log(f(arr));