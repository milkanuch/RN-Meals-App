import { Text, View } from "react-native";
import styles from "./MealDetails.style";

export default function MealDetails({ duration, complexity, affordability, style, textStyle }) {
    return (
        <View style={[ styles.details,style ]}>
            <Text style={ [styles.detailItem, textStyle ]} >{duration}m</Text>
            <Text style={ [styles.detailItem, textStyle ]} >{complexity.toUpperCase()}</Text>
            <Text style={ [styles.detailItem, textStyle ]} >{affordability.toUpperCase()}</Text>
        </View>
    );
}
