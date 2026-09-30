import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

export default function InfoRow({ label, value, isLast = false }) {
  return (
    <View style={[styles.row, !isLast && styles.divider]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: SPACING.md,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: 13,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: SPACING.xs,
  },
  value: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
  },
});
