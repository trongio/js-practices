function f (n){
    if(Array.isArray(n)===true) {
        if(n.length != 0){
            printarray(n);
            function printarray(n){
                if(n.length>0) {
                    console.log(n[0]);
                    n.splice(0, 1);
                }
                else {
                    return;
                }
                printarray(n);
            }
        }
        else{
            throw new Error("parameter can't be an empty");
        }
    }
    else {
        throw new Error('parameter type should be an array');
    }
}


f([1,2,3]);
f('Content');
f([]);