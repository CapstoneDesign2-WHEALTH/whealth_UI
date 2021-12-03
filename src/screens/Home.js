import React from 'react';
import {StyleSheet, View, Text, StatusBar, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import Styles from '../common/Styles';
import Yoga from '../../assets/images/Yoga.png';
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
const Home = ({navigation}) => {
  const navigate = route => navigation.navigate(route);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.bg} barStyle="dark-content" />
      <View style={styles.page0}></View>
      <View style={styles.page1}>
        <Text style={Styles.boldText}>First Step to</Text>
        <Text style={Styles.boldText}>Whealthy Life</Text>
      </View>
      <View style={styles.page2}>
        <Image source={Yoga} resizeMode="cover" style={styles.drinkWave} />
      </View>
      <View style={styles.page3}>
        <TouchableOpacity onPress={() => navigate('Navtab')} style={styles.btn}>
          <Image source={facebook} />
          <Text style={styles.text}>Connect With FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Navtab')} style={styles.btn}>
          <Image source={google} />
          <Text style={styles.text}>Connect With GOOGLE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    fontFamily: 'Lato-Bold',
  },
  page0: {
    flex: 0.5,
  },
  page1: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
  },
  page2: {
    position: 'relative',
    flex: 3,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page3: {
    flex: 2,
    backgroundColor: Colors.bg,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '60%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    borderColor: Colors.darkPurple,
    marginBottom: 20,
  },
  text: {
    ...Styles.Text,
    color: Colors.black,
    fontSize: 12,
  },
});

export default Home;
