import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import AnimTab1 from './bottomTab/AnimTab1';
import Home from './screens/Home';
import Colors from './constants/Colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.white}
      />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Whealth', headerShown: true}}
      />
      <Stack.Screen name="Tab1" component={AnimTab1} />
    </Stack.Navigator>
  );
};

export default App;
