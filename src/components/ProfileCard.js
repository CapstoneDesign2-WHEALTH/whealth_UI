import React, {useEffect, useState, Animated} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width: SCREEN_WIDTH, height: SCREEN_height} = Dimensions.get('window');

export default function ProfileCard() {
  return (
    <View style={styles.alarmBox}>
      <View style={styles.alarmBox1}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="flame" size={20} color="red" />
          <Text style={styles.alarmText}> 걷기 달리기 거리</Text>
        </View>
      </View>
      <View style={styles.alarmBox2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <Text style={styles.alarmText2}>4.6 </Text>
          <Text style={{...styles.alarmText2, fontSize: 14, marginLeft: 0}}>
            km
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alarmBox: {
    position: 'relative',
    marginVertical: 5,
    borderRadius: 20,
    width: SCREEN_WIDTH - 50,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  alarmBox1: {
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: '40%',
    top: 0,
    backgroundColor: Colors.white,
    borderBottomColor: Colors.bg,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alarmBox2: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    bottom: 0,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alarmText: {
    ...Styles.boldText,
    fontSize: 15,
    color: 'red',
  },
  alarmText2: {
    ...Styles.Text,
    marginLeft: 15,
    fontSize: 30,
    color: Colors.black,
  },
});
