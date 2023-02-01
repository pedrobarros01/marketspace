import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { StatusBar } from 'react-native';


import { Loading } from '@components/Loading';

import { SignIn } from '@screens/SignIn';


import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
      
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}

