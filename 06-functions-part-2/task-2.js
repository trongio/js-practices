const mix = (...functions) => {
    let tmp;
    for (const f of functions) {
        tmp=f(tmp);
    }
    return tmp;
};


console.log(mix(() => {
    return 0;
}, (k) => {
    return k + 1;
}, (k) => {
    return k * 2;
}))