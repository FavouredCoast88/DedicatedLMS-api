const newsService = require('../services/newsService');

const getExternalNews = async (req, res) => {

    try {

        const news =
            await newsService.getExternalNews();

        res.json(news);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch external news'
        });

    }
};

module.exports = {
    getExternalNews
};