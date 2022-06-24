import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import EpisodePartScreen from './screens/EpisodePartScreen';

//const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabScreen({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Icon
                name={
                  focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarBadge: 3}}
      />
    </Tab.Navigator>
  );
}

export default MainTabScreen;
