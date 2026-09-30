import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './PrimaryButton';
import { COLORS, SPACING } from '../constants/theme';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Algo salió mal</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry ? <PrimaryButton title="Reintentar" onPress={onRetry} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  title: {
    color: COLORS.error,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  message: {
    color: COLORS.textMuted,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
});
