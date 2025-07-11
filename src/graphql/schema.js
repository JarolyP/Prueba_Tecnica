const { gql } = require("apollo-server-express");

// GraphQL type definitions
const typeDefs = gql`
  type Producto {
    id: Int
    nombre: String
    descripcion: String
    precio: Float
    stock: Int
    categoria_id: Int
  }

  type Query {
    getProductos: [Producto]
  }

  type Mutation {
    createProducto(
      nombre: String!
      descripcion: String
      precio: Float!
      stock: Int!
      categoria_id: Int!
    ): Producto
  }
`;

// GraphQL resolvers for queries and mutations
const resolvers = {
  Query: {
    // Retrieves all products ordered by ID
    getProductos: (parent, args, context) => {
      return context.db
        .query("SELECT * FROM productos ORDER BY id")
        .then((res) => res.rows);
    },
  },
  Mutation: {
    // Creates a new product with the provided arguments and returns it
    createProducto: (parent, args, context) => {
      const { nombre, descripcion, precio, stock, categoria_id } = args;
      return context.db
        .query(
          "INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
          [nombre, descripcion || "", precio, stock, categoria_id]
        )
        .then((res) => res.rows[0]);
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

/*
  This module defines the GraphQL type definitions (typeDefs) and resolvers
  for the Node.js backend. The typeDefs define the Producto type, queries,
  and mutations. The resolvers implement the logic to fetch and create products
  using the PostgreSQL database. This enables Apollo Server to build the executable
  GraphQL schema properly.
*/
