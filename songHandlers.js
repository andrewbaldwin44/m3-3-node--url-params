const top50Page = (req, res) => {
  res.render('pages/top50', {songs: top50, title: 'Top 50 Songs Streamed on Spotify'});
};

const popularArtist = (req, res) => {
  let count = 0;
  let artist = undefined;

  const artistCount = top50.reduce((songCount, song) => {
    songCount[song.artist]
      ? songCount[song.artist].push(song)
      : songCount[song.artist] = [song];

    const currentCount = songCount[song.artist].length;
    if (currentCount > count) {
      count = currentCount;
      artist = song.artist;
    }

    return songCount;
  }, {});

  res.render('pages/top50', {songs: artistCount[artist], title: 'Most popular Artist'});
};

const showSong = (req, res) => {
  const songNumber = Number(req.params.pagenum);

  top50.forEach(song => {
    if (song.rank == songNumber) {
      res.render('pages/song-page', {title: `Song #${songNumber}`, song: song});
    }
  });

  fourOhFour(req, res);
};

const fourOhFour = (req, res) => {
  res.status(404);
  res.render('pages/fourOhFour', {
      title: 'I got nothing',
      path: req.originalUrl
  });
};

const { top50 } = require('./data/top50');

module.exports = { top50Page, popularArtist, showSong, fourOhFour };
