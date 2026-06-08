
const articleService = require('../services/articleService');
const logger = require('../services/logger');
//GET /articles
const getAllArticles = (req, res) => {
    const articles = articleService.getAllArticles();
    res.json(articles);
};
//POST /articles
const createArticle = (req, res) => {

    const article = articleService.createArticle(
        req.body.title,
        req.body.author,
        req.body.content
    );

    res.status(201).json({
        message: 'Article created successfully',
        article
    });
    logger.info('Article created');
};

//GET /articles/:id
const getArticleById = (req, res) => {

    const id = parseInt(req.params.id);

    const article = articleService.getArticleById(id);

    if (!article) {
        return res.status(404).json({
            message: 'Article not found'
        });
    }

    res.json(article);
};

//GET /articles/search?title=node
const searchArticles = (req, res) => {

    const searchTerm = req.query.title;

    const matchingArticles =
        articleService.searchArticles(searchTerm);

    res.json(matchingArticles);
};

//DELETE /articles/:id
const deleteArticle = (req, res) => {

    const id = parseInt(req.params.id);

    const deleted =
        articleService.deleteArticle(id);

    if (!deleted) {
        return res.status(404).json({
            message: 'Article not found'
        });
    }
    res.json({
        message: 'Article deleted successfully'
    });
};

//PUT /articles/:id
const updateArticle = (req, res) => {

    const id = parseInt(req.params.id);

    const article = articleService.updateArticle(
        id,
        req.body.title,
        req.body.author,
        req.body.content
    );
    if (!article) {
        return res.status(404).json({
            message: 'Article not found'
        });
    }
    res.json({
        message: 'Article updated successfully',
        article
    });
};

const publishArticle = (req, res) => {

    const id = parseInt(req.params.id);

    const article =
        articleService.publishArticle(id);

    if (!article) {
        return res.status(404).json({
            message: 'Article not found'
        });
    }

    res.json({
        message: 'Article published successfully',
        article
    });
};

module.exports = {
  getAllArticles,
  createArticle,
  getArticleById,
  searchArticles,
  deleteArticle,
  updateArticle,
  publishArticle
};