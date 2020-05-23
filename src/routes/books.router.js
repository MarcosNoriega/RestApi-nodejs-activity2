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

    res.json(books);
});

router.post('/book/create', (req, res) => {
    const {name, authorId} = req.body;

    if (name && authorId) {

        let author = _.find(authors, (author) => {
            if (author.id == authorId) {
                return true;
            }
        });

        if (!author) {
            return res.status(404).json({message: "author not found. you cannot save this book. first you must save the author"});
        }

        let book = req.body;
        book['id'] = books.length + 1;

        books.push(book);

        res.json({message: "book saved success"});
    }
    else 
    {
        res.status(400).json({message: "bad request"});
    }
});

module.exports = router;