// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true
});
const mongoose = require("mongoose");

// Connect to DB
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost/movies");
    console.log("Connected to database");
  } catch (error) {
    console.log("An error occurred when trying to connect to database");
  }
};
connectDb();

// Same as this...
// mongoose
//   .connect("mongodb://localhost/movies")
//   .then(() => {
//     console.log("MongoDB connected...");
//   })
//   .catch(error => {
//     console.log("An error ocurred", error);
//   });

// Test object
const movie = {
  title: "1917",
  year: 2019,
  genres: ["Drama", "War"],
  director: "Sam Mendes",
  duration: { measure: "minutes", quantity: 119 }
};

// Declare a route
fastify.get("/movies", async (request, reply) => [movie]);

// Running the server
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(
      `server listening on port ${fastify.server.address().port}`
    );
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
