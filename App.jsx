import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicio from './views/Inicio';
import DetallesCliente from './views/DetallesCliente';
import NuevoCliente from './views/NuevoCliente';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio} />

          <Stack.Screen
            name="NuevoCliente"
            component={NuevoCliente}
            options={{
              title: 'Nuevo Cliente',
            }}
          />
          <Stack.Screen
            name="DetallesCliente"
            component={DetallesCliente}
            options={{
              title: 'Detalles Cliente',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
