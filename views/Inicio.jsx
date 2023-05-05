import {LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {List, Headline, FAB, Button} from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const Inicio = ({navigation}) => {
  const [consultarAPI, guardarConsultarAPI] = useState(true);
  const [clientes, guardarclientes] = useState([]);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const resultado = await axios.get('http://192.168.0.17:3000/clientes');
        guardarclientes(resultado.data);
        guardarConsultarAPI(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (consultarAPI) {
      obtenerClientesApi();
    }
  }, [consultarAPI]);

  return (
    <View style={globalStyles.contenedor}>
      <Button
        icon="plus-circle"
        onPress={() =>
          navigation.navigate('NuevoCliente', {guardarConsultarAPI})
        }
      >
        Nuevo Cliente
      </Button>

      <View style={styles.title}>
        <Headline style={globalStyles.titulo}>
          {clientes.length > 0 ? 'Clientes' : 'Aún no hay Clientes'}{' '}
        </Headline>
      </View>

      <FlatList
        data={clientes}
        keyExtractor={cliente => cliente.id.toString()}
        renderItem={({item}) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={() =>
              navigation.navigate('DetallesCliente', {
                item,
                guardarConsultarAPI,
              })
            }
          />
        )}
      />
      <FAB
        onPress={() =>
          navigation.navigate('NuevoCliente', {guardarConsultarAPI})
        }
        color="#fff"
        icon={'plus'}
        style={styles.fab}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 30,
    borderRadius: 50,
    backgroundColor: '#00B0E4',
    color: '#fff',
  },
  title: {
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});

export default Inicio;
