import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../../../data/dumy-data";
import { MealsCatalog } from "../../components/MealRecord/MealsCatalog";


export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealsItem) => {
        return mealsItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((category) => category.id === catId).title
        });
    },[catId,navigation]);
    
    return <MealsCatalog data={displayedMeals} />
}