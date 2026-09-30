const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudieron obtener los productos`);
  }

  return response.json();
};
