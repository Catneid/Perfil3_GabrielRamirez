import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function PrimaryButton({ title, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md - 2,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.md,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
});
