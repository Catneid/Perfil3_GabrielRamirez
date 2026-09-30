import { StyleSheet, Text, View } from 'react-native';
import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import { STUDENT } from '../constants/student';
import { COLORS, RADIUS, SHADOW, SPACING } from '../constants/theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Información del estudiante</Text>

      <View style={styles.card}>
        <InfoRow label="Nombre" value={STUDENT.name} />
        <InfoRow label="Carnet" value={STUDENT.carnet} />
        <InfoRow label="Sección y grupo" value={STUDENT.sectionGroup} isLast />
      </View>

      <PrimaryButton title="Ver productos" onPress={() => navigation.navigate('Products')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  heading: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: SPACING.md,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    marginBottom: SPACING.xl,
    ...SHADOW,
  },
});
