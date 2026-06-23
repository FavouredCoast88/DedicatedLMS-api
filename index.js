
require('dotenv').config();

const express = require('express');
const app = express();
const config = require('./config/config');
const port = config.port;
const morgan = require('morgan');
const cors = require('cors');



// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
const articleRoutes = require('./routes/articleRoutes');
const newsRoutes = require('./routes/newsRoutes');
const authRoutes = require('./routes/authRoutes');

// Error Handler
const errorHandler = require('./middleware/errorMiddleware');

// Home Route
app.get('/', (req, res) => {
    res.json({
        message: 'Dedicated News API is working!'
    });
});

// API Routes
app.use('/articles', articleRoutes);
app.use('/news', newsRoutes);
app.use('/auth', authRoutes);


// Error Middleware MUST be after all routes
app.use(errorHandler);

// Start Server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
 
module.exports = app;