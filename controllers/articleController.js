const articles =[];

const getAllArticles = (req, res) => {
  res.json(articles);
};

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
module.exports = {
  getAllArticles,
  createArticle,
  articles
};