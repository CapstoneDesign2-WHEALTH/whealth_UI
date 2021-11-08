import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
StatusBar.setBackgroundColor(Colors.bg);

export default function Profile({route, navigation}) {
  return (
    <View>
      <Text style={{color: '#000'}}>Profile Page</Text>
      <Text>Profile Page</Text>
      <Text>Profile Page</Text>
      <Text>Profile Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
