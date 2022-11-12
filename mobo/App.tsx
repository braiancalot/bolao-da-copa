import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from "./src/styles/theme"
import { useFonts, Inter_700Bold, Inter_500Medium, Inter_400Regular } from "@expo-google-fonts/inter"

import { Loading } from './src/components/Loading';
import { Signin } from './src/screens/Signin';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_700Bold, Inter_500Medium, Inter_400Regular })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Signin /> : <Loading />}
    </NativeBaseProvider>
  );
}
