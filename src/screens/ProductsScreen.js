import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import useProducts from '../hooks/useProducts';
import { COLORS, SPACING } from '../constants/theme';

export default function ProductsScreen() {
  const { products, loading, refreshing, error, refetch, refresh } = useProducts();

  if (loading) return <Loader message="Cargando productos..." />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          image={item.image}
          description={item.description}
          price={item.price}
          category={item.category}
        />
      )}
      contentContainerStyle={styles.list}
      style={styles.container}
      refreshing={refreshing}
      onRefresh={refresh}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
  list: {
    padding: SPACING.md,
  },
});
