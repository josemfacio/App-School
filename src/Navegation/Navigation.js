import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import home from '../screems/Login';
import homecopy from '../screems/Inicio';
const Stack = createStackNavigator();
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={home}
        options={{title: 'Login', headerShown: false}}
      />
      <Stack.Screen
        name="homecopy"
        component={homecopy}
        options={{title: 'INICIO', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default App;
