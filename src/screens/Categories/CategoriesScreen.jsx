import { FlatList } from "react-native";
import { CATEGORIES } from "../../../data/dumy-data";
import CategoryGridTile from "../../components/CategoryGrid/CategoryGridTile";
import styles from "./CategoriesScreen.style";

export default function CategoriesScreen({ navigation }) { 
    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id
            });
        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={ pressHandler } /> 
    }

    return (
        <FlatList 
            style={styles.screen}
            data={ CATEGORIES } 
            keyExtractor={ (item) => item.id } 
            renderItem={ 
                renderCategoryItem 
            } 
            numColumns={2}
        />
    );
}