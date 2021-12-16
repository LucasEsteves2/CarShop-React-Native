
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { Login } from "../src/screens/login";
import BottomTabNavigator from "../navigation/tabNavigator";
import Cadastro from "../src/screens/Cadastro";
import {upDate} from "../src/screens/upDate";
import {Perfil} from "../src/screens/perfil";

const Stack = createStackNavigator();

export const Routes=()=>{
    return(

    <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{headerShown:false,}}/>
       <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown:false,}}/>
       <Stack.Screen name="Perfil" component={Perfil} options={{headerStyle:{backgroundColor:"#A370F7"}, headerTintColor:"#FFF"}}/>
       <Stack.Screen name="Cadastrar" component={Cadastro} options={{headerStyle:{backgroundColor:"#A370F7"}, headerTintColor:"#FFF"}}/>
       <Stack.Screen name="upDate" component={upDate} options={{headerStyle:{backgroundColor:"#A370F7"}, headerTintColor:"#FFF"}}/>
    </Stack.Navigator>

    );
}