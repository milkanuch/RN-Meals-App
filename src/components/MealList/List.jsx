import { Text, View } from "react-native";
import styles from "./List.style";

export default function List({ data }) {
    return data.map((dataPoint) => (
            <View key={dataPoint} style={styles.listItem}>
                <Text style={styles.itemText}>{ dataPoint }</Text>
            </View>
        )
    );
}
