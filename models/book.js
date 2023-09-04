const books = [
    {
        id: 12343,
        author: "Chinua Achebe",
        country: "Nigeria",
        imageLink: "images/things-fall-apart.jpg",
        language: "English",

    },
    {
        id: 45343,
        author: "Hans Christian Andersen",
        country: "Denmark",
        imageLink: "images/fairy-tales.jpg",
        language: "Danish",

    },
    {
        id: 24344,
        author: "Dante Alighieri",
        country: "Italy",
        imageLink: "images/the-divine-comedy.jpg",
        language: "Italian",

    },
    {
        id: 93434,
        author: "Jane Austen",
        country: "United Kingdom",
        imageLink: "images/pride-and-prejudice.jpg",
        language: "English",

    },
    {
        id: 52812,
        author: "Honor de Balzac",
        country: "France",
        imageLink: "images/le-pere-goriot.jpg",
        language: "French",

    },
    {
        id: 64445,
        author: "Samuel Beckett",
        country: "Republic of Ireland",
        imageLink: "images/molloy-malone-dies-the-unnamable.jpg",
        language: "French, English",

    },
    {
        id: 93488,
        author: "Giovanni Boccaccio",
        country: "Italy",
        imageLink: "images/the-decameron.jpg",
        language: "Italian",

    },
    {
        id: 82327,
        author: "Jorge Luis Borges",
        country: "Argentina",
        imageLink: "images/ficciones.jpg",
        language: "Spanish",

    }
]

module.exports = {
    getAll,
    getOne
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

