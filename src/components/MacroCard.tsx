import { colors } from "@/styles/global";
import { StyleSheet, Text, View } from "react-native";

type MacroCardProps = {
  label: string;
  value: string;
  goal: string;
  color: string;
};

export default function MacroCard({
  label,
  value,
  goal,
  color,
}: MacroCardProps) {
  return (
    <View style={[styles.card, { borderLeftColor: color }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.goal}>/ {goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    width: "47%",
    borderLeftWidth: 4,
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 4,
  },
  goal: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
});
