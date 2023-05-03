import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Portal,
  Dialog,
  Paragraph,
} from 'react-native-paper';
import axios from 'axios';

import globalStyles from '../styles/global';

const NuevoCliente = ({navigation, route}) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [alerta, guadarAlerta] = useState(false);

  useEffect(() => {
    if (route.params.cliente) {
      const {nombre, telefono, correo, empresa} = route.params.cliente;
      setCorreo(correo);
      setNombre(nombre);
      setTelefono(telefono);
      setEmpresa(empresa);
    }
  }, []);

  //Almacenara el cliente
  const guardarCliente = async () => {
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      guadarAlerta(true);
      return;
    }

    const cliente = {nombre, telefono, correo, empresa};
    console.log(cliente);
    //Guardar o editar un nuevo cliente
    if (route.params.cliente) {
      const {id} = route.params.cliente;
      cliente.id = id;
      const url = `http://192.168.0.17:3000/clientes/${id}`;
      try {
        await axios.put(url, cliente);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.post('http://192.168.0.17:3000/clientes', cliente);
      } catch (error) {
        console.log(error);
      }
    }

    navigation.navigate('Inicio');
    setNombre('');
    setCorreo('');
    setEmpresa('');
    setTelefono('');
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      <TextInput
        label={'Nombre'}
        placeholder="Tu nombre"
        value={nombre}
        onChangeText={texto => setNombre(texto)}
        style={styles.input}
      />

      <TextInput
        label={'Telefono'}
        placeholder="9565656"
        value={telefono}
        onChangeText={texto => setTelefono(texto)}
        style={styles.input}
      />

      <TextInput
        label={'Correo'}
        placeholder="correo@correo"
        value={correo}
        onChangeText={texto => setCorreo(texto)}
        style={styles.input}
      />

      <TextInput
        label={'Empresa'}
        placeholder="Nombre Empresa"
        value={empresa}
        onChangeText={texto => setEmpresa(texto)}
        style={styles.input}
      />
      <Button
        icon={'pencil-circle'}
        mode="contained"
        onPress={() => guardarCliente()}
      >
        Guardar Cliente
      </Button>

      <Portal>
        <Dialog visible={alerta} onDismiss={() => guadarAlerta(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => guadarAlerta(false)}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});
export default NuevoCliente;
