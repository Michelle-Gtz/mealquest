import { StyleSheet } from "react-native";

export const colors = {
  primary: "#34C759",
  secondary: "#208AEF",
  accent: "#FF8A00",

  background: "#0E1524",
  surface: "#1A2334",
  border: "#2A3342",

  text: "#F5F7FA",
  textSecondary: "#A7B0C0",

  success: "#34C759",
  warning: "#FF8A00",
  error: "#FF4D4F",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
