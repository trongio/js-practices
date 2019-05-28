function isPositive(n){
    var k = false;
    if(typeof(n)==='number'){
        k=true;
    }
    else{
        throw new Error('parameter type is not a Number');
    }
    return k;
}

var arr=[1, 2, -4, 3, -9, -1, 7];
var newarr=[];
var len=arr.length

for(let i=0; i<len; i++){
    if(isPositive(arr[i])===true && arr[i] > 0) {
        newarr.push(arr[i]);
    }
}

len=newarr.length;

for(let i=0; i<len; i++){
    console.log(newarr[i]);
}

