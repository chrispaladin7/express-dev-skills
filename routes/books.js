const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');

// All path starts with "/books"

//GET /books
router.get('/',booksCtrl.index);

//Get /books/new
router.get('/new',booksCtrl.new)

//GET /books/:id (show Functionality)
router.get('/:id',booksCtrl.show)

//GET /books/:id
router.get('/:id/edit',booksCtrl.edit)

//POST /books
router.post('/',booksCtrl.create)

//Delete /books/:id
router.delete('/:id',booksCtrl.delete)

//Put /books/:id
router.put('/:id',booksCtrl.update)


module.exports = router;
