const express = require('express');
const router = express.Router();

const validateArticle = require('../middleware/validationMiddleware');
const articleController = require('../controllers/articleController');
const authenticateToken = require('../middleware/authMiddleware');

// Define routes
router.get('/', articleController.getAllArticles);
router.post('/',authenticateToken,validateArticle,articleController.createArticle);
router.get('/search', articleController.searchArticles);
router.get('/:id', articleController.getArticleById);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);
router.patch('/:id/publish',articleController.publishArticle);
module.exports = router;