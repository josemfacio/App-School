import React, {useState} from 'react';
import firebase from '../../utils/firebase';
import 'firebase/firestore';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);
import {
  Alert,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
const Home = props => {
  const [nombre, guardarnombre] = useState('');
  const [contra, guardarcontraseña] = useState('');
  const {navigation} = props;
  const [isloading, setIsloading] = useState(false);
  const mostrarAlerta = () => {
    Alert.alert('Error...', 'Ambos campos obligatorios', [{text: 'OK'}]);
  };
  const mostrarAlerta2 = () => {
    Alert.alert('Error...', 'Error inesperado', [{text: 'OK'}]);
  };
  const mostrarAlerta1 = arrayaux => {
    Alert.alert('Bienvenido', 'Bienbenido ' + arrayaux[0].names, [
      {text: 'OK'},
    ]);
    navigation.navigate('homecopy', {nombre: arrayaux[0].names});
  };
  const Verificar = () => {
    if (nombre.trim() === '' || contra.trim() === '') {
      mostrarAlerta();
      return;
    } else {
      setIsloading(true);
      db.collection('admins')
        .where('id', '==', nombre)
        .where('password', '==', contra)
        .limit(1)
        .get()
        .then(resultado => {
          let arrayaux = [];
          resultado.docs.map(doc => {
            const data = doc.data();
            data.id = doc.id;
            arrayaux.push(data);
          });
          mostrarAlerta1(arrayaux);
        })
        .catch(a => {
          console.log(a);
          mostrarAlerta2();
        })
        .finally(() => {
          setIsloading(false);
        });
    }
  };
  return (
    <View style={styles.fondo}>
      <Image source={require('../../img/Logo.png')} style={styles.stretch} />
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        onChangeText={texto => guardarnombre(texto)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Contraseña"
        onChangeText={texto => guardarcontraseña(texto)}
      />
      <TouchableHighlight onPress={Verificar}>
        <View style={styles.button}>
          <Text style={styles.countText}>
            {isloading ? 'CARGANDO...' : 'Ingresar'}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 10,
    borderColor: '#b57c00',
    backgroundColor: '#ffff72',
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 16,
    left: 60,
  },
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#ff8000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
  countText: {
    color: '#FFF5ba',
    fontWeight: 'bold',
    fontSize: 20,
  },
  fondo: {
    backgroundColor: '#78288C',
    minHeight: '100%',
  },
});
export default Home;
