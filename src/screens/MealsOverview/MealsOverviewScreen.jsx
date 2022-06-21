import { FlatList, View } from "react-native";
import { MEALS } from "../../../data/dumy-data";
import MealItem from "../../components/MealItem/MealItem";
import styles from "./MealsOverviewScreen.style";

export default function MealsOverviewScreen({ route }){
    const displayedMeals = MEALS.filter((mealsItem) => {
        return mealsItem.categoryIds.indexOf(route.params.categoryId) >= 0;
    });

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={
                    (itemData) => 
                    <MealItem 
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