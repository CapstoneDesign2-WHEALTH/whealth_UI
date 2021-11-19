import React, {useEffect, useState, Animated} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import drinkWaveFlip from '../../assets/images/drinkWaveFlip.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
const {width: SCREEN_WIDTH, height: SCREEN_height} = Dimensions.get('window');

export default function Profile({route, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.page0}>
        <Text style={Styles.boldText}>Profile</Text>
      </View>
      {/* <View style={styles.page1}></View>
      <View style={styles.page2}>
        <Image
          source={drinkWaveFlip}
          resizeMode="cover"
          style={styles.drinkWave}></Image>
      </View> */}
      <View style={styles.page3}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          // pagingEnabled={true}
          contentContainerStyle={styles.scroll}>
          {/* 개별 알람 */}
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
                <Text
                  style={{...styles.alarmText2, fontSize: 20, marginLeft: 0}}>
                  km
                </Text>
                {/* <Text style={styles.alarmText2}>Sat</Text> */}
              </View>
              {/* <Ionicons name="trash-outline" size={20} color={Colors.black} /> */}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.page4}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    fontFamily: 'Lato-Bold',
  },
  page0: {
    flex: 0.4,
    flexDirection: 'row',
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  page1: {
    flex: 0.3,
    backgroundColor: Colors.bg,
    alignItems: 'center',
  },
  page2: {
    position: 'relative',
    flex: 0.8,
    backgroundColor: Colors.bg,
  },
  drinkWave: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  page3: {
    flex: 2,
    backgroundColor: Colors.bg,
  },
  page4: {
    backgroundColor: Colors.bg,
    height: 80,
  },
  scroll: {
    flexGrow: 1,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  alarmBox: {
    position: 'relative',
    marginVertical: 5,
    borderRadius: 20,
    width: SCREEN_WIDTH - 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#4c5efd',
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
    // backgroundColor: '#E3DDF8',
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
