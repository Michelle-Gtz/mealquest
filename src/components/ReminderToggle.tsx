import { colors } from "@/styles/global";
import {
  cancelMealReminders,
  isNotificationsAvailable,
  requestPermissions,
  scheduleMealReminders,
} from "@/utils/notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const REMINDERS_KEY = "remindersEnabled";

export default function ReminderToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const load = async () => {
      const val = await AsyncStorage.getItem(REMINDERS_KEY);
      setEnabled(val === "true");
    };
    load();
  }, []);

  const toggle = async (value: boolean) => {
    if (!isNotificationsAvailable) return;
    if (value) {
      const granted = await requestPermissions();
      if (!granted) return;
      await scheduleMealReminders();
    } else {
      await cancelMealReminders();
    }
    setEnabled(value);
    await AsyncStorage.setItem(REMINDERS_KEY, value.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelGroup}>
        <Text style={styles.label}>Meal Reminders</Text>
        {!isNotificationsAvailable && (
          <Text style={styles.note}>Requires development build</Text>
        )}
      </View>
      <Switch
        value={enabled}
        onValueChange={toggle}
        disabled={!isNotificationsAvailable}
        trackColor={{ false: colors.surface, true: colors.primary }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  labelGroup: {
    flex: 1,
  },
  label: {
    color: colors.text,
    fontSize: 16,
  },
  note: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
});
