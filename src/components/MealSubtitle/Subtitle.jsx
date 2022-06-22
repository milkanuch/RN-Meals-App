import { Text, View } from "react-native";
import styles from "./Subtitle.style";

export default function Subtitle({children}) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle} >{children}</Text>
        </View>
    );
}
