import { FlatList, View } from "react-native";
import MealItem from "../MealItem/MealItem";
import styles from "./MealsCatalog.style";

export function MealsCatalog({ data }){
    function renderMealItem(itemData){
        return (
            <MealItem
                id={ itemData.item.id }
                title={ itemData.item.title } 
                imageUrl={ itemData.item.imageUrl }
                affordability={ itemData.item.affordability }
                duration={ itemData.item.duration }
                complexity={ itemData.item.complexity }
            />
        )
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={ renderMealItem }
            />
        </View>
    );
}