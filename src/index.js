// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true
});

// Declare a route
fastify.get("/", async (request, reply) => ({ hello: "world" }));

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
