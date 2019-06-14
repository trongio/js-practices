const get = require('fetch').fetchUrl;
const url = 'https://lab.lectrum.io/geo/api/countries';

class Countries {

    constructor(url) {
        if(typeof url !== 'string') {
            throw new Error('Url must be string');
        }
    }

    send(size) {
        if(typeof size !== 'number') {
            throw new Error('Size must be number');
        }

        return new Promise((res, rej) => {
            get(url+'?size='+size, (error, meta, body) => {
                if (meta.status !== 200) {
                    return rej(`We have error, status code: ${meta.status}`);
                }
                const { data } = JSON.parse(body);
                return res(data);
            });
        }); 
    }

}

const countries = new Countries(url);

(async() => {
    try {
        const data = await countries.send(2);
        console.log(data); // array of countries
    } catch (error) {
        console.log(error);
    }
})();