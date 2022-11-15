import React from "react";
import { NativeBaseProvider, StatusBar } from 'native-base';
import { THEME } from "./src/styles/theme"
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from "@expo-google-fonts/roboto"

import { Loading } from './src/components/Loading';
import { Signin } from './src/screens/Signin';
import { New } from './src/screens/New';
import { Find } from './src/screens/Find';
import { Pools } from './src/screens/Pools';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_500Medium, Roboto_400Regular })

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor="transparent"
          translucent
        />

        {fontsLoaded ? <Pools /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
