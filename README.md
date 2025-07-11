---

# Prueba Técnica Backend

Este proyecto es una prueba técnica para la implementación de un backend con las siguientes características:

* API REST con operaciones CRUD para productos, desarrollada en Node.js y Express.
* Endpoint GraphQL con consultas y mutaciones para productos.
* Validaciones y manipulación de datos con JavaScript.
* Consultas SQL avanzadas.
* Orquestación de servicios con Docker y Docker Compose.
* Base de datos PostgreSQL.
* Documentación para despliegue y pruebas.

---

## Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* GraphQL
* Docker & Docker Compose

---

## Requisitos

* Docker y Docker Compose instalados y en funcionamiento.
* Git instalado.

Opcionalmente, para ejecutar el backend sin Docker:

* Node.js y npm instalados.

---

## Instalación

Clonar el repositorio:

```bash
git clone <URL_REPOSITORIO_PRIVADO>
cd Prueba_Tecnica
```

Si desea ejecutar el backend sin Docker, instale las dependencias:

```bash
npm install
```

---

## Ejecución del entorno con Docker

Levantar los servicios:

```bash
docker-compose up --build
```

Servicios expuestos:

* PostgreSQL en el puerto `5432`.
* Backend en el puerto `3000`.

Verificar servicios en ejecución:

```bash
docker ps
```

---

## Migraciones y datos de prueba

Con los contenedores en ejecución:

1. Copiar el archivo de migraciones al contenedor de la base de datos:

```bash
docker cp ./sql/migrations.sql prueba_tecnica-db-1:/migrations.sql
```

2. Ejecutar las migraciones:

```bash
docker exec -it prueba_tecnica-db-1 psql -U postgres -d prueba_tecnica -f /migrations.sql
```

El nombre del contenedor (`prueba_tecnica-db-1`) puede confirmarse ejecutando:

```bash
docker ps
```

---

## API REST

### Endpoints

* Listar productos:
  `GET /api/productos`

* Obtener producto por ID:
  `GET /api/productos/{id}`

* Crear producto:
  `POST /api/productos`
  Body:

```json
{
  "nombre": "Producto prueba",
  "descripcion": "Descripción",
  "precio": 100.0,
  "stock": 10,
  "categoria_id": 1
}
```

* Actualizar producto:
  `PUT /api/productos/{id}`

* Eliminar producto:
  `DELETE /api/productos/{id}`

Nota: Reemplace `{id}` por el identificador numérico correspondiente. Un error común es enviar `:id` como texto, lo que genera:

```json
{
  "error": "invalid input syntax for type integer: \":2\""
}
```

---

## API GraphQL

Endpoint:
`http://localhost:3000/graphql`

### Ejemplo de consulta:

```graphql
{
  getProductos {
    id
    nombre
    precio
    stock
  }
}
```

### Ejemplo de mutación:

```graphql
mutation {
  createProducto(
    nombre: "Nuevo Producto",
    descripcion: "Descripción",
    precio: 100.0,
    stock: 10,
    categoria_id: 1
  ) {
    id
    nombre
  }
}
```

---

## Estandares de commits

* `feat:` nuevas funcionalidades.
* `fix:` correcciones de errores.
* `chore:` tareas de mantenimiento.

---

## Preguntas frecuentes

* **¿Qué endpoint se usa para listar productos?**
  `GET /api/productos`

* **¿Qué status code se espera al crear un producto?**
  `201 Created`

* **¿Qué autenticación utiliza la API?**
  Ninguna. La API no implementa autenticación en esta prueba.

---

**Autor:** Jaroly Omar Polanco

---
