// import React, {useEffect, useState, Animated} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Dimensions,
//   ImageBackground,
//   Image,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import Styles from '../common/Styles';
// import Colors from '../constants/Colors';
// import bg from '../../assets/images/bg.png';
// import waterMan from '../../assets/images/waterman.png';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import ProfileCard from '../components/ProfileCard';
// const {width: SCREEN_WIDTH, height: SCREEN_height} = Dimensions.get('window');

// export default function Profile({route, navigation}) {
//   return (
//     <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
//       <View style={styles.container}>
//         <View style={styles.page0}>
//           <Text style={Styles.boldText}>Profile</Text>
//         </View>
//         <View style={styles.page2}>
//           {/* <Text>성별, 생년월일, 키, 나이, 이름</Text> */}
//           <View style={styles.profileCard}>
//             <View style={styles.profileCard2}>
//               <Image
//                 source={waterMan}
//                 resizeMode="contain"
//                 style={styles.waterMan}
//               />
//             </View>
//             <View style={styles.profileCard3}>
//               <View style={styles.cardData}>
//                 <Text style={styles.profileCardText}>이름</Text>
//                 <Text style={styles.profileCardText}>이름</Text>
//               </View>
//               <View style={styles.cardData}>
//                 <Text style={styles.profileCardText}>성별</Text>
//                 <Text style={styles.profileCardText}>성별</Text>
//               </View>
//               <View style={styles.cardData}>
//                 <Text style={styles.profileCardText}>생년월일</Text>
//                 <Text style={styles.profileCardText}>생년월일</Text>
//               </View>
//               <View style={styles.cardData}>
//                 <Text style={styles.profileCardText}>나이</Text>
//                 <Text style={styles.profileCardText}>나이</Text>
//               </View>
//               <View style={styles.cardData}>
//                 <Text style={styles.profileCardText}>키</Text>
//                 <Text style={styles.profileCardText}>키</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={styles.page3}>
//           <ScrollView
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.scroll}>
//             {/* 데이터 */}
//             <ProfileCard></ProfileCard>
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
//     flex: 0.6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 30,
//   },
//   page2: {
//     flex: 2,
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
//   profileCard: {
//     position: 'relative',
//     marginHorizontal: '3%',
//     borderRadius: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '95%',
//     // backgroundColor: Colors.bg,
//     marginBottom: 20,
//     borderWidth: 2,
//     borderColor: Colors.black,
//     backgroundColor: Colors.white,
//   },
//   profileCard2: {
//     width: '50%',
//     position: 'relative',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   profileCard3: {
//     // backgroundColor: Colors.pink,
//     width: '50%',
//     height: '100%',
//     borderRadius: 20,
//     justifyContent: 'center',
//   },
//   cardData: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     paddingHorizontal: 20,
//   },
//   profileCardText: {
//     ...Styles.boldText,
//     paddingVertical: 10,
//     // color: Colors.white,
//     fontSize: 16,
//   },
//   waterMan: {
//     position: 'relative',
//     bottom: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//   },
// });