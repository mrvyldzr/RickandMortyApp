/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * @mrvyldzr
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {store} from './src/store';
import {Provider} from 'react-redux';
import MainTabScreen from './src/screens/MainTabScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Drawer.Navigator >
      <Drawer.Screen
        name="tab"
        component={MainTabScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

function Root() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
export default function App() {
  return (
    <Provider store={store}>
      <Root />
  </Provider>
  );
}
