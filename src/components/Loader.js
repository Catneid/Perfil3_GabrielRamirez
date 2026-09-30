import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { COLORS, SPACING } from '../constants/theme';

export default function Loader({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      {message ? <Text style={styles.text}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  text: {
    marginTop: SPACING.md,
    color: COLORS.textMuted,
    fontSize: 15,
  },
});
