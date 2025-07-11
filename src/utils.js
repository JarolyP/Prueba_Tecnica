// Función para validar un string JSON y agregar processed: true
function validateAndProcessJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return { ...obj, processed: true };
  } catch (error) {
    throw new Error('Cadena JSON inválida');
  }
}

// Función para filtrar productos con stock > 0 y ordenar por precio descendente
function filterAndSortProducts(products) {
  return products
    .filter(product => product.stock > 0)
    .sort((a, b) => b.precio - a.precio);
}

// Función para simular una llamada HTTP asíncrona que devuelve un producto tras 2 segundos
function simulateAsyncProductCall(product) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 2000);
  });
}

module.exports = {
  validateAndProcessJSON,
  filterAndSortProducts,
  simulateAsyncProductCall,
};
