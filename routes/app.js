const express = require('express');
        app = express();

app.get('/', (req, res) => {
    
    res.status(200).json({
        status: 'ok',
        message: 'Todo bien por aquí'
    });
});

module.exports = app;