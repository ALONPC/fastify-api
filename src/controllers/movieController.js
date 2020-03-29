import boom from "boom";
import Movie from "../models/Movie";

const boomifyError = (error) => { throw boom.boomify(error) }

// Get all movies
exports.getMovies = async((req, res) => {
    try {
        const movies = await Movie.find()
        console.log("exports.getMovies -> movies", movies)
        return movies;
    } catch(error) {
        boomifyError(error);
    }
})

// Get single movie by id
exports.getSingleMovie = async ((req, res) => {
    try {
        const id = req.params.id;
        console.log("exports.getSingleMovie -> id", id)
        const movie = await Movie.findById(id)
        console.log("exports.getSingleMovie -> movie", movie)
        return movie;
    } catch (error) {
        boomifyError(error);
    }
})