# Explicaciones de la prueba técnica - Comentarios traducidos

## src/graphql/schema.js
Este archivo define el esquema GraphQL para la API, incluyendo el tipo Producto con sus campos.
Se define una consulta raíz 'getProductos' que retorna la lista de productos desde la base de datos.
También se define una mutación 'createProducto' para crear un nuevo producto con los campos requeridos.
Esto cumple con el requisito de tener un endpoint GraphQL en /graphql con las operaciones getProductos y createProducto.

## src/utils.js
Este archivo contiene funciones JavaScript para:
1. Validar una cadena JSON y agregar un campo processed: true.
2. Filtrar productos con stock mayor a cero y ordenarlos por precio de forma descendente.
3. Simular una llamada HTTP asíncrona que devuelve un producto después de 2 segundos.
Estas funciones cumplen con los requisitos del ejercicio 2 de la prueba técnica.

## sql/migrations.sql
Este archivo contiene las migraciones SQL para crear las tablas necesarias: categorias, productos y ventas.
Define las relaciones entre tablas mediante claves foráneas.
También inserta datos de ejemplo para categorías, productos y ventas.
Esto cumple con el requisito de tener scripts SQL para migraciones y datos de prueba.

## sql/queries.sql
Este archivo contiene consultas SQL avanzadas para:
1. Obtener los 5 productos más caros por cada categoría.
2. Sumar el stock total agrupado por categoría.
3. Listar productos que no han sido vendidos.
4. Usar una expresión común de tabla (CTE) para calcular el precio promedio y devolver productos cuyo precio es mayor al promedio.
Estas consultas cumplen con los requisitos del ejercicio 3 de la prueba técnica.

## Dockerfile
Este Dockerfile configura un contenedor para la aplicación backend Node.js.
Usa la imagen oficial de Node.js 18, copia los archivos necesarios, instala dependencias,
copia el código fuente, expone el puerto 3000 y define el comando para iniciar la app.
Esto cumple con el requisito de tener un Dockerfile funcional para el backend.
