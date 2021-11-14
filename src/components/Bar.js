import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';

// const data = [
//   {date: '2021/11/13', drink: 3000, delta: true},
//   {date: '2021/11/14', drink: 2000, delta: false},
//   {date: '2021/11/15', drink: 1600, delta: false},
//   {date: '2021/11/16', drink: 1700, delta: true},
//   {date: '2021/11/17', drink: 2500, delta: true},
// ];

function DrawBar(props) {
  return (
    <View>
      <View style={styles.entireBar}>
        <View
          style={{
            ...styles.bar,
            backgroundColor: Colors.lightBlue,
            height: '30%',
            bottom: 30,
            width: 2,
            zIndex: -1,
          }}></View>
        <View
          style={{
            ...styles.bar,
            height: props.drink / 20,
            backgroundColor: props.color,
            bottom: props.height,
          }}></View>
      </View>
    </View>
  );
}
function RenderChart(props) {
  const [barColor, setBarColor] = useState(Colors.primary);
  const changeColor = idx => {
    switch (idx % 3) {
      case 0:
        setBarColor(Colors.darkPurple);
      case 1:
        setBarColor(Colors.darkBlue);
      case 2:
        setBarColor(Colors.primary);
    }
  };
  return (
    <View style={styles.Bar}>
      {props.data.map((el, idx) => {
        // changeColor(idx);
        return (
          <View key={idx}>
            <Text style={styles.dateText}>{el.date}</Text>
            <DrawBar
              drink={el.drink}
              delta={el.delta}
              idx={idx}
              color={barColor}></DrawBar>
          </View>
        );
      })}
    </View>
  );
}
export default function Bar() {
  const data = [
    {date: '2021/11/13', drink: 3000, delta: true},
    {date: '2021/11/14', drink: 2000, delta: false},
    {date: '2021/11/15', drink: 1600, delta: false},
    {date: '2021/11/16', drink: 1700, delta: true},
    {date: '2021/11/17', drink: 2500, delta: true},
  ];
  return (
    <View style={styles.container}>
      <RenderChart data={data}></RenderChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
  },
  Bar: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    zIndex: 100,
  },
  dateText: {
    ...Styles.boldText,
    color: Colors.black,
    fontSize: 12,
  },
  entireBar: {
    position: 'relative',
    width: '100%',
    // borderWidth: 2,
    height: '100%',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    position: 'absolute',
    backgroundColor: '#B933F9',
    bottom: 30,
    width: 10,
    height: 20,
    borderRadius: 4,
  },
});
