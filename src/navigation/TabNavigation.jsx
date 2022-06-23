import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator 
            initialRouteName="Categories"
            activeColor="#f0edf6"
            inactiveColor="#e36b94"
            barStyle={{ backgroundColor: '#7a5d79' }}
            screenOptions={{
                sceneContainerStyle: {backgroundColor: '#876986'}
            }}
        >
            <Tab.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={{
                        tabBarIcon: () => (
                            <Ionicons size={24} name="home" color={'#e36b94'} />
                        )
                    }
                }
            />
            <Tab.Screen 
                name="Favorites" 
                component={FavoritesScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons size={24} name="star" color={'#e36b94'} />
                    )
                    }
                }
            />
        </Tab.Navigator>
    );
}
