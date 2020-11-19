import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#6548A3" barStyle="light-content"/>

      <NavigationContainer>
      	<Routes />
      </NavigationContainer>	
    </View>
  );
}
