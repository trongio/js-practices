const extractCurrencyValue = function(source){
    if ( typeof source !== 'string' ){
        throw new Error('Parameter Should be string');
    }
    let result=source.replace('$','');
    let finalres = parseInt(result)
    return finalres;
}

console.log(extractCurrencyValue('1$20')); // 120