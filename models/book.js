const books = [
    {
        id: 123,
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        country: "Nigeria",
        language: "English",

    },
    {
        id: 453,
        title: "Golden Treasure",
        author: "Hans Christian Andersen",
        country: "Denmark",
        language: "Danish",

    },
    {
        id: 243,
        title: "Le Rime",
        author: "Dante Alighieri",
        country: "Italy",
        language: "Italian",

    },
    {
        id: 93,
        title: "Sense and Sensibility",
        author: "Jane Austen",
        country: "United Kingdom",
        language: "English",

    },
    {
        id: 528,
        title: "Le Vendatta",
        author: "Honor de Balzac",
        country: "France",
        language: "French",

    },
    {
        id: 645,
        title: "Happy Days",
        author: "Samuel Beckett",
        country: "Republic of Ireland",
        language: "French, English",

    },
    {
        id: 934,
        title: "Filocolo",
        author: "Giovanni Boccaccio",
        country: "Italy",
        language: "Italian",

    },
    {
        id: 82,
        title: "The Happy Prince",
        author: "Jorge Luis Borges",
        country: "Argentina",
        language: "Spanish",

    }
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteBook,
    update
}

function update(id, updateBook) {
    id = parseInt(id);
    const book = books.find(book => book.id === id);
    // book.book = updateBook.book;
    Object.assign(book,updateBook);
}

function deleteBook(id) {
    id = parseInt(id);
    const idx = books.findIndex(book => book.id === id);
    books.splice(idx, 1);
}

//Add a new book
function create(book) {
    //Add an ID
    books.id = Date.now() % 100000;
    books.push(book);
}

//Retrieve all books entries
function getAll() {
    return books;
}

//Retrieve all books entries
function getOne(id) {
    id = parseInt(id);
    return books.find(book => book.id === id);
}

