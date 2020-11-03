import React from 'react';
import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#6548A3" barStyle="light-content"/>

      <NavigationContainer>
      	<Routes />
      </NavigationContainer>	
    </View>
  );
}
