function getDivisors (n){
    var divisors=[];
    if(typeof(n)==='number') {
        if(n>0){
            for(let i=0; i<=n; i++)
            {
                if(n%i==0) divisors.push(i);
            }
        }
        else{
            throw new Error("parameter can't be a 0");
        }
    }
    else {
        throw new Error('parameter type is not a Number');
    }
    return divisors;
}

console.log(getDivisors(12));
console.log(getDivisors(100));
console.log(getDivisors('Content'));
console.log(getDivisors(0));
