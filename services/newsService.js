const axios = require('axios');

const getExternalNews = async () => {

    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    );

    return response.data.slice(0, 5);
};

module.exports = {
    getExternalNews
};