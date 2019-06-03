const upperCaseFirst = function(string){
    if ( typeof string !== 'string' ){
        throw new Error('Parameter Should be string');
    }
    let result='';
    if(string.length > 0){
        let uppercase=string.toUpperCase();
        uppercase = uppercase[0];
        result=uppercase+string.substring(1);
    }
    return result;
}

console.log(upperCaseFirst('pitter')); // Pitter
console.log(upperCaseFirst('')); // ''