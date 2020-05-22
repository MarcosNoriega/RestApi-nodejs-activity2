const {Router} = require('express');
const router = Router();

router.use('/api', require('./authors.router'));
router.use('/api', require('./books.router'));

module.exports = router;