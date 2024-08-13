import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import Loading from '@components/Loading';

import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import Routes from '@routes/index';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>

      <StatusBar
        backgroundColor='transparent'
        barStyle='dark-content'
        translucent
      />

      {fontsLoaded ? <Routes/> : <Loading/>}

    </ThemeProvider>
  );
}

