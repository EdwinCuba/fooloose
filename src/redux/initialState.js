import getProducts from '../utils/getProducts';

const useInitialState = async () => {
  return {
    token: "",
    bestSeller: {
      name: 'BestSeller',
      title: '¡Los más vendidos!',
      products: await getProducts(["bestSeller"])
    },
    newArrival: {
      name: 'NewArrival',
      title: 'Recién llegados',
      products: await getProducts(["newArrival"])
    }
  }
}


export default useInitialState;