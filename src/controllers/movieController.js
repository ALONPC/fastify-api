const boom = require("boom");
const Movie = require("../models/Movie");

// Make boom to handle errors
const boomifyError = error => {
  throw boom.boomify(error);
};

// Get all movies
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log("exports.getMovies -> movies", movies);
    return movies;
  } catch (error) {
    boomifyError(error);
  }
};

// Get single movie by id
exports.getSingleMovie = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("exports.getSingleMovie -> id", id);
    const movie = await Movie.findById(id);
    console.log("exports.getSingleMovie -> movie", movie);
    return movie;
  } catch (error) {
    boomifyError(error);
  }
};

// Add a new movie
exports.addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    console.log("exports.addMovie -> movie", movie);
    return movie.save();
  } catch (err) {
    boomifyError(error);
  }
};

// Update an existing movie
exports.updateMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = req.body;
    const { ...updateData } = movie;
    const update = await Movie.findByIdAndUpdate(id, updateData, { new: true });
    return update;
  } catch (err) {
    boomifyError(error);
  }
};

// Delete a movie
exports.deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findByIdAndRemove(id);
    return movie;
  } catch (err) {
    boomifyError(error);
  }
};
