const articles =[];
//GET /articles
const getAllArticles = (req, res) => {
  res.json(articles);
};
//POST /articles
const createArticle = (req, res) => {

    const article = {
        id: articles.length + 1,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    };

    articles.push(article);

    res.status(201).json({message: 'Article created successfully', article: article});
};

//GET /articles/:id
const getArticleById = (req, res) => {
    const id = parseInt(req.params.id);
    const article = articles.find(article => article.id === id);

    if(!article) {
        return res.status(404).json({message: 'Article not found'});
    }
    res.json(article);
};

//GET /articles/search?title=node
const searchArticles = (req, res) => {
    const searchTerm = req.query.title;
    const matchingArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
    res.json(matchingArticles);
};

//DELETE /articles/:id
const deleteArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const articleIndex = articles.findIndex(article => article.id === id);

    if(articleIndex === -1) {
        return res.status(404).json({message: 'Article not found'});
    }

    articles.splice(articleIndex, 1);
    res.json({message: 'Article deleted successfully'});
};

//PUT /articles/:id
const updateArticle = (req, res) => {
    const id = parseInt(req.params.id);
    const article = articles.find(article => article.id === id);

    if(!article) {
        return res.status(404).json({message: 'Article not found'});
    }
    article.title = req.body.title;
    article.author = req.body.author;
    article.content = req.body.content;
    res.json({message: 'Article updated successfully', article: article});
};

module.exports = {
  getAllArticles,
  createArticle,
  getArticleById,
  searchArticles,
  deleteArticle,
  updateArticle
};