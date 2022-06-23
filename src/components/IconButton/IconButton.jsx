import { Pressable } from "react-native";
import styles from "./IconButton.style";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({icon,color,onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}
