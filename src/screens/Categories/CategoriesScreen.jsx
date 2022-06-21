import { FlatList } from "react-native";
import { CATEGORIES } from "../../../data/dumy-data";
import CategoryGridTile from "../../components/CategoryGrid/CategoryGridTile";

export default function CategoriesScreen() { 
    return (
        <FlatList 
            data={ CATEGORIES } 
            keyExtractor={ (item) => item.id } 
            renderItem={(itemData) => <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />} 
        />
    );
}