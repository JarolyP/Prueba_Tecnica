# Prueba Técnica Backend

## Descripción
Proyecto backend para prueba técnica que incluye:
- API REST CRUD para productos con Node.js, Express y PostgreSQL.
- Endpoint GraphQL con consultas y mutaciones para productos.
- Funciones JavaScript para validación y manipulación de datos.
- Consultas SQL avanzadas.
- Contenedores Docker para backend y base de datos.
- Documentación completa para levantar y probar el entorno.

## Requisitos Previos
- Docker y Docker Compose instalados.
- Git instalado.

## Clonar el repositorio
```bash
git clone <URL_REPOSITORIO_PRIVADO>
cd Prueba_Tecnica
```

## Levantar el entorno con Docker
```bash
docker-compose up --build
```
Esto levantará dos servicios:
- PostgreSQL en el puerto 5432
- Backend Node.js en el puerto 3000

## Ejecutar migraciones y datos de prueba
Con el contenedor de la base de datos corriendo, ejecutar:
```bash
docker exec -it <nombre_contenedor_db> psql -U postgres -d prueba_tecnica -f /usr/src/app/sql/migrations.sql
```
Nota: Ajustar `<nombre_contenedor_db>` con el nombre real del contenedor PostgreSQL.

## Probar API REST
- Listar productos: `GET http://localhost:3000/api/productos`
- Obtener producto por ID: `GET http://localhost:3000/api/productos/:id`
- Crear producto: `POST http://localhost:3000/api/productos` con JSON body
- Actualizar producto: `PUT http://localhost:3000/api/productos/:id` con JSON body
- Eliminar producto: `DELETE http://localhost:3000/api/productos/:id`

## Probar API GraphQL
Abrir en navegador:
```
http://localhost:3000/graphql
```
Ejemplo de consulta:
```graphql
query {
  getProductos {
    id
    nombre
    precio
    stock
  }
}
```
Ejemplo de mutación:
```graphql
mutation {
  createProducto(nombre: "Nuevo Producto", descripcion: "Descripción", precio: 100.0, stock: 10, categoria_id: 1) {
    id
    nombre
  }
}
```

## Convenciones de commits
- feat: para nuevas funcionalidades
- fix: para corrección de errores
- chore: para tareas de mantenimiento

## Comentarios traducidos (Ejercicio 5)
/*
  // This function calculates the total price including taxes.
  // Parameters: base price and VAT percentage.
  // Returns the final price.
*/

## Preguntas técnicas (Ejercicio 5)
- ¿Qué endpoint se usa para listar recursos?  
  `GET /api/productos`

- ¿Qué status code se espera al crear un recurso?  
  `201 Created`

- ¿Qué tipo de autenticación utiliza la API?  
  La API no implementa autenticación en esta prueba.
