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

app.get('articles/search', (req, res) => {
  const searchTerm = req.query.title;
  const matchingArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
  res.json(matchingArticles);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});