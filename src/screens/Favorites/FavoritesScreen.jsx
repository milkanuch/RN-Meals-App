import React, { useContext } from 'react'
import styles from "./FavoritesScreen.style";
import { Text, View } from 'react-native';
import { MEALS } from '../../../data/dumy-data';
import { MealsCatalog } from '../../components/MealRecord/MealsCatalog';
import { FavoritesContext } from '../../store/context/favorite-context';

export default function FavoritesScreen() {
    const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));
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
