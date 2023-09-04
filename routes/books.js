const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');

// All path starts with "/todos"

//GET /todos
router.get('/',booksCtrl.index);

//GET /todos/:id (show Functionality)
router.get('/:id',booksCtrl.show)

module.exports = router;
