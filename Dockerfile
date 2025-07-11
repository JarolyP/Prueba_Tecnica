# Usar imagen oficial de Node.js 18
FROM node:18

# Crear directorio de la aplicación
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package.json ./

# Instalar dependencias de la aplicación
RUN npm install

# Copiar el código fuente
COPY . .

# Exponer el puerto
EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "start"]

# Explicación:
# Este Dockerfile configura un contenedor para la aplicación backend Node.js.
# Usa la imagen oficial de Node.js 18, copia los archivos necesarios, instala dependencias,
# copia el código fuente, expone el puerto 3000 y define el comando para iniciar la app.
# Esto cumple con el requisito de tener un Dockerfile funcional para el backend.
