import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import drinkWave from '../../assets/images/drinkWave.png';
import Donut from '../components/Donut';
import Curve from '../components/Curve';
import Info from '../components/Info';
import Info2 from '../components/Info2';
export default function Drink({route, navigation}) {
  let today = new Date();
  const [hour, setHour] = useState(today.getHours());
  const [minute, setMinute] = useState(today.getMinutes());
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth());
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      <View style={styles.page0}>
        <Text style={Styles.boldText}>Drink</Text>
        <Text style={Styles.Text}>
          {month + 1}-{day}
        </Text>
      </View>
      <View style={styles.page1}>
        <Text style={{...styles.timeText, left: 30, color: Colors.gray}}>
          {hour - 4} 00
        </Text>
        <Text style={{...styles.timeText, right: 30}}>{hour} 00</Text>
        <Text
          style={{
            ...Styles.boldText,
            fontSize: 18,
            bottom: 30,
            position: 'absolute',
          }}>
          Target &nbsp;&nbsp;3000ml
        </Text>
      </View>
      <View style={styles.page2}>
        <View
          style={{
            position: 'relative',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Curve></Curve>
        </View>

        <Image
          source={drinkWave}
          resizeMode="cover"
          style={styles.drinkWave}></Image>
      </View>
      <View style={styles.page3}>
        <View style={styles.drinkInfo}>
          <View style={styles.drinkInfo0}>
            <View style={styles.drinkInfo1}>
              <Info />
            </View>
            <View style={styles.drinkInfo2}>
              <Info2 />
            </View>
          </View>
          <View style={styles.drinkInfo3}>
            {/* <Text style={styles.drinkInfo3Text}>Target</Text> */}
            <Text style={styles.drinkInfo3Text}>Left</Text>
            <Text style={{...styles.drinkInfo3Text, top: '20%'}}>1000mL</Text>
            <View stlye={styles.donut}>
              <Donut
                radius={80}
                percentage={70}
                color={Colors.bg}
                delay={500}
                max={100}
                style={{top: 100}}
              />
            </View>
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
    position: 'relative',
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
    zIndex: -1,
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
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 40,
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
  donut: {
    position: 'absolute',
  },
  timeText: {
    ...Styles.boldText,
    fontSize: 15,
    bottom: 3,
    position: 'absolute',
    color: Colors.darkBlue,
  },
});
