-- Crear tabla de categorías
CREATE TABLE IF NOT EXISTS categorias (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

-- Crear tabla de productos
CREATE TABLE IF NOT EXISTS productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio NUMERIC(10,2) NOT NULL,
  stock INT NOT NULL,
  categoria_id INT NOT NULL REFERENCES categorias(id)
);

-- Crear tabla de ventas
CREATE TABLE IF NOT EXISTS ventas (
  id SERIAL PRIMARY KEY,
  producto_id INT NOT NULL REFERENCES productos(id),
  cantidad INT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar categorías de ejemplo
INSERT INTO categorias (nombre) VALUES
('Electronics'),
('Books'),
('Clothing')
ON CONFLICT DO NOTHING;

-- Insertar productos de ejemplo
INSERT INTO productos (nombre, descripcion, precio, stock, categoria_id) VALUES
('Smartphone', 'Latest model smartphone', 699.99, 50, 1),
('Laptop', 'High performance laptop', 1299.99, 30, 1),
('Novel', 'Bestselling novel', 19.99, 100, 2),
('T-Shirt', 'Cotton t-shirt', 9.99, 200, 3),
('Headphones', 'Noise cancelling headphones', 199.99, 0, 1)
ON CONFLICT DO NOTHING;

-- Insertar ventas de ejemplo
INSERT INTO ventas (producto_id, cantidad) VALUES
(1, 10),
(2, 5),
(3, 20);

/*
Explicación:
Este archivo contiene las migraciones SQL para crear las tablas necesarias: categorias, productos y ventas.
Define las relaciones entre tablas mediante claves foráneas.
También inserta datos de ejemplo para categorías, productos y ventas.
Esto cumple con el requisito de tener scripts SQL para migraciones y datos de prueba.
*/
