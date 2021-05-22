import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Calificaciones from '../screems/Calificaciones';
import Materias from '../screems/Materias';
import BotonNave from './Navigation3';
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen
        name="calificaciones"
        component={Calificaciones}
        options={{title: 'CALIFICAIONES', headerShown: false}}
      />
      <Drawer.Screen
        name="materias"
        component={Materias}
        options={{title: 'MATERIAS', headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default App;
