import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { MEALS } from "../../../data/dumy-data";

import IconButton from "../../components/IconButton/IconButton";
import MealDetails from "../../components/MealDetails/MealDetails";
import List from "../../components/MealList/List";
import Subtitle from "../../components/MealSubtitle/Subtitle";
import { FavoritesContext } from "../../store/context/favorite-context";
import styles from './MealDetailScreen.style';

export default function MealDetailScreen({ route,navigation}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const favoriteMealContext = useContext(FavoritesContext);
    const mealsIsFavorite = favoriteMealContext.ids.includes(mealId);

    function changeFavoriteStatusHander(){
        if(mealsIsFavorite){
            favoriteMealContext.removeFavorite(mealId);
        } else {
            favoriteMealContext.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: MEALS.find((meal) => meal.id === mealId).title,
            headerRight: () => { 
                return <IconButton 
                    icon={ mealsIsFavorite ? "heart" : "heart-outline" } 
                    color='#db5373' 
                    onPress={ changeFavoriteStatusHander }
                />
            }
        });
    },[mealId,navigation,changeFavoriteStatusHander]);
    
    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.innerContainer}>
                <Image source={ {uri: selectedMeal.imageUrl} } style={ styles.image }/>
            </View>
            <Text style={styles.title} > {selectedMeal.title} </Text>
            <MealDetails 
                duration={ selectedMeal.duration } 
                complexity={ selectedMeal.complexity } 
                affordability={ selectedMeal.affordability }
                textStyle={styles.detailText}
            />
            <View style={ styles.listOuterContainer }>
                <View style={ styles.listContainer }>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}
