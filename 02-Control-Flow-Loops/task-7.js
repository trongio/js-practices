var arr = [1,2,3,4];
var sum=0;

for (var k of arr) {
  if(k%2==0)
    sum=sum+k;
}
console.log(sum);