class Customers {

    constructor() {
        this._customers = [];
    }

    *[Symbol.iterator]() {

        for (const customer of this._customers.filter(customer => customer.verified === true)) {
            yield customer;
        }

    }

    add(user) {

        if (typeof user !== 'object') {
            throw new Error('First parameter must be object.');
        }

        if (typeof user.name !== 'string') {
            throw new Error('Name is required.');
        }

        return this._customers.push(user);
    }

}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}