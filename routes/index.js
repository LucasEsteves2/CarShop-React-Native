
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import { Login } from "../src/screens/login";
import { Home } from "../src/screens/home";
import BottomTabNavigator from "../navigation/tabNavigator";

const Stack = createStackNavigator();

export const Routes=()=>{
    return(

    <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{headerShown:false,}}/>
       <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown:false,}}/>
    </Stack.Navigator>

    );
}