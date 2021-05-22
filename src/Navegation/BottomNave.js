import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Perfil from '../screems/Perfil';
import Calificaciones from '../screems/Calificaciones';
import Asistencia from '../screems/Asistencia';

const Tab = createBottomTabNavigator();
export default function BottomNave() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="perfil"
        component={Perfil}
        options={{headerShown: false}}
      />
      <Tab.Screen name="calificaciones" component={Calificaciones} />
      <Tab.Screen name="asistencia" component={Asistencia} />
    </Tab.Navigator>
  );
}
