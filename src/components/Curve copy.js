import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, ColorPropType} from 'react-native';
import {color} from 'react-native-reanimated';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import Svg from 'react-native-svg';
export default function Curve() {
  const data = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 100,
    5: 100,
    6: 200,
    8: 300,
    9: 500,
    10: 800,
    11: 900,
    12: 1000,
    13: 1500,
  };

  return (
    <View style={styles.Bar}>
      <Text style={styles.text}>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
  },
  text: {
    ...Styles.boldText,
    color: Colors.black,
  },
});
