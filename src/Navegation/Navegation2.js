import React, {Fragment} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Configuracion from '../screems/Configuracion';
import Perfil from '../screems/Perfil';
import Materias from '../screems/Materias';
import Ubicacion from '../screems/Ubicacion';
import BotonNave from './Navigation3';
import firebase from '../../utils/firebase';
import 'firebase/firestore';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);
const ObtenerNoticias = id => {
  const [news, setNews] = useState('');
  db.collection('admins')
    .where('id', '==', id)
    .get()
    .then(resultado => {
      let arrayaux = [];
      resultado.docs.map(doc => {
        const data = doc.data();
        data.id = doc.id;
        arrayaux.push(data);
      });
      setNews(arrayaux[0].Datos);
    });
  return (
    <View>
      <Text>hola</Text>
    </View>
  );
};
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={BotonNave} />
      <Drawer.Screen
        name="perfil"
        component={Perfil}
        options={{title: 'Perfil', headerShown: false}}
      />
      <Drawer.Screen
        name="configuracion"
        component={Configuracion}
        options={{title: 'Configuraciones', headerShown: false}}
      />
      <Drawer.Screen
        name="materias"
        component={Materias}
        options={{title: 'Materias', headerShown: false}}
      />
      <Drawer.Screen
        name="ubicacion"
        component={Ubicacion}
        options={{title: 'Ubicacion', headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default App;
