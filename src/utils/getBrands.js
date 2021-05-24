const getBrands = async () => {
  try{
    const URL = 'http://localhost:8800';
    const API = `${URL}/api/brands`
  
    const response = await fetch(API);
    const brands = await response.json();
    return brands;
  }catch(err){
    return [];
  }

}

export default getBrands;