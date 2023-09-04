const Book = require('../models/book');

module.exports = {
    index,
    show,
    new:newBook,
    create,
    delete:deleteBook,
    edit,
    update
};

function update(req,res){
    Book.update(req.params.id, req.body);
    res.redirect(`/books/${req.params.id}`);
}

function edit(req,res){
    const book = Book.getOne(req.params.id);
    res.render('books/edit',{
        title: 'Edit books',
        book
    })
}

function deleteBook(req,res){
    Book.deleteBook(req.params.id);
    res.redirect('/books');
}

function create(req,res){
    Book.create(req.body);
    res.redirect('/books');
}

function newBook(req,res){
    res.render('books/new',{
        title: 'New Book'
    });
}

function show(req, res) {
    res.render('books/show', {
        book: Book.getOne(req.params.id),
        title: 'Books'
    });
}

function index(req, res) {
    res.render('books/index', {
        books: Book.getAll(),
        title: 'List Of All Books'
    });
}