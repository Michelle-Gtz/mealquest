import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";
import { StyleSheet, View } from "react-native";
import MacroCard from "./MacroCard";

type MacroGridProps = {
  meals: Meal[];
};

export default function MacroGrid({ meals }: MacroGridProps) {
  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  return (
    <View style={styles.grid}>
      <MacroCard
        label="Calories"
        value={`${totals.calories}`}
        goal="2,000"
        color={colors.accent}
      />
      <MacroCard
        label="Protein"
        value={`${totals.protein}g`}
        goal="150g"
        color={colors.secondary}
      />
      <MacroCard
        label="Carbs"
        value={`${totals.carbs}g`}
        goal="250g"
        color={colors.primary}
      />
      <MacroCard
        label="Fat"
        value={`${totals.fat}g`}
        goal="65g"
        color={colors.success}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
