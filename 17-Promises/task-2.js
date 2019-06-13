const getCustomers = (customers, source) => {
    
    const promise = new Promise((res, rej) => {

        const result = customers.map(customer => {

            const match = source.find(country => country.id === customer.id);

            if ( !match ) {
                rej(`We don't have information about country for this customer: ${customer.name}`);
            }

            return customer.verified ? {...customer, ...match} : customer
        });

        return res(result);
    });

    return promise;
} 

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex'
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',   
        country: 'poland'
    }
];


getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))