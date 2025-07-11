const { gql } = require('apollo-server-express');

// Definición de tipos GraphQL (typeDefs)
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

// Resolvers para las consultas y mutaciones
const resolvers = {
  Query: {
    getProductos: (parent, args, context) => {
      return context.db.query('SELECT * FROM productos ORDER BY id')
        .then(res => res.rows);
    },
  },
  Mutation: {
    createProducto: (parent, args, context) => {
      const { nombre, descripcion, precio, stock, categoria_id } = args;
      return context.db.query(
        'INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nombre, descripcion || '', precio, stock, categoria_id]
      ).then(res => res.rows[0]);
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};

/*
Explicación:
Este archivo define explícitamente los typeDefs y resolvers para GraphQL.
Esto permite que Apollo Server cree el esquema ejecutable correctamente.
*/
