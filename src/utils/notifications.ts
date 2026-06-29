import Constants from "expo-constants";

const isExpoGo = Constants.executionEnvironment === "storeClient";

let Notifications: any;
if (!isExpoGo) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Notifications = require("expo-notifications");
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export const isNotificationsAvailable = !isExpoGo;

export const requestPermissions = async (): Promise<boolean> => {
  if (isExpoGo) return false;
  try {
    const { status } = await Notifications.requestPermissionsAsync();
    return status === "granted";
  } catch {
    return false;
  }
};

export const scheduleMealReminders = async () => {
  if (isExpoGo) return;
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "MacroZone",
        body: "Don't forget to log your lunch!",
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 12,
        minute: 0,
      },
    });

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "MealQuest",
        body: "Time to log your dinner!",
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 18,
        minute: 0,
      },
    });
  } catch (e) {
    console.warn("Failed to schedule meal reminders:", e);
  }
};

export const cancelMealReminders = async () => {
  if (isExpoGo) return;
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
  } catch (e) {
    console.warn("Failed to cancel meal reminders:", e);
  }
};
