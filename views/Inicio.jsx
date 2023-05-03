import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, FlatList, View} from 'react-native';
import {List, Headline,FAB} from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';

const Inicio = ({navigation}) => {

  const handlePress = () => {
    navigation.navigate('NuevoCliente');
  };

  const [clientes, guardarclientes] = useState([]);
  useEffect(() => {
    const obtenerClienteApi = async () => {
      try {
        const resultado = await axios.get('http://192.168.0.17:3000/clientes');
        guardarclientes(resultado.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerClienteApi();
  }, [clientes]);

  return (
    <View style={globalStyles.contenedor}>
      <View style={styles.title}>
       <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Clientes" : "Aún no hay Clientes"} </Headline>
      </View>
      
      <FlatList
        data={clientes}
        keyExtractor={cliente => (cliente.id).toString()}
        renderItem={({item}) => (
          <List.Item title={item.nombre} description={item.empresa} 
          onPress={()=>navigation.navigate('DetallesCliente',{item})}/>
        )}
      />
      <FAB
      onPress={() => handlePress()}
      color='#fff'
       icon={'plus'}
       style={styles.fab}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  fab:{
    position:'absolute',
    margin:20,
    right:0,
    bottom:30,
    borderRadius:50,
    backgroundColor:'#00B0E4',
    color:'#fff',
  },
  title:{
    marginHorizontal:10,
    borderBottomWidth:1,
    borderBottomColor:'#000',
  }
});

export default Inicio;
