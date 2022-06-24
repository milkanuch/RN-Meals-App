import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import TabNavigation from "./TabNavigation";
import MealDetailScreen from "../screens/Detail/MealDetailScreen";
import MealOverviewScreen from "../screens/Overview/MealsOverviewScreen";
import FavoritesContextProvider from "../store/context/favorite-context";

export default function AppNavigation() {
    const Stack = createNativeStackNavigator();
    
    return (
        <>
            <StatusBar style='light'></StatusBar>
            <FavoritesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="MealsCategories"
                        screenOptions={{
                        title: "Meals Categories",
                        headerStyle: { backgroundColor: "#7a5d79" },
                        headerTintColor: "#f0f0f0",
                        contentStyle: { backgroundColor: '#876986'}
                        }}
                    >
                        <Stack.Screen name="Drawer" component={TabNavigation} />
                        <Stack.Screen name="MealsOverview" component={MealOverviewScreen} />
                        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </FavoritesContextProvider>
        </>
    );
}
