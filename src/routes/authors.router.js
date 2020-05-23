const {Router} = require('express');
const router = Router();
const _ = require('lodash');

const authors = require('../data/authors.json');

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
        _.each(authors, (author) => {
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



module.exports = router;