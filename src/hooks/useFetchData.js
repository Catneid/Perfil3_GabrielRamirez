import { useCallback, useEffect, useRef, useState } from 'react';

// Hook genérico: ejecuta una función asíncrona y maneja sus estados.
export default function useFetchData(fetcher) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  const load = useCallback(
    async (isRefresh = false) => {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      setError(null);

      try {
        const result = await fetcher();
        if (isMounted.current) setData(result);
      } catch (err) {
        if (isMounted.current) setError(err.message || 'Ocurrió un error inesperado');
      } finally {
        if (isMounted.current) {
          setLoading(false);
          setRefreshing(false);
        }
      }
    },
    [fetcher]
  );

  useEffect(() => {
    isMounted.current = true;
    load();
    return () => {
      isMounted.current = false;
    };
  }, [load]);

  const refetch = useCallback(() => load(false), [load]);
  const refresh = useCallback(() => load(true), [load]);

  return { data, loading, refreshing, error, refetch, refresh };
}
