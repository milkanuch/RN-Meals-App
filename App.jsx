import { useFonts, Inter_600SemiBold  } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverview/MealsOverviewScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold 
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <>
      <StatusBar style='light'></StatusBar>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen  name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen  name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


