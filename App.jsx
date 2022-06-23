import { useFonts, Inter_600SemiBold  } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MealsOverviewScreen from './src/screens/Overview/MealsOverviewScreen';
import MealDetailScreen from './src/screens/Detail/MealDetailScreen';
import TabNavigation from './src/navigation/TabNavigation';

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
        <Stack.Navigator 
        initialRouteName='MealsCategories' 
        screenOptions={{
                title: 'Meals Categories',
                //header background
                headerStyle: { backgroundColor: '#7a5d79'},
                headerTintColor: '#f0f0f0',
                //header background
                contentStyle: { backgroundColor: '#876986'}
              }
            }>
          <Stack.Screen name='Drawer' component={TabNavigation} />
          <Stack.Screen name='MealsOverview'component={MealsOverviewScreen} />
          <Stack.Screen name='MealDetail' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


