const truncate = function(string, maxlength){
    if ( typeof string !== 'string' ){
        throw new Error('Parameter Should be string');
    }
    if ( typeof maxlength !== 'number' ){
        throw new Error('Parameter Should be number');
    }
    let result=string;
    if(string.length>maxlength){
        result='';
        result=string.slice(0,maxlength-3)+'...';
    }
    return result;
}

console.log(truncate('I wanna to say next thing about this topic', 22)); // 'I wanna to say next...'