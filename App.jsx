import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicio from './views/Inicio';
import DetallesCliente from './views/DetallesCliente';
import NuevoCliente from './views/NuevoCliente';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655BF',
  },
};

function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: theme.colors.primary,
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
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
      </PaperProvider>
    </>
  );
}

export default App;
