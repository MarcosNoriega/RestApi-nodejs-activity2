const {Router} = require('express');
const router = Router();

const authors = require('../data/authors.json');

router.get('/authors', (req, res) => {
    return res.json(authors);
});

module.exports = router;