import React from 'react';
import {View, Text} from 'react-native';
import firebase from '../../utils/firebase';
import 'firebase/firestore';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

const App = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Estas en Perfil</Text>
      <ScrollView>
        <ObtenerNoticias />
      </ScrollView>
    </View>
  );
};
export default App;
