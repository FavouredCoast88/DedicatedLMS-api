const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const articleRoutes = require('./routes/articleRoutes');
app.get('/', (req, res) => {
  res.json({message: 'Dedicated News API is working!'});
});

app.use('/articles', articleRoutes);
app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
