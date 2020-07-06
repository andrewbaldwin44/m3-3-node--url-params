'use strict';

const morgan = require('morgan');
const express = require('express');

const { top50Page, popularArtist, showSong, fourOhFour } = require('./handlers.js');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.get('/top50', top50Page);

app.get('/top50/song/:pagenum', showSong);

app.get('/top50/popular-artist', popularArtist);
app.get('*', fourOhFour);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
