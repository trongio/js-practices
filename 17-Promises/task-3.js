const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

const send = () => new Promise((res, rej) => {
    get(url, (error, meta, body) => {
        const { data } = JSON.parse(body);
        meta.status === 200 ? res(data) : rej(`We have error, status code: ${meta.status}`);
    });
});


send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });