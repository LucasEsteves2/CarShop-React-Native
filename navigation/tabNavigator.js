import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Cart from '../src/screens/Cart'
import IconHome from 'react-native-vector-icons/Ionicons';

import { Home } from '../src/screens/home';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{

        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <IconHome name="home" size={40} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
