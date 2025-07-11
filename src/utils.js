// Function to validate a JSON string and add processed: true
function validateAndProcessJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return { ...obj, processed: true };
  } catch (error) {
    throw new Error("Invalid JSON string");
  }
}

// Function to filter products with stock > 0 and sort them by price descending
function filterAndSortProducts(products) {
  return products
    .filter((product) => product.stock > 0)
    .sort((a, b) => b.precio - a.precio);
}

// Function to simulate an asynchronous HTTP call that returns a product after 2 seconds
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
