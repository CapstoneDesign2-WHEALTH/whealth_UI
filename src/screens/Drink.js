import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import drinkWave from '../../assets/images/drinkWave.png';

// StatusBar.setBackgroundColor(Colors.bg);

export default function Drink({route, navigation}) {
  let today = new Date();
  const [hour, setHour] = useState(today.getHours());
  const [minute, setMinute] = useState(today.getMinutes());
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      {/* <Animatable.View ref={viewRef} easing={'ease-in-out'}></Animatable.View> */}
      <View style={styles.page0}>
        <Text style={Styles.boldText}>Drink</Text>
        <Text style={Styles.Text}>Today</Text>
      </View>
      <View style={styles.page1}>
        <Text style={{...Styles.Text}}>
          {hour} :{minute}
        </Text>
      </View>
      <View style={styles.page2}>
        <Image
          source={drinkWave}
          resizeMode="cover"
          style={styles.drinkWave}></Image>
      </View>
      <View style={styles.page3}>
        <View style={styles.drinkInfo}>
          <View style={styles.drinkInfo0}>
            <View style={styles.drinkInfo1}>
              <Text style={styles.drinkInfo1Text}>Target</Text>
              <View style={styles.bar}></View>
              <View
                style={{
                  ...styles.bar,
                  backgroundColor: '#F3D9FF',
                  left: 40,
                  zIndex: -1,
                }}></View>
              <Text style={styles.drinkInfo2Text}> 3000 mL</Text>
            </View>
            <View style={styles.drinkInfo2}>
              <Text style={styles.drinkInfo1Text}>Drink</Text>
              <View
                style={{
                  ...styles.bar,
                  backgroundColor: Colors.darkBlue,
                }}></View>
              <View
                style={{
                  ...styles.bar,
                  backgroundColor: Colors.lightBlue,
                  left: 40,
                  zIndex: -1,
                }}></View>
              <Text style={styles.drinkInfo2Text}>2000 mL</Text>
            </View>
          </View>
          <View style={styles.drinkInfo3}>
            <Text style={styles.drinkInfo3Text}>Left</Text>
            <Text style={{...styles.drinkInfo3Text, top: '20%'}}>1000mL</Text>
          </View>
        </View>
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
  drinkInfo: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  drinkInfo0: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
  },
  drinkInfo1: {
    height: '45%',
    borderRadius: 20,
    marginBottom: '10%',
    backgroundColor: Colors.white,
    position: 'relative',
  },
  drinkInfo2: {
    height: '45%',
    borderRadius: 20,
    backgroundColor: Colors.white,
  },
  drinkInfo3: {
    backgroundColor: Colors.black,
    width: '45%',
    height: '95%',
    borderRadius: 20,
  },
  drinkInfo1Text: {
    color: Colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  bar: {
    position: 'absolute',
    backgroundColor: '#B933F9',
    top: 60,
    left: 30,
    width: 10,
    height: 20,
    borderRadius: 4,
    transform: [{rotate: '90deg'}],
  },
  drinkInfo2Text: {
    color: Colors.black,
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 20,
    bottom: 0,
  },
  drinkInfo3Text: {
    color: Colors.white,
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
