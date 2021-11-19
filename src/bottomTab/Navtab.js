import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Icon, {Icons} from '../components/Icons';
import Colors from '../constants/Colors';
import Drink from '../screens/Drink';
import Chart from '../screens/Chart';
import Alarm from '../screens/Alarm';
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();
const TabArr = [
  {
    route: 'Drink',
    label: 'Drink',
    // type: Icons.Ionicons,
    activeIcon: 'water',
    inActiveIcon: 'water-outline',
    component: Drink,
  },
  {
    route: 'Chart',
    label: 'Chart',
    // type: Icons.Ionicons,
    activeIcon: 'stats-chart',
    inActiveIcon: 'stats-chart-outline',
    component: Chart,
  },
  {
    route: 'Alarm',
    label: 'Alarm',
    // type: Icons.Ionicons,
    activeIcon: 'alarm',
    inActiveIcon: 'alarm-outline',
    component: Alarm,
  },
  {
    route: 'Profile',
    label: 'Profile',
    // type: Icons.FontAwesome,
    activeIcon: 'person',
    inActiveIcon: 'person-outline',
    component: Profile,
  },
];

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: Colors.bg,
        swipeEnabled: true,
        tabBarStyle: {
          height: 80,
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          backgroundColor: Colors.darkBlue,
        },
      })}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: true,
              tabBarIcon: ({focused, color}) => {
                return focused === true ? (
                  <Ionicons
                    name={item.activeIcon}
                    size={25}
                    color={Colors.white}
                  />
                ) : (
                  <Ionicons
                    name={item.inActiveIcon}
                    size={25}
                    color={Colors.bg}
                  />
                );
              },
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
