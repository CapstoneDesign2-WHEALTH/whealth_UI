import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    height: 0.3,
    width: '100%',
    backgroundColor: Colors.bg,
    opacity: 0.8,
  },
  Text: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    color: Colors.black,
  },
  boldText: {
    fontFamily: 'Lato-Bold',
    fontSize: 25,
    color: Colors.black,
  },
  contentContainerStyle: {
    paddingBottom: 200,
  },
  contentContainerStyle2: {
    paddingBottom: 100,
  },
});

export default Styles;
