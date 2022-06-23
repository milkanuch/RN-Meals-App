import { useLayoutEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { MEALS } from "../../../data/dumy-data";

import IconButton from "../../components/IconButton/IconButton";
import MealDetails from "../../components/MealDetails/MealDetails";
import List from "../../components/MealList/List";
import Subtitle from "../../components/MealSubtitle/Subtitle";
import styles from './MealDetailScreen.style';

export default function MealDetailScreen({ route,navigation}) {
    const selectedMeal = MEALS.find((meal) => meal.id === route.params.mealId);

    function headerButtonPressed(){
        console.log("Pressed!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: MEALS.find((meal) => meal.id === route.params.mealId).title,
            headerRight: () => { 
                return <IconButton icon="heart" color='#db5373' onPress={ headerButtonPressed }/>
            }
        });
    },[route.params.mealId,navigation]);
    
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
