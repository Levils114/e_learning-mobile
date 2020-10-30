import React from 'react';
import { View, StatusBar } from 'react-native';

//import Introdution from './src/pages/Introdution/';

import Home from './src/pages/Home/';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#6548A3" barStyle="light-content"/>
      <Home />
    </View>
  );
}
