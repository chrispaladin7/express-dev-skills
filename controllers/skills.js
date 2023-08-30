const Book = require('../models/skills');

module.exports = {
    index,
    show
};

function show(req, res) {
    res.render('skills/index', {
        book: Book.getOne(req.param.id)
    });
}

function index(req, res) {
    res.render('skills/index', {
        books: Book.getAll()
    });
}