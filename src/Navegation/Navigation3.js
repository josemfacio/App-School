import React from 'react';
import Inicio from '../screems/Inicio';
import Calificaciones from '../screems/Calificaciones';
import Asistencia from '../screems/Asistencia';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="calificaciones" component={Calificaciones} />
      <Tab.Screen name="asistencia" component={Asistencia} />
    </Tab.Navigator>
  );
};
export default App;
