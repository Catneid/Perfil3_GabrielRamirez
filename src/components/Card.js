import { memo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, RADIUS, SHADOW, SPACING } from '../constants/theme';

function Card({ title, image, description, price, category }) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

export default memo(Card);

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    ...SHADOW,
  },
  imageWrapper: {
    backgroundColor: COLORS.white,
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: SPACING.md,
  },
  category: {
    color: COLORS.secondary,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: SPACING.xs,
  },
  title: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  description: {
    color: COLORS.textMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: SPACING.sm,
  },
  price: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '800',
  },
});
