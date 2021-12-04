import { AppState, PushNotificationIOS } from 'react-native';
import PushNotification from 'react-native-push-notification';

const _handleAppStateChange = (nextAppState) => {
  // if (nextAppState === 'active') {
  //   _registerLocalNotification(realDate);
  // }
};

const _registerLocalNotification = (realDate) => {
  PushNotification.setApplicationIconBadgeNumber(0);
  PushNotification.cancelAllLocalNotifications();
  console.log(`Wwwwwwww : ${realDate}`)
  PushNotification.localNotificationSchedule({
    /* Android Only Properties */
    vibrate: true,
    vibration: 300,
    priority: 'hight',
    visibility: 'public',
    importance: 'hight',

    /* iOS and Android properties */
    message: "www", // (required)
    playSound: true,
    number: 1,
    actions: '["OK"]',

    // for production
    // repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    // date: nextHour,

    // test to trigger each miniute
    // repeatType: 'minute',
    // date: new Date(Date.now()),

    // test to trigger one time
    date: realDate,
  });
};
export default {
  register: async (realDate) => {
    PushNotification.configure({
      onNotification: function(notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
    });
    console.log(`Wwwwwwww : ${realDate}`)
    _registerLocalNotification(realDate);
    console.log(`zzzzzzz`)
    AppState.addEventListener('change', _handleAppStateChange);
  },
  unregister: () => {
    AppState.removeEventListener('change', _handleAppStateChange);
  },
};