import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';

import globalStyles from '../styles/global';

const NuevoCliente = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');

  //Almacenara el cliente
  const guardarCliente =()=>{
    if(nombre === ''  || telefono===''  || correo ===''  || empresa===''){
      console.log('hay campos vacios baboso')
    }

  }

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
      <Button icon={'pencil-circle'} mode='contained' onPress={()=>guardarCliente()} >Guardar Cliente</Button>
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
