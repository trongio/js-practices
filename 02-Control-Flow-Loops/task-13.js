var arr = [2 -5, 9, 15, 0, 4];
let len = arr.length;
var sum=0;

for (let i = 0; i < len; i++){
    if(arr[i]>0){
        sum=sum+arr[i];
    }
}
console.log(sum);