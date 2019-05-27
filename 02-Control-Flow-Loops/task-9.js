var k=0;
for(var i=0; i<10; i++)
{
    for(var j=0; j<i; j++)
    {
        if(i%j==0){
            k++;
        }
    }
    if(k==1) {
        console.log(i);
    }
    k=0;
}
