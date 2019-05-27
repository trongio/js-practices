var arr = [1,2,3,4];
var sum=0;

for (var k of arr) {
  if(k%2==0 && k>3)
    sum=sum+k;
}
console.log(sum);