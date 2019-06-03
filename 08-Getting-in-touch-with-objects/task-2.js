let person = {
    rate: null,
    get salary(){
        return this.rate*
    }
};

Object.defineProperty(person, 'rate', {
    configurable: false,
    writable: true,
    enumerable: false
});


person.rate = 30;
console.log(person.salary);