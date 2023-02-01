import { Loading } from '@components/Loading';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Text } from 'react-native';
import { THEME } from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Text>Ola</Text> : <Loading />}
    </NativeBaseProvider>
  );
}

