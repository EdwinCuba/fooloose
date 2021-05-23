const getProducts = async (category) => {
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
}

export default getProducts;