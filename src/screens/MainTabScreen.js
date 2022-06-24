import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';

import COLORS from '../constant/colors';

const Tab = createBottomTabNavigator();

function MainTabScreen({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 220,
          borderTopWidth: 0,
          elevation: 0,
          headerShown: false,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 15,
            color: COLORS.gray,
          },
          tabBarColor: '#009387',
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color.black} size={25} fontSize="bold" />
          ),
          tabBarActiveTintColor: COLORS.tabBarTextColor,
          tabBarInactiveTintColor: 'black'
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;

