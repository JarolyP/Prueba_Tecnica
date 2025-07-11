-- 1. Top 5 most expensive products per category
WITH RankedProducts AS (
  SELECT
    p.*,
    ROW_NUMBER() OVER (PARTITION BY p.categoria_id ORDER BY p.precio DESC) AS rn
  FROM productos p
)
SELECT *
FROM RankedProducts
WHERE rn <= 5
ORDER BY categoria_id, precio DESC;

-- 2. Sum of stock grouped by category
SELECT
  c.id AS categoria_id,
  c.nombre AS categoria_nombre,
  SUM(p.stock) AS total_stock
FROM categorias c
LEFT JOIN productos p ON c.id = p.categoria_id
GROUP BY c.id, c.nombre
ORDER BY c.id;

-- 3. List products that have not been sold (assuming "ventas" table with "producto_id")
SELECT p.*
FROM productos p
LEFT JOIN ventas v ON p.id = v.producto_id
WHERE v.producto_id IS NULL;

-- 4. Use CTE to calculate average price and return products priced above average
WITH AvgPrice AS (
  SELECT AVG(precio) AS avg_precio FROM productos
)
SELECT p.*
FROM productos p, AvgPrice
WHERE p.precio > AvgPrice.avg_precio
ORDER BY p.precio DESC;

/*
  Explanation:
  This file contains advanced SQL queries for:
  1. Retrieving the top 5 most expensive products in each category.
  2. Summing the total stock grouped by category.
  3. Listing products that have not been sold.
  4. Using a Common Table Expression (CTE) to calculate the average price
     and return products with prices above the average.
  These queries fulfill the requirements of Exercise 3 in the technical test.
*/
