import PushAlarm from '../components/PushAlarm';
import React, {useEffect} from 'react';
import {View} from 'react-native-animatable';

export default function Profile() {
  useEffect(() => {
    PushAlarm.register();
  }, []);
  return <View></View>;
}
