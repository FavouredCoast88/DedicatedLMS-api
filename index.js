const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/users', (req, res) => {
    console.log(req.query.name);
  res.send('Hello Jannie!');
});
app.post('/blog', (req, res) => {
    console.log(req.body);
  res.send('Hello Jannie!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});