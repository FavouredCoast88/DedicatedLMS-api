const jwt = require('jsonwebtoken');

const login = (req, res) => {

    const username = req.body.username;

    const user = {
        username: username
    };

    const token = jwt.sign(
        user,
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({
        token
    });
};

module.exports = {
    login
};