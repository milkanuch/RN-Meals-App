import { Pressable, Text, View } from "react-native";
import styles from "./CategoryGridTile.style";

export default function CategoryGridTile({ title,color,onPress }) {
    return (
        <View style={ styles.gridItem }>
            <Pressable 
                android_ripple={{color: '#c0c0c0'}} 
                style={ ({pressed}) => [styles.button,pressed ? styles.buttonPressed : null] }
                onPress={ onPress }
            >
                <View style={ [styles.innerContainer,{backgroundColor: color}] }>
                    <Text style={ styles.title }>
                        { title }
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}
