const express = require('express');
const { Pool } = require('pg');
const { ApolloServer } = require('apollo-server-express');
const baseSchema = require('./graphql/schema');

const app = express();
const port = process.env.PORT || 3000;

// Configuración del pool de conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:root@localhost:5432/prueba_tecnica'
});

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Hacer accesible el pool de conexión en req
app.use((req, res, next) => {
  req.db = pool;
  next();
});

// Rutas REST API
const productosRouter = require('./routes/productos');
app.use('/api/productos', productosRouter);

// Configurar Apollo Server con typeDefs y resolvers directamente
async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: baseSchema.typeDefs,
    resolvers: baseSchema.resolvers,
    context: ({ req }) => ({ db: pool }),
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  // Middleware para manejo de errores
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Error Interno del Servidor' });
  });
  // Iniciar servidor
  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`GraphQL disponible en http://localhost:${port}${server.graphqlPath}`);
  });
}

startApolloServer();

module.exports = app;
