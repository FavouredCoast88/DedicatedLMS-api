const validateArticle = (req, res, next) => {

    const { title, author, content } = req.body;

    if (!title || title.length < 3) {
        return res.status(400).json({
            message: 'Title must be at least 3 characters'
        });
    }

    if (!author) {
        return res.status(400).json({
            message: 'Author is required'
        });
    }

    if (!content) {
        return res.status(400).json({
            message: 'Content is required'
        });
    }

    next();
};
module.exports = validateArticle;