import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import Drink from './Drink';
import Chart from './Chart';
export default function ColorScreen({route, navigation}) {
  const viewRef = React.useRef(null);
  const [bgColor, setBgColor] = useState();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current.animate({0: {opacity: 0}, 1: {opacity: 1}});
    });
    return () => unsubscribe;
  }, [navigation]);
  return (
    <View style={Styles.container}>
      {/* <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      /> */}
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-quad'}
        style={Styles.container}>
        <View style={{backgroundColor: 'yellow', flex: 0.1}} />
      </Animatable.View>
      <View>
        <Text>Hi</Text>
        <Text>Hi</Text>
        <Text>Hi</Text>
      </View>
    </View>
  );
}
