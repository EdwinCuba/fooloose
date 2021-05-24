import getProducts from '../utils/getProducts';
import getBrands from '../utils/getBrands';

const useInitialState = async () => {
  return {
    token: "",
    user: null,
    isLogged: false,
    cart: [],
    bestSeller: {
      name: 'bestSeller',
      title: '¡Los más vendidos!',
      products: await getProducts(["bestSeller"])
    },
    newArrival: {
      name: 'newArrival',
      title: 'Recién llegados',
      products: await getProducts(["newArrival"])
    },
    brands: await getBrands(),
  }
}


export default useInitialState;