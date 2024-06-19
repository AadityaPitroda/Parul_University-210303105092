import React, { useState, useEffect } from 'react';
import { getProductDetails } from '../api/productAPI';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProductDetails(productId);
      setProduct(data);
      setLoading(false);
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      {/* Render other product details here */}
    </div>
  );
};

export default ProductDetails;
