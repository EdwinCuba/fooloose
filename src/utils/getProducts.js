const getProducts = async (category) => {
  try {
    const URL = 'http://localhost:8800';
    const API = `${URL}/api/products`
  
    if(!category){
      const response = await fetch(API);
      const products = await response.json();
      return products.data;
    }else{
      const response = await fetch(`${API}?category=${category}`);
      const products = await response.json();
      return products.data;
    }
  } catch (error) {
    return [];
  }
}

export default getProducts;