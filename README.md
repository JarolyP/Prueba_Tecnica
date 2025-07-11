# Prueba Técnica Backend

Este proyecto es una prueba técnica para la implementación de un backend con las siguientes características:

* API REST con operaciones CRUD para productos, desarrollada en Node.js y Express.
* Endpoint GraphQL con consultas y mutaciones para productos.
* Validaciones y manipulación de datos con JavaScript.
* Consultas SQL avanzadas.
* Orquestación de servicios con Docker y Docker Compose.
* Base de datos PostgreSQL.
* Migraciones y datos de ejemplo aplicados automáticamente al levantar el entorno.
* Documentación clara para despliegue, pruebas y mantenimiento.


## Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* GraphQL
* Docker & Docker Compose
* Postman


## Requisitos

Antes de comenzar, asegúrese de tener instalado en su máquina:

* [Docker Desktop](https://www.docker.com/products/docker-desktop) (que incluye Docker y Docker Compose).
* [Git](https://git-scm.com/).



## Instalación

1️⃣ **Abrir Docker**
Abra **Docker Desktop** y espere unos segundos hasta que Docker esté listo.
Puede verificar que Docker está corriendo ejecutando en la terminal:

```bash
docker info
```

Si el comando devuelve información del sistema Docker, significa que está listo.

2️⃣ **Clonar el repositorio**

```bash
git clone <URL_REPOSITORIO_PRIVADO>
cd Prueba_Tecnica
```

---

## Ejecución del entorno con Docker

Con Docker Desktop abierto y funcionando, ejecute:

```bash
docker-compose up --build
```

Este comando:

* Construye las imágenes necesarias.
* Arranca los servicios:

  * PostgreSQL en el puerto `5432`.
  * Backend Node.js en el puerto `3000`.
* Aplica automáticamente las migraciones y carga los datos de ejemplo.

Verifique que los servicios están en ejecución con:

```bash
docker ps
```


## Probar la aplicación 

### API REST

Los siguientes endpoints están disponibles en `http://localhost:3000/api/productos`:

* Listar productos:

  ```
  GET /api/productos
  ```

* Obtener producto por ID:

  ```
  GET /api/productos/{id}
  ```

* Crear producto:

  ```
  POST /api/productos
  ```

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

  ```
  PUT /api/productos/{id}
  ```

* Eliminar producto:

  ```
  DELETE /api/productos/{id}
  ```

Nota: Reemplace `{id}` por un número válido.



### API GraphQL

El endpoint GraphQL está disponible en `http://localhost:3000/graphql`.

Ejemplo de consulta:

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

Ejemplo de mutación:

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


## Estándares de commits

* `feat:` nuevas funcionalidades.
* `fix:` correcciones de errores.
* `chore:` tareas de mantenimiento.



## Preguntas frecuentes

* **¿Qué endpoint se usa para listar productos?**
  `GET /api/productos`

* **¿Qué status code se espera al crear un producto?**
  `201 Created`

* **¿Qué autenticación utiliza la API?**
  Ninguna. La API no implementa autenticación en esta prueba.



**Autor:** Jaroly Omar Polanco


