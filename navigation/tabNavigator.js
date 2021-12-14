import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Cart from '../src/screens/Cart'
import IconHome from 'react-native-vector-icons/Ionicons';
const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from '../src/screens/home';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
    tabBarOptions={{
      // evitando que o tab bar fique em cima do input
      keyboardHidesTabBar: true,

      style: {
        height: 60,
        backgroundColor: 'black',
        borderTopWidth: 0,
      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: 'roboto_400',
        fontSize: 11,
        marginTop: 5,
      },
    }}
  >
    <Screen
      name="home"
      component={Home}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Ionicons
              name="md-heart"
              size={size}
            />
          );
        },
      }}
      />


  <Tab.Screen    
    name="Espoerts"
    component={Home}
    options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <MaterialCommunityIcons
            name="trophy-outline"
            size={size}
           
          />
        );
      },
    }}
  />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
