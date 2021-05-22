import React from 'react';
import {View, Text} from 'react-native';
const App = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Estas en Inicio</Text>
    </View>
  );
};
export default App;
