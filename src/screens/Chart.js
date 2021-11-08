import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
StatusBar.setBackgroundColor(Colors.bg);
export default function Drink({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>Drink Page</Text>
      <View style={styles.page0}>
        <Text>Chart</Text>
        <Text>Today</Text>
      </View>
      <View style={styles.page1}>
        <Text>TimeLine</Text>
      </View>
      <View style={styles.page2}>
        <Text> Chart</Text>
      </View>
      <View style={styles.page3}>
        <Text>Water Score</Text>
      </View>
      <View style={styles.page4}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  page0: {
    flex: 0.4,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  page1: {
    flex: 0.3,
    backgroundColor: 'orange',
  },
  page2: {
    flex: 0.8,
    backgroundColor: 'yellow',
  },
  page3: {
    flex: 2,
    backgroundColor: Colors.bg,
  },
  page4: {
    backgroundColor: Colors.bg,
    height: 80,
  },
});
