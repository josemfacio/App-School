import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navegation/Navigation';
import Navigation2 from './src/Navegation/Navegation2';

const App = () => {
  return (
    <>
      <NavigationContainer independent={true}>
        <Navigation />
      </NavigationContainer>
    </>
  );
};
export default App;
