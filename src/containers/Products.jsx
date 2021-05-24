import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import getProducts from '../utils/getProducts';

const Products = (props) => {
  const { search } = props.location;
  const [products, setProducts] = useState(null);

  useEffect(async () => {
    if(search){
      const category = search.split('?category=')[1];
      const products = await getProducts(category);
      setProducts(products);
    }else{
      const products = await getProducts();
      setProducts(products);
    }
  }, [search]);

  return (
    <div className="Products">
      {products && 
        <Section products={products} />
      }
    </div>
  );
}

export default Products;