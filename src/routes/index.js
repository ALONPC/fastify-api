const movieController = require("../controllers/movieController");

const routes = [
  {
    method: "GET",
    url: "/api/movies",
    handler: movieController.getMovies
  },
  {
    method: "GET",
    url: "/api/movies/:id",
    handler: movieController.getSingleMovie
  },
  {
    method: "POST",
    url: "/api/movies",
    handler: movieController.addMovie
    // schema: documentation.addMovieSchema
  },
  {
    method: "PUT",
    url: "/api/movies/:id",
    handler: movieController.updateMovie
  },
  {
    method: "DELETE",
    url: "/api/movies/:id",
    handler: movieController.deleteMovie
  }
];

module.exports = routes;
