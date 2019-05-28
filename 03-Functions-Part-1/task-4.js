function f(n){
    var result;
    if(typeof(n)==='number'){
        if(n>0 && n<8){
            switch(n) {
                case 1:
                    result="kvira";
                    break;
                case 2:
                    result="orshabati";
                    break;
                case 3:
                    result="samshabati";
                    break;
                case 4:
                    result="otxshabati";
                    break;
                case 5:
                    result="xutshabati";
                    break;
                case 6:
                    result="paraskevi";
                    break;
                case 7:
                    result="shabati";
                    break;
                default:
                    result="bolshe netu";
              }
        }
        else {
            throw new Error('parameter should be in the range of 1 to 7');
        }
    }
    else {
        throw new Error('parameter type is not a Number');
    }
    return result;
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('1'));