import { useMemo } from 'react';
import useFetchData from './useFetchData';
import { getProducts } from '../services/api';

const mapProduct = (product) => ({
  id: product.id,
  title: product.title,
  image: product.image,
  description: product.description,
  price: `$${Number(product.price).toFixed(2)}`,
  category: product.category,
});

// Hook de negocio: obtiene los productos y los deja listos para la UI.
export default function useProducts() {
  const { data, loading, refreshing, error, refetch, refresh } = useFetchData(getProducts);

  const products = useMemo(() => data.map(mapProduct), [data]);

  return { products, loading, refreshing, error, refetch, refresh };
}
