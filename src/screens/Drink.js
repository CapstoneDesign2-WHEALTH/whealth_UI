import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import MyHeader from '../components/MyHeader';
import drinkWave from '../../assets/images/drinkWave.png';

StatusBar.setBackgroundColor(Colors.bg);

export default function Drink({route, navigation}) {
  let today = new Date();
  const [hour, setHour] = useState(today.getHours());
  const [minute, setMinute] = useState(today.getMinutes());
  return (
    <View style={styles.container}>
      {/* <Animatable.View ref={viewRef} easing={'ease-in-out'}></Animatable.View> */}
      <View style={styles.page0}>
        <Text style={Styles.boldText}>Drink</Text>
        <Text style={Styles.Text}>Today</Text>
      </View>
      <View style={styles.page1}>
        <Text style={{...Styles.Text}}>{/* {hours} :{minutes} */}</Text>
      </View>
      <View style={styles.page2}>
        <Image
          source={drinkWave}
          resizeMode="cover"
          style={styles.drinkWave}></Image>
      </View>
      <View style={styles.page3}>
        <Text>Drink gage</Text>
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
});
