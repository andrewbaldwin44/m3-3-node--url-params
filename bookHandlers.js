const booksPage = (req, res) => {
  res.render('pages/books', {books: books, title: '25 Books You\'ve Probably Already Read'});
};

const showBook = (req, res, next) => {
  const bookID = Number(req.params.booknum);

  books.forEach((book, index) => {
    if (book.id == bookID) {
      res.render('pages/book-page', {title: `Book #${index + 1}`, book: book});
    }
  });

  next();
};

const showGenre = (req, res, next) => {
  const genre = req.params.genre;
  const titleGenre = genre.charAt(0).toUpperCase() + genre.slice(1);
  const genreBooks = books.filter(book => book.type == genre);

  books.forEach(book => {
    if (book.type == genre) {
      res.render('pages/books', { title: `${titleGenre} books`, books: genreBooks });
    }
  });

  next();
}

const { books } = require('./data/books');
const { fourOhFour } = require('./songHandlers.js');

module.exports = { booksPage, showBook, showGenre };
