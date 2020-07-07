const booksPage = (req, res) => {
  res.render('pages/books', {books: books, title: '25 Books You\'ve Probably Already Read'});
};

const showBook = (req, res) => {
  const bookID = Number(req.params.booknum);

  books.forEach((book, index) => {
    if (book.id == bookID) {
      res.render('pages/book-page', {title: `Book #${index + 1}`, book: book});
    }
  });

  fourOhFour(req, res);
};

const { books } = require('./data/books');
const { fourOhFour } = require('./songHandlers.js');

module.exports = { booksPage, showBook };
