import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Cart from '../src/screens/Cart'
import IconHome from 'react-native-vector-icons/Ionicons';
const { Navigator, Screen } = createBottomTabNavigator();
import colors from '../src/styles/colors';

import { Home } from '../src/screens/home';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Cadastrar } from '../src/screens/CadastroProduto';
import { Delete } from '../src/screens/Delete';
import { upDate } from '../src/screens/upDate';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
    <Navigator
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
    <Screen
      name="home"
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
    name="Adicionar Produto"
    component={Cadastrar}
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
    }}
  />


<Tab.Screen    
    name="Deletar Produto"
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
    name="Editar Produto"
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
