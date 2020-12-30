const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Main page<h1>');
})

module.exports = router;