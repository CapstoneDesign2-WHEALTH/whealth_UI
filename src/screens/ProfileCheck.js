// import AppleHealthKit, {
//   HealthValue,
//   HealthKitPermissions,
// } from 'react-native-health';
// import React, {useEffect, useState, Animated} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Dimensions,
//   ImageBackground,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import Styles from '../common/Styles';
// import Colors from '../constants/Colors';
// import bg from '../../assets/images/bg.png';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// const {width: SCREEN_WIDTH, height: SCREEN_height} = Dimensions.get('window');
// /* Permission options */
// let options = {
//   permissions: {
//     read: [
//       AppleHealthKit.Constants.Permissions.HeartRate,
//       AppleHealthKit.Constants.Permissions.Steps,
//       AppleHealthKit.Constants.Permissions.StepCount,
//       AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
//       AppleHealthKit.Constants.Permissions.Height,
//       AppleHealthKit.Constants.Permissions.Weight,
//       AppleHealthKit.Constants.Permissions.SleepAnalysis,
//       AppleHealthKit.Constants.Permissions.BiologicalSex,
//       AppleHealthKit.Constants.Permissions.DateOfBirth,
//       AppleHealthKit.Constants.Permissions.Water,
//       AppleHealthKit.Constants.Permissions.HeartRate,
//     ],
//     write: [
//       AppleHealthKit.Constants.Permissions.Steps,
//       AppleHealthKit.Constants.Permissions.StepCount,
//       AppleHealthKit.Constants.Permissions.Weight,
//       AppleHealthKit.Constants.Permissions.Water,
//     ],
//   },
// };

// // Initializing HealthKit
// AppleHealthKit.initHealthKit(
//   (options: HealthInputOptions),
//   (err: string, results: boolean) => {
//     if (err) {
//       console.log('error initializing Healthkit: ', err);
//       return;
//     }
//     console.log('we got permissions!');
//     // Healthkit is initialized...
//     // now safe to read and write Healthkit data...
//   },
// );

// //Setting Weight Option.
// let WeightOption = {
//   unit: 'kilogram',
// };

// //Setting steop option
// let StepOption = {
//   date: new Date().toISOString(), // optional; default now
//   includeManuallyAdded: false, // optional: default true
// };

// // Variables for HK datas
// let Age, BirthDate;
// let Weight, Height;
// let Steps, Sex;

// //Method to get DateOfBirth
// AppleHealthKit.getDateOfBirth(
//   null,
//   (err: Object, results: HealthDateOfBirth) => {
//     if (err) {
//       return;
//     }

//     console.log(results);
//     //console.log('type of?')
//     //console.log(typeof results)
//     //console.log(typeof results.age)
//     //console.log(typeof results.value)

//     Age = results.age;
//     BirthDate = results.value.substring(0, 10);
//     //return results
//   },
// );

// //Method to get  Height
// AppleHealthKit.getLatestHeight(null, (err: string, results: HealthValue) => {
//   if (err) {
//     console.log('error getting latest height: ', err);
//     return;
//   }
//   console.log(results);
//   var InchHeight = parseInt(results.value);
//   var CentHeight = InchHeight * 2.54;
//   Height = CentHeight;
// });

// //Method to get Weight
// AppleHealthKit.getLatestWeight(
//   WeightOption,
//   (err: string, results: HealthValue) => {
//     if (err) {
//       console.log('error getting latest weight: ', err);
//       return;
//     }
//     Weight = results.value;
//   },
// );

// //Method to get sex
// AppleHealthKit.getBiologicalSex(null, (err: Object, results: Object) => {
//   if (err) {
//     return;
//   }
//   //console.log(results)
//   Sex = results.value;
// });

// // Method to get StepCount of today
// AppleHealthKit.getStepCount(
//   (StepOption: HealthInputOptions),
//   (err: Object, results: HealthValue) => {
//     if (err) {
//       return;
//     }
//     Steps = results.value;
//     //console.log(results)
//   },
// );

// export default function Profile({route, navigation}) {
//   return (
//     <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
//       <View style={styles.container}>
//         <View style={styles.page0}>
//           <Text style={Styles.boldText}>Profile</Text>
//         </View>
//         <View style={styles.page3}>
//           <ScrollView
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.scroll}>
//             {/* 데이터 */}
//             <View style={styles.alarmBox}>
//               <View style={styles.alarmBox1}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Ionicons name="flame" size={20} color="red" />
//                   <Text style={styles.alarmText}> 성별</Text>
//                 </View>
//               </View>
//               <View style={styles.alarmBox2}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'flex-end',
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={styles.alarmText2}>{Sex} </Text>
//                   <Text
//                     style={{...styles.alarmText2, fontSize: 14, marginLeft: 0}}>
//                     단위
//                   </Text>
//                 </View>
//               </View>
//             </View>

//             {/* 데이터 */}
//             <View style={styles.alarmBox}>
//               <View style={styles.alarmBox1}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Ionicons name="flame" size={20} color="red" />
//                   <Text style={styles.alarmText}> 나이</Text>
//                 </View>
//               </View>
//               <View style={styles.alarmBox2}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'flex-end',
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={styles.alarmText2}>{Age} </Text>
//                   <Text
//                     style={{...styles.alarmText2, fontSize: 14, marginLeft: 0}}>
//                     살
//                   </Text>
//                 </View>
//               </View>
//             </View>

//             {/* 데이터 */}
//             <View style={styles.alarmBox}>
//               <View style={styles.alarmBox1}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Ionicons name="flame" size={20} color="red" />
//                   <Text style={styles.alarmText}> 출생</Text>
//                 </View>
//               </View>
//               <View style={styles.alarmBox2}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'flex-end',
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={styles.alarmText2}>{BirthDate} </Text>
//                   <Text
//                     style={{...styles.alarmText2, fontSize: 14, marginLeft: 0}}>
//                     에 태어남
//                   </Text>
//                 </View>
//               </View>
//             </View>

//             {/* 데이터 */}
//             <View style={styles.alarmBox}>
//               <View style={styles.alarmBox1}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Ionicons name="flame" size={20} color="red" />
//                   <Text style={styles.alarmText}> 신장 </Text>
//                 </View>
//               </View>
//               <View style={styles.alarmBox2}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'flex-end',
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={styles.alarmText2}>{Height} </Text>
//                   <Text
//                     style={{...styles.alarmText2, fontSize: 14, marginLeft: 0}}>
//                     cm
//                   </Text>
//                 </View>
//               </View>
//             </View>

//             {/* 데이터 */}
//             <View style={styles.alarmBox}>
//               <View style={styles.alarmBox1}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Ionicons name="flame" size={20} color="red" />
//                   <Text style={styles.alarmText}> 몸무게 </Text>
//                 </View>
//               </View>
//               <View style={styles.alarmBox2}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'flex-end',
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={styles.alarmText2}>{Weight} </Text>
//                   <Text
//                     style={{...styles.alarmText2, fontSize: 14, marginLeft: 0}}>
//                     kg
//                   </Text>
//                 </View>
//               </View>
//             </View>

//             {/* 데이터 */}
//             <View style={styles.alarmBox}>
//               <View style={styles.alarmBox1}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Ionicons name="flame" size={20} color="red" />
//                   <Text style={styles.alarmText}> 걷기 달리기 </Text>
//                 </View>
//               </View>
//               <View style={styles.alarmBox2}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'flex-end',
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={styles.alarmText2}>{Steps} </Text>
//                   <Text
//                     style={{...styles.alarmText2, fontSize: 14, marginLeft: 0}}>
//                     걸음
//                   </Text>
//                 </View>
//               </View>
//             </View>

//             {/* 헬스키트 데이터 */}
//             {/* <View style={styles.container}>
//               <Text style={styles.title}>HealthKit Datas</Text>
//               <Text style={styles.normalTexts}>Sex: {Sex}</Text>
//               <Text style={styles.normalTexts}>Age: {Age}</Text>
//               <Text style={styles.normalTexts}>BirthDate: {BirthDate}</Text>
//               <Text style={styles.normalTexts}>Height: {Height}cm</Text>
//               <Text style={styles.normalTexts}>Weight: {Weight}kg</Text>
//               <Text style={styles.normalTexts}>Steps: {Steps}</Text>
//             </View> */}
//           </ScrollView>
//         </View>
//         <View style={styles.page4}></View>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontFamily: 'Lato-Bold',
//     marginTop: 15,
//   },
//   bg: {
//     position: 'relative',
//     bottom: 0,
//     right: 0,
//     flex: 1,
//     justifyContent: 'center',
//     width: '100%',
//     height: '100%',
//   },
//   page0: {
//     flex: 0.4,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 30,
//   },
//   page3: {
//     flex: 3,
//   },
//   page4: {
//     height: 80,
//   },
//   scroll: {
//     flexGrow: 1,
//     width: '100%',
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   alarmBox: {
//     position: 'relative',
//     marginVertical: 5,
//     borderRadius: 20,
//     width: SCREEN_WIDTH - 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 100,
//   },
//   alarmBox1: {
//     position: 'absolute',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     width: '100%',
//     height: '40%',
//     top: 0,
//     backgroundColor: Colors.white,
//     borderBottomColor: Colors.bg,
//     borderBottomWidth: 1,
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   alarmBox2: {
//     position: 'absolute',
//     width: '100%',
//     height: '60%',
//     bottom: 0,
//     backgroundColor: Colors.white,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   alarmText: {
//     ...Styles.boldText,
//     fontSize: 15,
//     color: 'red',
//   },
//   alarmText2: {
//     ...Styles.Text,
//     marginLeft: 15,
//     fontSize: 30,
//     color: Colors.black,
//   },
// });
