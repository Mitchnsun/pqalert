import * as Notifications from 'expo-notifications';

const notify = async ({ days }) => {
  try {
    await Notifications.requestPermissionsAsync();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.scheduleNotificationAsync({
      content: { 
        title: `Niveau du stock de PQ bas`,
        body: `${days} jour plus tard, c'est le moment d'aller faire des courses!`
      },
      trigger: { seconds: days * 24 * 3600 },
    });
    return true;
  } catch {
    return false;
  }
}

export default notify;