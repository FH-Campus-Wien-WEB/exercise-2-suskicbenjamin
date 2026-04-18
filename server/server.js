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
  const movies = [
    {
      title: "The Thing",
      released: "1982-06-25",
      runtime: 109,
      genres: ["Horror", "Mystery", "Sci-Fi"],
      directors: ["John Carpenter"],
      writers: ["Bill Lancaster", "John W. Campbell Jr."],
      actors: ["Kurt Russell", "Wilford Brimley", "Keith David"],
      plot: "A research team in Antarctica is hunted by a shape-shifting alien.",
      poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      metascore: 57,
      imdbRating: 8.2
    },
    {
      title: "Blade Runner",
      released: "1982-06-25",
      runtime: 117,
      genres: ["Sci-Fi", "Thriller"],
      directors: ["Ridley Scott"],
      writers: ["Hampton Fancher", "David Webb Peoples"],
      actors: ["Harrison Ford", "Rutger Hauer", "Sean Young"],
      plot: "A blade runner must pursue and terminate replicants who have returned to Earth.",
      poster: "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg",
      metascore: 84,
      imdbRating: 8.1
    },
    {
      title: "Oppenheimer",
      released: "2023-07-21",
      runtime: 180,
      genres: ["Biography", "Drama", "History"],
      directors: ["Christopher Nolan"],
      writers: ["Christopher Nolan", "Kai Bird", "Martin J. Sherwin"],
      actors: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
      plot: "The story of J. Robert Oppenheimer and the development of the atomic bomb.",
      poster: "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_SX300.jpg",
      metascore: 88,
      imdbRating: 8.4
    }
  ];

  res.json(movies);
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  /* Task 2.1. Remove the line below and add the 
    functionality here */
  res.sendStatus(404)
})

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

