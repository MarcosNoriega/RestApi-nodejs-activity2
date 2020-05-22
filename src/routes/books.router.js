const {Router} = require('express');
const router = Router();
const _ = require('lodash');

const books = require('../data/books.json');
const authors = require('../data/authors.json');

router.get('/books', (req, res) => {

    _.each(books, book => {

        let author = _.find(authors, (author) => {
            if (book.authorId == author.id) {
                return true;
            }
        });

        book['author'] = author;

    });

    res.send(books);
});

module.exports = router;