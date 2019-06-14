const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

const send = () => new Promise((res, rej) => {
    get(url, (error, meta, body) => {
        if (meta.status !== 200) {
            return rej(`We have error, status code: ${meta.status}`);
        }
        const { data } = JSON.parse(body);
        return res(data);
    });
});


send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });