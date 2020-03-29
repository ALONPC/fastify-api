import mongoose from "mongoose";

// Define schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genres: [String],
  director: String,
  cast: [String],
  runtime: Number,
  country: String,
  budget: Number,
  score: {
    type: Map,
    of: String
  }
});

// Export it so we can use it in our app
module.exports = mongoose.model("Movie", movieSchema);
