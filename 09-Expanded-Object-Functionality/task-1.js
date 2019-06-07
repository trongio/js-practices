const Object.prototype.extend = (o, p) => {
    for (prop in p) {
        o[prop] = p[prop];
    }

    return o;
};

const data = { a: 'a' };
const source = { a: 'A', b: 'b' };
Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false