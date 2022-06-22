import { useLayoutEffect } from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES, MEALS } from "../../../data/dumy-data";
import MealItem from "../../components/MealItem/MealItem";
import styles from "./MealsOverviewScreen.style";

export default function MealsOverviewScreen({ route, navigation }){
    const displayedMeals = MEALS.filter((mealsItem) => {
        return mealsItem.categoryIds.indexOf(route.params.categoryId) >= 0;
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((category) => category.id === route.params.categoryId).title
        });
    },[route.params.categoryId,navigation]);
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={
                    (itemData) => 
                    <MealItem 
                        id={ itemData.item.id }
                        title={ itemData.item.title } 
                        imageUrl={ itemData.item.imageUrl }
                        affordability={ itemData.item.affordability }
                        duration={ itemData.item.duration }
                        complexity={ itemData.item.complexity }
                    />
                }
            />
        </View>
    );
}