import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
import { useFonts, Inter_600SemiBold  } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold 
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
    <StatusBar style='light'></StatusBar>
      <CategoriesScreen />
    </>
  );
}


