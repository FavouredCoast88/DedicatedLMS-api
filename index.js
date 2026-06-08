
require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT;
const morgan = require('morgan');



// Middleware
app.use(express.json());
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
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



    
    