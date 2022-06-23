import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator 
            initialRouteName="Categories"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen name="Categories" component={CategoriesScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen}/>
        </Tab.Navigator>
    );
}
