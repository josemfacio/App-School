import {NavigationContainer} from '@react-navigation/native';
import Navigation2 from '../Navegation/Navegation2';
import Navigation3 from '../Navegation/Navigation3';
import React from 'react';
import {View, Text} from 'react-native';
const App = ({props, route}) => {
  const {nombre} = route.params;
  return (
    <>
      <NavigationContainer independent={true}>
        <Navigation2 />
      </NavigationContainer>
    </>
  );
};
export default App;
