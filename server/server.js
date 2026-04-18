const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  res.json(Object.values(movieModel));
});

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID;

  const movie = movieModel[imdbID];

  if (movie) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
});


/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.put('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID;
  const movie = req.body;

  if (movieModel[imdbID]) {
    movieModel[imdbID] = movie;
    res.sendStatus(200);
  } else {
    movieModel[imdbID] = movie;
    res.status(201).json(movie);
  }
});

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

