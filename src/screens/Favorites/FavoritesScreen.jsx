import styles from "./FavoritesScreen.style";
import { Text, View } from 'react-native';
import { MEALS } from '../../../data/dumy-data';
import { MealsCatalog } from '../../components/MealRecord/MealsCatalog';
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
    const favoriteMealIds = useSelector(state => state.favoriteMeal.ids );
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if(favoriteMeals.length === 0 ){
        return (
            <View style={ styles.rootContainer }>
                <Text style={ styles.rootText }>You have no favorite meals yet.</Text>
            </View>
        );
    }

    return (
        <View style={styles.screen}> 
            <MealsCatalog data={ favoriteMeals } />
        </View>
    );
}
