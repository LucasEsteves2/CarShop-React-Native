
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../src/screens/login";
import BottomTabNavigator from "../navigation/tabNavigator";
import Cadastro from "../src/screens/Cadastro/index";
import { upDate } from "../src/screens/upDate";
import {Cadastrar} from "../src/screens/CadastroProduto/index";



const Stack = createStackNavigator();

export const Routes = () => {
  return (
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
         <Stack.Screen name="Cadastrar" component={Cadastro} options={{headerShown:false,}}/>
         <Stack.Screen name="CadastrarProduto" component={Cadastrar} options={{headerShown:false,}}/>
>>>>>>> 11e6d037f5fd5c44fb095873edbc7318498847a2
    </Stack.Navigator>

  );
}