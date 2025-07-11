const express = require("express");
const { Pool } = require("pg");
const { ApolloServer } = require("apollo-server-express");
const baseSchema = require("./graphql/schema");

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection pool configuration
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:root@localhost:5432/prueba_tecnica",
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Make the database pool accessible in req
app.use((req, res, next) => {
  req.db = pool;
  next();
});

// REST API routes
const productosRouter = require("./routes/productos");
app.use("/api/productos", productosRouter);

// Configure Apollo Server with typeDefs and resolvers
async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: baseSchema.typeDefs,
    resolvers: baseSchema.resolvers,
    context: ({ req }) => ({ db: pool }),
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err);
    res
      .status(err.status || 500)
      .json({ error: err.message || "Internal Server Error" });
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(
      `GraphQL available at http://localhost:${port}${server.graphqlPath}`
    );
  });
}

startApolloServer();

module.exports = app;
