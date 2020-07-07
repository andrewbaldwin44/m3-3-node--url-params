const booksPage = (req, res) => {
  res.render('pages/books', {books: books, title: '25 Books You\'ve Probably Already Read'});
};

const { books } = require('./data/books');

module.exports = { booksPage };
