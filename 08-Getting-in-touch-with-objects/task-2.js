var today = new Date();
let person = {
    rate: null,
    get salary(){
        return this.rate*today.getDate();
    }
};

Object.defineProperty(person, 'rate', {
    configurable: false,
    writable: true,
    enumerable: false
});


person.rate = 30;
console.log(person.salary);