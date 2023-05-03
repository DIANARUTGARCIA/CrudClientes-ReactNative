import React,{useEffect,useState} from 'react'
import { Text,StyleSheet } from 'react-native';
import axios from 'axios'

const Inicio = () => {
 const [clientes, guardarclientes] = useState([])
  useEffect(() => {
    const obtenerClienteApi = async () => {
      try {
        const resultado = await axios.get('http://192.168.0.17:3000/clientes')
        guardarclientes(resultado.data)
      } catch (error) {
        console.log(error)
      }
      
    };

    obtenerClienteApi()
  }, [])

  return (
    <Text> DESDE INICIO</Text>
  )
}

const styles = StyleSheet.create({

});

export default Inicio