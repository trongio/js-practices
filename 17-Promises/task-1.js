const isCustomerVerified = (data) => {
    
    const promise = new Promise((res, rej) => {
        return data.verified ? res(true) : rej('Customer is not verified.');
    });

    return promise;
} 


const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))
    
isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified