const getProduct = async (id) => {
  const URL = 'http://localhost:8800';
  const API = `${URL}/api/products/${id}`
  
  const response = await fetch(API);
  const products = await response.json();

  return products.data;
}

export default getProduct;