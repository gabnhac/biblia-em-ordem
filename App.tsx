import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import theme from '@theme/index';
import Routes from '@routes/index';
import Loading from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (

      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='dark-content'
          translucent
        />
        {fontsLoaded ? <Routes/> : <Loading/>}
      </View>

  );
}

