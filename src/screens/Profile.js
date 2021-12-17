import React, {useEffect, useState, Animated} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import bg from '../../assets/images/bg.png';
import waterMan from '../../assets/images/waterman.png';
import ProfileCard from '../components/ProfileCard';

import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
} from 'react-native-health';

const {width: SCREEN_WIDTH, height: SCREEN_height} = Dimensions.get('window');

let options = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.HeartRate,
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.StepCount,
      AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
      AppleHealthKit.Constants.Permissions.Height,
      AppleHealthKit.Constants.Permissions.Weight,
      AppleHealthKit.Constants.Permissions.SleepAnalysis,
      AppleHealthKit.Constants.Permissions.BiologicalSex,
      AppleHealthKit.Constants.Permissions.DateOfBirth,
      AppleHealthKit.Constants.Permissions.Water,
      AppleHealthKit.Constants.Permissions.HeartRate,
    ],
    write: [
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.StepCount,
      AppleHealthKit.Constants.Permissions.Weight,
      AppleHealthKit.Constants.Permissions.Water,
    ],
  },
};

// Initializing HealthKit
AppleHealthKit.initHealthKit(
  (options: HealthInputOptions),
  (err: string, results: boolean) => {
    if (err) {
      console.log('error initializing Healthkit: ', err);
      return;
    }
    console.log('we got permissions!');
    // Healthkit is initialized...
    // now safe to read and write Healthkit data...
  },
);

//Setting Weight Option.
let WeightOption = {
  unit: 'kilogram',
};

//Setting steop option
let StepOption = {
  date: new Date().toISOString(), // optional; default now
  includeManuallyAdded: false, // optional: default true
};

// Setting HeartRate Option
let HeartRateOption = {
  unit: 'bpm', // optional; default 'bpm'
  startDate: new Date(2021, 10, 26).toISOString(), // required
  endDate: new Date().toISOString(), // optional; default now
  ascending: false, // optional; default false
  limit: 10, // optional; default no limit
};

// Variables for HK datas
let Age, BirthDate;
let Weight, Height;
let Steps, Sex;
let HeartRate;

//Method to get DateOfBirth
AppleHealthKit.getDateOfBirth(
  null,
  (err: Object, results: HealthDateOfBirth) => {
    if (err) {
      return;
    }

    console.log(results);
    //console.log('type of?')
    //console.log(typeof results)
    //console.log(typeof results.age)
    //console.log(typeof results.value)

    Age = results.age;
    BirthDate = results.value.substring(0, 10);
    //return results
  },
);

//Method to get  Height
AppleHealthKit.getLatestHeight(null, (err: string, results: HealthValue) => {
  if (err) {
    console.log('error getting latest height: ', err);
    return;
  }
  console.log(results);
  var InchHeight = parseInt(results.value);
  var CentHeight = InchHeight * 2.54;
  Height = CentHeight;
});

//Method to get Weight
AppleHealthKit.getLatestWeight(
  WeightOption,
  (err: string, results: HealthValue) => {
    if (err) {
      console.log('error getting latest weight: ', err);
      return;
    }
    Weight = results.value;
  },
);

//Method to get sex
AppleHealthKit.getBiologicalSex(null, (err: Object, results: Object) => {
  if (err) {
    return;
  }
  //console.log(results)
  Sex = results.value;
});

// Method to get StepCount of today
AppleHealthKit.getStepCount(
  (StepOption: HealthInputOptions),
  (err: Object, results: HealthValue) => {
    if (err) {
      return;
    }
    Steps = results.value;
    //console.log(results)
  },
);

// Method to get HeartRate
AppleHealthKit.getHeartRateSamples(
  HeartRateOption,
  (err: Object, results: Array<HealthValue>) => {
    if (err) {
      return;
    }
    //console.log("Getting HeartRate!")
    //console.log(results)
    HeartRate = results[0].value;
  },
);

export default function Profile({route, navigation}) {
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.page0}>
          <Text style={Styles.boldText}>Profile</Text>
        </View>
        <View style={styles.page2}>
          {/* <Text>성별, 생년월일, 키, 나이, 이름</Text> */}
          <View style={styles.profileCard}>
            <View style={styles.profileCard2}>
              <View style={styles.profileImage}>
                <Image
                  source={waterMan}
                  resizeMode="contain"
                  style={styles.waterMan}
                />
              </View>
              <View style={styles.cardData}>
                <Text
                  style={{
                    ...styles.profileCardText,
                    fontSize: 17,
                    color: Colors.white,
                  }}
                >
                  홍 길 동
                </Text>
              </View>
            </View>
            <View style={styles.profileCard3}>
              <View style={styles.cardData}>
                <Text style={styles.profileCardText}>Gender</Text>
                <Text style={styles.profileCardText}>{Sex}</Text>
              </View>
              <View style={styles.cardData}>
                <Text style={styles.profileCardText}>Birth</Text>
                <Text style={styles.profileCardText}>
                  {BirthDate.split('-')[0]}
                </Text>
              </View>
              <View style={styles.cardData}>
                <Text style={styles.profileCardText}>Age</Text>
                <Text style={styles.profileCardText}>{Age}</Text>
              </View>
              <View style={styles.cardData}>
                <Text style={styles.profileCardText}>Height</Text>
                <Text style={styles.profileCardText}>
                  &nbsp;&nbsp;{Height.toFixed(1)}
                </Text>
              </View>
              <View style={styles.cardData}>
                <Text style={styles.profileCardText}>Weight</Text>
                <Text style={styles.profileCardText}>
                  {(Weight * 0.453592).toFixed(1)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.page3}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scroll}
          >
            {/* 데이터 */}
            <ProfileCard id={'걸음 수'} content={Steps} unit={'걸음'} />
            <ProfileCard id={'심박 수'} content={HeartRate} unit={'bpm'} />
          </ScrollView>
        </View>
        <View style={styles.page4} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Lato-Bold',
    marginTop: 15,
  },
  bg: {
    position: 'relative',
    bottom: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  page0: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  page2: {
    flex: 2,
  },
  page3: {
    flex: 3,
  },
  page4: {
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
  profileCard: {
    position: 'relative',
    marginHorizontal: '3%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '95%',
    marginBottom: 20,
  },
  profileCard2: {
    width: '60%',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.black,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.black,
  },
  profileCard3: {
    backgroundColor: Colors.white,
    width: '40%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderColor: Colors.black,
  },
  cardData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  profileCardText: {
    ...Styles.boldText,
    paddingVertical: 10,
    color: Colors.black,
    fontSize: 16,
  },
  waterMan: {
    position: 'relative',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
