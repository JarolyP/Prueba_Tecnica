

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
  

## Requisitos

* [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) instalados.
* [Git](https://git-scm.com/) instalado.
* Opcionalmente, [Node.js](https://nodejs.org/) y npm, si desea ejecutar el backend fuera de Docker.



## Instalación

Clonar el repositorio:

```bash
git clone <URL_REPOSITORIO_PRIVADO>
cd Prueba_Tecnica
```



## Ejecución del entorno con Docker


Construir y levantar los servicios:

```bash
docker-compose up --build
```

Este comando:

* Construye las imágenes necesarias.
* Arranca los servicios:

  * PostgreSQL en el puerto `5432`.
  * Backend Node.js en el puerto `3000`.
* Aplica automáticamente las migraciones y carga los datos de ejemplo.

Verificar que los servicios están en ejecución:

```bash
docker ps
```



## Ejecución fuera de Docker (opcional)

Si prefiere correr el backend en su máquina local, también es posible.

### Requisitos

* Tener PostgreSQL en ejecución con la base `prueba_tecnica` creada.
* Tener configuradas las variables de entorno para conexión a la base de datos.

### Instalación de dependencias

```bash
npm install
```

### Ejecutar servidor

```bash
npm run dev
```

El backend quedará disponible en `http://localhost:3000`.



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



## Comandos rápidos

### Instalar dependencias 

```bash
npm install
```

### Levantar entorno completo con Docker

```bash
docker-compose up --build
```

### Ver estado de los contenedores

```bash
docker ps
```

### Detener los contenedores

```bash
docker-compose down
```

### Reiniciar los contenedores

```bash
docker-compose restart
```

### Ejecutar backend fuera de Docker

```bash
npm run dev
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


