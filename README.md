Claro, bro, aquí te dejo todo el contenido del README listo para pegar directo en la edición del README en GitHub. Solo copias todo y pegas, sin código extra ni nada raro:

---

# 📦 Prueba Técnica Backend

Proyecto backend para prueba técnica que incluye:

* API REST CRUD para productos con Node.js, Express y PostgreSQL.
* Endpoint GraphQL con consultas y mutaciones para productos.
* Funciones JavaScript para validación y manipulación de datos.
* Consultas SQL avanzadas.
* Contenedores Docker para backend y base de datos.
* Documentación completa para levantar y probar el entorno.

---

## 🚀 Requisitos previos

* Tener **Docker** y **Docker Compose** instalados y funcionando.
* Tener **Git** instalado.

Puedes verificar que Docker está corriendo con:

```
docker info
```

---

## 📂 Clonar el repositorio

```
git clone <URL_REPOSITORIO_PRIVADO>  
cd Prueba_Tecnica
```

---

## 🐳 Levantar el entorno con Docker

```
docker-compose up --build
```

Esto levantará dos servicios:

* 🐘 PostgreSQL en el puerto `5432`
* 🟢 Backend Node.js en el puerto `3000`

Puedes verificar que los servicios están corriendo con:

```
docker ps
```

---

## 🗄️ Ejecutar migraciones y datos de prueba

Con el contenedor de la base de datos corriendo, copia el archivo de migraciones al contenedor:

```
docker cp ./sql/migrations.sql prueba_tecnica-db-1:/migrations.sql
```

Luego ejecuta las migraciones:

```
docker exec -it prueba_tecnica-db-1 psql -U postgres -d prueba_tecnica -f /migrations.sql
```

✅ Nota: `prueba_tecnica-db-1` es el nombre por defecto del contenedor de la base de datos. Puedes verificarlo con:

```
docker ps
```

---

## 🔗 Probar API REST

Puedes probar estos endpoints usando Postman, curl o tu navegador:

* **Listar productos:**
  `GET http://localhost:3000/api/productos`

* **Obtener producto por ID:**
  `GET http://localhost:3000/api/productos/:id`

  ⚠️ Nota: En los endpoints donde dice `:id`, debes reemplazarlo por un número real de ID del producto.
  Ejemplo correcto:

  ```
  GET http://localhost:3000/api/productos/2
  ```

  Ejemplo incorrecto (produce error):

  ```
  GET http://localhost:3000/api/productos/:2
  ```

  Si envías `:2` u otro texto, la base de datos devolverá un error como:

  ```
  {
      "error": "invalid input syntax for type integer: \":2\""
  }
  ```

  Por eso siempre usa el número del producto directamente en la URL.

* **Crear producto:**
  `POST http://localhost:3000/api/productos`
  con un JSON body como:

  ```
  {
    "nombre": "Producto prueba",
    "descripcion": "Descripción de prueba",
    "precio": 100.0,
    "stock": 10,
    "categoria_id": 1
  }
  ```

* **Actualizar producto:**
  `PUT http://localhost:3000/api/productos/:id`
  con un JSON body igual al de creación.

* **Eliminar producto:**
  `DELETE http://localhost:3000/api/productos/:id`

---

## 🔷 Probar API GraphQL

Abre en tu navegador o en Postman:

```
http://localhost:3000/graphql
```

En Postman, envía una petición `POST` con un JSON como este:

### Ejemplo de consulta:

```
{
  "query": "{ getProductos { id nombre precio stock } }"
}
```

### Ejemplo de mutación:

```
{
  "query": "mutation { createProducto(nombre: \"Nuevo Producto\", descripcion: \"Descripción\", precio: 100.0, stock: 10, categoria_id: 1) { id nombre } }"
}
```

---

## 📝 Convenciones de commits

* `feat:` para nuevas funcionalidades
* `fix:` para corrección de errores
* `chore:` para tareas de mantenimiento

---

## 🗒️ Comentarios traducidos (Ejercicio 5)

```
/*
  // Esta función calcula el precio total incluyendo impuestos.  
  // Parámetros: precio base y porcentaje de IVA.  
  // Retorna el precio final.  
*/
```

---

## ❓ Preguntas técnicas (Ejercicio 5)

✅ ¿Qué endpoint se usa para listar recursos?
`GET /api/productos`

✅ ¿Qué status code se espera al crear un recurso?
`201 Created`

✅ ¿Qué tipo de autenticación utiliza la API?
La API no implementa autenticación en esta prueba.

---

💻👍

---
