import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Headline, Text, Subheading, Button, FAB} from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const DetallesCliente = ({route, navigation}) => {
  const {guardarConsultarAPI} = route.params;
  const {nombre, correo, telefono, empresa, id} = route.params.item;

  const mostrarConfirmacion = () => {
    Alert.alert(
      '¿Deseas eliminar este cliente',
      'Un contacto eliminado no se puede eliminar',
      [
        {text: 'Sí,eliminar', onPress: () => eliminarContacto()},
        {text: 'Cancelar', style: 'cancel'},
      ],
    );
  };
  const eliminarContacto = async () => {
    const url = `http://192.168.0.17:3000/clientes/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Inicio');
    guardarConsultarAPI(true);
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre} </Headline>
      <Text style={styles.texto}>
        Empresa: <Subheading>{empresa} </Subheading>{' '}
      </Text>
      <Text style={styles.texto}>
        Correo: <Subheading>{correo} </Subheading>{' '}
      </Text>
      <Text style={styles.texto}>
        Telefono: <Subheading>{telefono} </Subheading>{' '}
      </Text>
      <Button
        style={styles.boton}
        mode="contained"
        onPress={() => mostrarConfirmacion()}
        icon={'cancel'}
      >
        Eliminar Cliente
      </Button>

      <FAB
        onPress={() =>
          navigation.navigate('NuevoCliente', {
            cliente: route.params.item,
            guardarConsultarAPI,
          })
        }
        color="#fff"
        icon={'pencil'}
        style={styles.fab}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  texto: {
    marginBottom: 20,
    fontSize: 18,
  },
  boton: {
    marginTop: 100,
    backgroundColor: 'red',
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 30,
    borderRadius: 50,
    backgroundColor: '#00B0E4',
    color: '#fff',
  },
});
export default DetallesCliente;
