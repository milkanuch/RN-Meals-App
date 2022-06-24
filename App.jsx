import { useFonts, Inter_600SemiBold  } from '@expo-google-fonts/inter';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold 
    });

    if (!fontsLoaded) {
        return null;
  }
  return <AppNavigation />
}


