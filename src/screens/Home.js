import React from 'react';
import {List} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

const Home = ({navigation}) => {
  const navigate = route => navigation.navigate(route);
  return (
    <View styles={{flex: 1}}>
      {/* 로그인 여부 확인 */}
      <List.Item title="Bottom Tab으로" onPress={() => navigate('Tab1')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
