import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Cart from '../src/screens/Cart'
import IconHome from 'react-native-vector-icons/Ionicons';
const { Navigator, Screen } = createBottomTabNavigator();
import colors from '../src/styles/colors';

import { Home } from '../src/screens/home';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CadastroProduto } from '../src/screens/CadastroProduto';
import { Delete } from '../src/screens/Delete';
import { upDate } from '../src/screens/upDate';
import { Perfil } from '../src/screens/perfil';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Navigator
    initialRouteName="home"
    screenOptions={{
      
      "tabBarHideOnKeyboard":"true",
      headerShown: false,
    style: {
      height: 60,
      backgroundColor: colors.primary,
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
    inactiveTintColor: colors.black,
    activeTintColor: colors.purple,
  }}
  >
    <Tab.Screen    
    name="Perfil"
    component={Perfil}
    options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <Ionicons
              name="person-circle-outline"
              size={size}
              color={focused ? "black": colors.black}
// aa
          />
        );
      },
    }}
  />



  <Tab.Screen    
    name="Adicionar"
    component={CadastroProduto}
    
    options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <Ionicons
              name="md-add-circle"
              size={size}
              color={focused ? "black": colors.black}

          />
        );
      },
    }
  
  
  
  }
  />


<Screen
      name="home"
      listeners={{
        tabPress: e => {
            console.log("pressed")
            
        },
    }}
      component={Home}
      options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? "black": colors.black}
            />
          );
        },
      }}
      />

<Tab.Screen    
    name="Deletar"
    component={Delete}
    options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <Ionicons
              name="md-trash"
              size={size}
              color={focused ? "black": colors.black}

          />
        );
      },
    }}
  />
  
<Tab.Screen    
    name="Editar"
    component={upDate}
    options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <Ionicons
              name="md-create"
              size={size}
              color={focused ? "black": colors.black}
// aa
          />
        );
      },
    }}
  />




    </Navigator>
  );
};

export default BottomTabNavigator;
