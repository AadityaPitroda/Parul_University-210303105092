import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/productAPI';

const ProductList = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(categoryName, { n: 10 }); // Example usage
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
