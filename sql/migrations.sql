-- Create table: categories
CREATE TABLE IF NOT EXISTS categorias (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

-- Create table: products
CREATE TABLE IF NOT EXISTS productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio NUMERIC(10,2) NOT NULL,
  stock INT NOT NULL,
  categoria_id INT NOT NULL REFERENCES categorias(id)
);

-- Create table: sales
CREATE TABLE IF NOT EXISTS ventas (
  id SERIAL PRIMARY KEY,
  producto_id INT NOT NULL REFERENCES productos(id),
  cantidad INT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample categories
INSERT INTO categorias (nombre) VALUES
('Electronics'),
('Books'),
('Clothing')
ON CONFLICT DO NOTHING;

-- Insert sample products
INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id) VALUES
('Smartphone', 'Latest model smartphone', 699.99, 50, 1),
('Laptop', 'High performance laptop', 1299.99, 30, 1),
('Novel', 'Bestselling novel', 19.99, 100, 2),
('T-Shirt', 'Cotton t-shirt', 9.99, 200, 3),
('Headphones', 'Noise cancelling headphones', 199.99, 0, 1)
ON CONFLICT DO NOTHING;

-- Insert sample sales
INSERT INTO ventas (producto_id, cantidad) VALUES
(1, 10),
(2, 5),
(3, 20);

/*
  Explanation:
  This file contains SQL migration scripts to create the required tables: categorias, productos, and ventas.
  It defines the relationships between tables through foreign keys.
  It also inserts sample data for categories, products, and sales.
  This fulfills the requirement of providing SQL scripts for migrations and test data.
*/
