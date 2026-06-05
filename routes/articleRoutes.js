const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');
// Define routes
router.get('/', articleController.getAllArticles);
router.post('/', articleController.createArticle);
router.get('/search', articleController.searchArticles);
router.get('/:id', articleController.getArticleById);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);
module.exports = router;