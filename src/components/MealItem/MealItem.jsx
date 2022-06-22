import { useNavigation } from "@react-navigation/native";
import { Image, Platform, Pressable, Text, View } from "react-native";
import MealDetails from "../MealDetails/MealDetails";
import styles from "./MealItem.style";

export default function MealItem({ id, title, imageUrl,duration,complexity,affordability}) {
    const navigation = useNavigation();

    function selectMealItemHandler(){ 
        navigation.navigate('MealDetail',{
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}} 
                style={ ({pressed}) => pressed && Platform.OS === 'ios' ? styles.buttonPressed : null } 
                onPress={ selectMealItemHandler } >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title} >{title}</Text>
                    </View>
                    <MealDetails duration={ duration } complexity={ complexity } affordability={ affordability }/>
                </View>
            </Pressable>
        </View>
    );
}
