import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Login} from "../src/screens/login";
import BottomTabNavigator from "../navigation/tabNavigator";
<<<<<<< HEAD
import Cadastro from "../src/screens/Cadastro/index";
import { upDate } from "../src/screens/upDate";
import { Cadastrar } from "../src/screens/CadastroProduto/index";
=======
import Cadastro from "../src/screens/Cadastro";
import {upDate} from "../src/screens/upDate";
import {CadastroProduto} from "../src/screens/CadastroProduto";
import {Perfil} from "../src/screens/perfil";
>>>>>>> 79661338929a1815e059b0239c02b5fbc50b287b

const Stack = createStackNavigator();

export const Routes=()=>{
    return(
    <Stack.Navigator>
<<<<<<< HEAD
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
      <Stack.Screen name="Editar" component={upDate} options={{ headerShown: false, }} />
      <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false, }} />
      <Stack.Screen name="Cadastrar" component={Cadastro} options={{ headerShown: false, }} />
=======
       <Stack.Screen name="Login" component={Login} options={{headerShown:false,}}/>
         <Stack.Screen name="Editar" component={upDate} options={{headerShown:false,}}/>
         <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown:false,}}/>
         <Stack.Screen name="Perfil" component={Perfil} options={{headerStyle:{backgroundColor:"#A370F7"}, headerTintColor:"#FFF"}}/>
         <Stack.Screen name="Cadastrar" component={Cadastro} options={{headerStyle:{backgroundColor:"#A370F7"}, headerTintColor:"#FFF"}}/>
         <Stack.Screen name="Cadastrar Produto" component={CadastroProduto} options={{headerShown:false,}}/>
>>>>>>> 79661338929a1815e059b0239c02b5fbc50b287b
    </Stack.Navigator>

    );
} 