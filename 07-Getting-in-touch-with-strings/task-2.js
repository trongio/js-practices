const checkSpam = function(source, example){
    if ( typeof source !== 'string' || typeof example !== 'string'){
        throw new Error('Parameter Should be string');
    }
    source= source.toLowerCase();
    example = example.toLowerCase();
    const result=source.indexOf(example);
    if (result>=0){
        return true;
    }
    else {
        return false;
    }
    
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx')); // true
console.log(checkSpam('pitterxxx@gmail.com', 'XXX')); // true