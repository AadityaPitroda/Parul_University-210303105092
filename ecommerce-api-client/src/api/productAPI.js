import axios from 'axios';

const getProducts = async (categoryName, params) => {
  try {
    const response = await axios.get(`http://20.54.56.144/test/categories/${categoryName}/products`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getProductDetails = async (productId) => {
  try {
    const response = await axios.get(`http://20.54.56.144/test/categories/:categoryName/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getProducts, getProductDetails };
