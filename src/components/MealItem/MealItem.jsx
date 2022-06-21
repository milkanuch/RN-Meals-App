import { Image, Platform, Pressable, Text, View } from "react-native";
import styles from "./MealItem.style";

export default function MealItem({ title, imageUrl,duration,complexity,affordability}) {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} style={ ({pressed}) => pressed && Platform.OS === 'ios' ? styles.buttonPressed : null }>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title} >{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={ styles.detailItem } >{duration}m</Text>
                        <Text style={ styles.detailItem } >{complexity.toUpperCase()}</Text>
                        <Text style={ styles.detailItem } >{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}
