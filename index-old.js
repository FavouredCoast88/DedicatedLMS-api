const express = require('express');
const app = express();
const port = 3000;
//Allows Express to read JSON sent from Postman
app.use(express.json());
//Temp storage for articales
const articles = [];  //Like Java ArrayList, but in JavaScript it's just a regular array

/*
*Get /
* Test endpoint to make sure the API is working
*/
app.get('/', (req, res) => {
  res.json({message: 'Dedicated News API is working!'});
});   

/*
*Post /articles
*  Create a new article
*/
app.post('/articles', (req, res) => {
  const article = {id: articles.length + 1, title: req.body.title,author:req.body.author, content: req.body.content};
  articles.push(article);
  res.status(201).json({message: 'Article created successfully', article: article});
});

/*
*Get /articles
* Get all articles
*/
app.get('/articles', (req, res) => {
  res.json(articles);
});
//Current articles in the system
/*
[
    {
        "title": "NodeJS Basics",
        "author": "Jannie",
        "content": "Learning Express"
    },
    {
        "title": "Breaking News",
        "author": "Editor",
        "content": "Something happened today"
    },
    {
        "title": "JavaScript Tips",
        "author": "Jannie",
        "content": "Useful tricks"
    }
]

*/
app.get('/articles/search', (req, res) => {
  const searchTerm = req.query.title;
  const matchingArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
  res.json(matchingArticles);
});

//"/articles/:id"= route parameter
//Add way to delete articles by ID
app.delete('/articles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const articleIndex = articles.findIndex(article => article.id === id);

  if(articleIndex === -1) {
    return res.status(404).json({message: 'Article not found'});
  }
  articles.splice(articleIndex, 1);
  res.json({message: 'Article deleted successfully'});
});

app.get('/articles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const article = articles.find(article => article.id === id);

  if(!article) {
    return res.status(404).json({message: 'Article not found'});
  }
  res.json(article);
});

app.put('/articles/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const article = articles.find(article => article.id === id);

  if(!article) {
    return res.status(404).json({message: 'Article not found'});
  }
  article.title = req.body.title || article.title;
  article.author = req.body.author || article.author;
  article.content = req.body.content || article.content;

  res.json({message: 'Article updated successfully', article: article});
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});