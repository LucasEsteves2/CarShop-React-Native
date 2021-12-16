
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { Login } from "../src/screens/login";
import BottomTabNavigator from "../navigation/tabNavigator";
import Cadastro from "../src/screens/Cadastro/index";
import { upDate } from "../src/screens/upDate";

const Stack = createStackNavigator();

export const Routes=()=>{
    return(

    <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{headerShown:false,}}/>
       <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown:false,}}/>
         <Stack.Screen name="Cadastrar" component={Cadastro} options={{headerShown:false,}}/>
         <Stack.Screen name="Editar" component={upDate} options={{headerShown:false,}}/>

    </Stack.Navigator>

    );
}