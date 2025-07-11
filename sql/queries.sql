-- 1. Top 5 productos más caros por categoría
WITH RankedProducts AS (
  SELECT
    p.*,
    ROW_NUMBER() OVER (PARTITION BY p.categoria_id ORDER BY p.precio DESC) AS rn
  FROM productos p
)
SELECT * FROM RankedProducts WHERE rn <= 5 ORDER BY categoria_id, precio DESC;

-- 2. Sumar stock agrupado por categoría
SELECT
  c.id AS categoria_id,
  c.nombre AS categoria_nombre,
  SUM(p.stock) AS total_stock
FROM categorias c
LEFT JOIN productos p ON c.id = p.categoria_id
GROUP BY c.id, c.nombre
ORDER BY c.id;

-- 3. Listar productos no vendidos (asumiendo tabla ventas con producto_id)
SELECT p.*
FROM productos p
LEFT JOIN ventas v ON p.id = v.producto_id
WHERE v.producto_id IS NULL;

-- 4. Usar CTE para calcular precio promedio y devolver productos que lo superen
WITH AvgPrice AS (
  SELECT AVG(precio) AS avg_precio FROM productos
)
SELECT p.*
FROM productos p, AvgPrice
WHERE p.precio > AvgPrice.avg_precio
ORDER BY p.precio DESC;

/*
Explicación:
Este archivo contiene consultas SQL avanzadas para:
1. Obtener los 5 productos más caros por cada categoría.
2. Sumar el stock total agrupado por categoría.
3. Listar productos que no han sido vendidos.
4. Usar una expresión común de tabla (CTE) para calcular el precio promedio y devolver productos cuyo precio es mayor al promedio.
Estas consultas cumplen con los requisitos del ejercicio 3 de la prueba técnica.
*/
