const {Router} = require('express');
const router = Router();
const _ = require('lodash');

const authors = require('../data/authors.json');
const books = require('../data/books.json');

router.get('/authors', (req, res) => {
    return res.json(authors);
});

router.post('/author/create', (req, res) => {
    const {name, lastname} = req.body;

    if (name && lastname) {
        let author = req.body;
        author['id'] = authors.length + 1;

        authors.push(author);

        res.json({message: "author saved success"});
    }
    else 
    {
        res.status(400).json({message: "bad request"});
    }

    

});

router.put('/author/update/:id', (req, res) => {
    const {id} = req.params;
    const {name, lastname} = req.body;

    if (name && lastname) {
        _.each(authors, author => {
            if (author.id == id) {
                author.name = name;
                author.lastname = lastname;
            }
        });
    
        res.json({message: "author updated success"});
    }
    else 
    {
        res.status(400).json('bad request');
    }

   

});

router.delete('/author/delete/:id', (req, res) => {
    const {id} = req.params;

    let book = _.find(books, book => {
        if (book.authorId == id) {
            return true
        }
    });

    if (book) {
        return res.status(409).json({message: 'you cannot remove this author. integrity problem in database'});
    }

    _.remove(authors, author => {
        if (author.id == id) {
            return true;
        }
    });

    return res.json({message: 'author removed successfy'});
});



module.exports = router;