import React from 'react';
import { createStackNavigator} from '@react-navigation/native-stack';


const Stack = createStackNavigator();

export const Routes=()=> {
    return(
        <Stack.Navigator>
            <Stack.Screen name=" "  component={  }/>
            <Stack.Screen name=" "  component={  }/>
        </Stack.Navigator>
    )
}