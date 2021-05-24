import React, {useState, useEffect, Fragment} from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import firebase from '../../utils/firebase';
import 'firebase/firestore';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Item,
} from 'native-base';
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);
export default function Inicio1() {
  const [notic, setNotic] = useState([]);
  useEffect(() => {
    db.collection('News')
      .get()
      .then(resultado => {
        let arrayaux = [];
        resultado.docs.map(doc => {
          const data = doc.data();
          data.id = doc.id;
          arrayaux.push(data);
        });
        setNotic(arrayaux);
        console.log(arrayaux);
      });
  }, []);
  return (
    <ScrollView style={{height: '100'}}>
      <Container>
        <Header />
        <Content padder>
          <Card>
            {notic.map((item, index) => (
              <RenderNoticias item={item} key={index} />
            ))}
          </Card>
        </Content>
      </Container>
    </ScrollView>
  );
}

function RenderNoticias(props) {
  const {item} = props;
  return (
    <>
      <CardItem header bordered style={{backgroundColor: '#ffff72'}}>
        <Text>Noticia</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Image style={styles.image} source={{uri: item.Img}} />
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Text>{item.Datos}</Text>
      </CardItem>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
  },
});
