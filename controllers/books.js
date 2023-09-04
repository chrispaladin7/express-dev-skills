const Book = require('../models/book');

module.exports = {
    index,
    show
};

function show(req, res) {
    res.render('books/show', {
        book: Book.getOne(req.params.id),
        title: 'Book Authors'
    });
}

function index(req, res) {
    res.render('books/index', {
        books: Book.getAll(),
        title: 'All Authors'
    });
}