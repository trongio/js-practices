let person = {
    rate: '',
    salary: '',
};

Object.defineProperty(person, 'rate', {
    configurable: false,
    writable: true,
    enumerable: false
});

Object.defineProperty(person, 'salary', {
    value: this.rate,
    writable: false
}); 

person.rate = 30;
console.log(person.salary);