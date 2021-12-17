import {tsConstructorType} from '@babel/types';
import {Component} from 'react';
import {BleManager, Characteristic} from 'react-native-ble-plx';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import bg from '../../assets/images/bg.png';
import Donut from '../components/Donut';
import Curve from '../components/Curve';
import Info from '../components/Info';
import Info2 from '../components/Info2';
import base64 from 'base-64';
import database, {firebase} from '@react-native-firebase/database';
export default class Drink extends Component {
  constructor() {
    super();
    this.manager = new BleManager({
      restoreStateIdentifier: 'bleManagerRestoredState',
      restoreStateFunction: (bleRestoredState: BleRestoredState) => {
        if (bleRestoredState == null) {
          // BleManager was constructed for the first time.
        } else {
          // BleManager was restored. Check `bleRestoredState.connectedPeripherals` property.
        }
      },
    });
    this.state = {info: '', value: {}, response: '0'};
    this.prefixUUID = '0000ffe';
    this.suffixUUID = '-0000-1000-8000-00805f9b34fb';
    this.device="";
    this.sensors = {
      0: 'height',
    };
  }

   fireBaseRead(query){
    return new Promise(function (resolve, reject){
      //const [itemsArray, setItemsArray] = React.useState([]); 
      let items;
      let category = query;
      let categoryName = category;
      let itemsRef;
      let data;
      let lastDrink, lastDrinkValue = "-1";
  
      if(category){
        categoryName = category + '/'; // 입력받은 category 뒤에 '/'를 붙여서 categoryName으로 지정 (주소표시)
        itemsRef = database().ref(categoryName); // 지정한 categoryName에 해당하는 파이어베이스 데이터베이스 항목들을 itemsRef에 불러옴
      }
      else
      {
        categoryName = "";
        itemsRef = database().ref().root;
      }
  
      itemsRef.on('value', snapshot => { // on함수(데이터베이스 값이 바뀔 때마다 지속적으로 업데이트해서 읽어오는 함수)
        data = snapshot.val(); // snapshot함수(파이어베이스 데이터베이스 현재 상태를 읽어옴)
        if(!data){
          resolve("-1");
          return;
        }
        //console.log("data:", typeof data);
        //items = Object.entries(data); // data에 해당하는 entries (name, value 전부) 를 items에 넣음
        //setItemsArray(items); // items 객체를 이용해 itemsArray 배열 값을 set함
        
        let today = new Date();
        for (const [key, value] of Object.entries(data)){
          lastDrink = key;
          lastDrinkValue = value
        }
        console.log("lastDrinkValue in firebaseRead : ", lastDrinkValue);
       
        resolve(lastDrinkValue);
      })
      //items array array items[]
    })
  }

  fireBaseWrite(watervalue) {
    let addItem = (category, itemName, item) => {
      //addItem 쪽으로 category, itemName, item 을 입력받으면 차례로 ref(),child(),set()에 넣어서 database에 항목 추가
      database().ref(category).child(itemName).set(item);
    };

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let hour = today.getHours();
    let name = '홍길동';

    let dateString = year + '-' + month + '-' + day;

    let nameAndDate = name + '/' + dateString;
    
    inputString = nameAndDate + '.' + hour + '.' + watervalue; 
    console.log(inputString);
    
    
    var parsedString = inputString.split('.'); // inputString을 '.'을 기준으로 나눠서 parsedString에 넣음 (3개의 string으로)

    for (let i = 0; i < parsedString.length; i = i + 3) {
      if (!parsedString[i + 1] && !parsedString[i + 2]) {
        // 만약 2번째, 3번째 string 값이 비어있으면 해당 카테고리를 삭제
        let categoryName = parsedString[i];
        let itemsRef = database().ref(categoryName);
        itemsRef.remove();
        continue;
      }
      if (!parsedString[i + 2]) {
        // 만약 3번째 string 값이 비어있으면 해당 항목의 name, value를 둘다 삭제
        let categoryName = parsedString[i].concat('/');
        categoryName = categoryName.concat(parsedString[i + 1]);
        let itemsRef = database().ref(categoryName);
        itemsRef.remove();
        continue;
      }
      addItem(parsedString[i], parsedString[i + 1], parsedString[i + 2]); // parsedString 배열의 각 값을 addItem에 넣어줌 (category, itemName, item)
    }
  }

  serviceUUID() {
    return this.prefixUUID + '0' + this.suffixUUID;
  }

  notifyUUID() {
    return this.prefixUUID + '1' + this.suffixUUID;
  }

  writeUUID() {
    return this.prefixUUID + '1' + this.suffixUUID;
  }

  info(message) {
    this.setState({info: message});
  }

  error(message) {
    this.setState({info: 'ERROR: ' + message});
  }

  updateValue(key, value) {
    this.setState({values: {...this.state.values, [key]: value}});
  }

  updateResponse(newResponse) {
    this.setState({response: newResponse});
  }

  UNSAFE_componentWillMount() {
    console.log('mounted');
    const subscription = this.manager.onStateChange(state => {
      if (state === 'PoweredOn') {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
  }

  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        return;
      }

      console.log(device.name);
      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === 'WHEALTH') {
        // Stop scanning as it's not necessary if you are scanning for one device.
        this.manager.stopDeviceScan();
        console.log(`Found ${device.name}`);

        this.setState({
          device: device,
        });
        // Proceed with connection.
        this.device = device;
        device
          .connect()
          .then(device => {
            console.log('Discovering characteristics');
            return device.discoverAllServicesAndCharacteristics();
          })
          .then(device => {
            // setTimeout(()=>{
            //   device.writeCharacteristicWithoutResponseForService(
            //     '0000ffe0-0000-1000-8000-00805f9b34fb',
            //     '0000ffe1-0000-1000-8000-00805f9b34fb',
            //     'MQ==',
            //   );
            // },30000)
            console.log('SetupNotifications');
            return this.setupNotifications(device);
          })
          .then(result => {
            // Do work on device with services and characteristics
            console.log('connected');
            console.log('ID del dispositivo: ', device.id);
            console.log('Nombre del dispositivo: ', device.name);
            console.log('RRSI del dispositivo: ', device.rssi);
            console.log('MTU del dispositivo: ', device.mtu);
            console.log('UUID: ', device.serviceUUIDs);
            this.setTime();
          })
          .catch(error => {
            // Handle errors
            console.log(error);
          });
      }
    });
  }

  async setupNotifications(device) {
    console.log('1111111111');
    const service = this.serviceUUID();
    const characteristicW = this.writeUUID();
    const characteristicN = this.notifyUUID();
    let response;

    device.monitorCharacteristicForService(
      '0000ffe0-0000-1000-8000-00805f9b34fb',
      '0000ffe1-0000-1000-8000-00805f9b34fb',
      (error, characteristic) => {
        if (error) {
          this.error(error.message);
          console.error(error.message);
          return;
        } else {
          response = characteristic.value;
          console.log(response);
          response = base64.decode(response);
          console.log(response);
        }

        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let query = "홍길동/" + year + "-" + month + "-" + day;
        let result = 0;
        this.fireBaseRead(query)
        .then((lastDrink)=>{
          if(lastDrink === "-1") lastDrink = "0";

          console.log("query: ", query);
          console.log("lastDrink: ",lastDrink);
          result = parseInt(lastDrink) + parseInt(response);
          console.log(result);
        })
        .then(()=>{
          this.fireBaseWrite(result.toString())
        })
        console.log("=======================")

        this.updateResponse(response);
        this.updateValue(characteristic.uuid, characteristic.value);
      },
    );
    console.log('22222222222');
   }

  setTime() {
    setTimeout(()=>{
      this.device.writeCharacteristicWithoutResponseForService(
        '0000ffe0-0000-1000-8000-00805f9b34fb',
        '0000ffe1-0000-1000-8000-00805f9b34fb',
        'MQ==',
      );
    },10000)
  }
  render() {
    return (
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <View style={styles.container}>
          <View style={styles.container}>
            <StatusBar
              translucent={true}
              backgroundColor={'transparent'}
              barStyle="dark-content"
            />
            <View style={styles.page0}>
              <Text style={Styles.boldText}>Drink</Text>
              <Text style={Styles.Text}> Today</Text>
            </View>
            <View style={styles.page1}>
              <Text style={{...styles.timeText, left: 30, color: Colors.gray}}>
                {new Date().getHours() - 4} 00
              </Text>
              <Text style={{...styles.timeText, right: 30}}>
                {new Date().getHours()} 00
              </Text>
              <Text
                style={{
                  ...Styles.boldText,
                  fontSize: 18,
                  bottom: 30,
                  position: 'absolute',
                }}
              >
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
                }}
              >
                <Curve></Curve>
              </View>
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
                  <Text style={styles.drinkInfo3Text}>Left</Text>
                  <Text style={{...styles.drinkInfo3Text, top: '20%'}}>
                    {this.state.response}ml
                  </Text>
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
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Lato-Bold',
    marginTop: 15,
  },
  page0: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  page1: {
    flex: 0.3,
    alignItems: 'center',
    position: 'relative',
  },
  page2: {
    position: 'relative',
    flex: 0.8,
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
  page3: {
    flex: 2,
  },
  page4: {
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
    position: 'relative',
  },
  drinkInfo2: {
    height: '45%',
    borderRadius: 20,
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
    // color: Colors.white,
    color: '#fff',
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
