import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon, {Icons} from '../components/Icons';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import Drink from '../screens/Drink';
import Chart from '../screens/Chart';
import Alarm from '../screens/Alarm';
import Profile from '../screens/Profile';
import ColorScreen from '../screens/ColorScreen';
const TabArr = [
  {
    route: 'Drink',
    label: 'Drink',
    type: Icons.Ionicons,
    activeIcon: 'water',
    inActiveIcon: 'water-outline',
    component: Drink,
  },
  {
    route: 'Chart',
    label: 'Chart',
    type: Icons.Ionicons,
    activeIcon: 'stats-chart',
    inActiveIcon: 'stats-chart-outline',
    component: Chart,
  },
  {
    route: 'Alarm',
    label: 'Alarm',
    type: Icons.Ionicons,
    activeIcon: 'alarm',
    inActiveIcon: 'alarm-outline',
    component: Alarm,
  },
  {
    route: 'ColorScreen',
    label: 'ColorScreen',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    component: Profile,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5, rotate: '0deg'},
        1: {scale: 1.5, rotate: '360deg'},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5, rotate: '360deg'},
        1: {scale: 1, rotate: '0deg'},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.white : Colors.lightBlue}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          borderTopStartRadius: 60,
          borderTopEndRadius: 60,
          backgroundColor: Colors.darkBlue,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
            shifting={false}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
