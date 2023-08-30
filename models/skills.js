const books = [
    {   
        id:12343,
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        id:45343,
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        id:24344,
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        id:93434,
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "images/pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
        "pages": 226,
        "title": "Pride and Prejudice",
        "year": 1813
    },
    {
        id:52812,
        "author": "Honor de Balzac",
        "country": "France",
        "imageLink": "images/le-pere-goriot.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
        "pages": 443,
        "title": "Le P\u00e8re Goriot",
        "year": 1835
    },
    {   
        id:64445,
        "author": "Samuel Beckett",
        "country": "Republic of Ireland",
        "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
        "pages": 256,
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "year": 1952
    },
    {
        id:93488,
        "author": "Giovanni Boccaccio",
        "country": "Italy",
        "imageLink": "images/the-decameron.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
        "pages": 1024,
        "title": "The Decameron",
        "year": 1351
    },
    {
        id:82327,
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "imageLink": "images/ficciones.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Ficciones\n",
        "pages": 224,
        "title": "Ficciones",
        "year": 1965
    },
    {
        id:3424234,
        "author": "Emily Bront\u00eb",
        "country": "United Kingdom",
        "imageLink": "images/wuthering-heights.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
        "pages": 342,
        "title": "Wuthering Heights",
        "year": 1847
    },
    {
        id:42329,
        "author": "Albert Camus",
        "country": "Algeria, French Empire",
        "imageLink": "images/l-etranger.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
        "pages": 185,
        "title": "The Stranger",
        "year": 1942
    },
    {
        id:294774,
        "author": "Paul Celan",
        "country": "Romania, France",
        "imageLink": "images/poems-paul-celan.jpg",
        "language": "German",
        "link": "\n",
        "pages": 320,
        "title": "Poems",
        "year": 1952
    },
    {
        id:897423,
        "author": "Louis-Ferdinand C\u00e9line",
        "country": "France",
        "imageLink": "images/voyage-au-bout-de-la-nuit.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night\n",
        "pages": 505,
        "title": "Journey to the End of the Night",
        "year": 1932
    },
    {
        id:15098,
        "author": "Miguel de Cervantes",
        "country": "Spain",
        "imageLink": "images/don-quijote-de-la-mancha.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Don_Quixote\n",
        "pages": 1056,
        "title": "Don Quijote De La Mancha",
        "year": 1610
    },
    {
        id:309823,
        "author": "Geoffrey Chaucer",
        "country": "England",
        "imageLink": "images/the-canterbury-tales.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
        "pages": 544,
        "title": "The Canterbury Tales",
        "year": 1450
    }
]

module.exports={
    getAll,
    getOne
}

//Retrieve all books entries
function getAll(){
    return books;
}

//Retrieve all books entries
function getOne(id) {
    id = parseInt(id);
    return books.find(books => books.id === id);
}
