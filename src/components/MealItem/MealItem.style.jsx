import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    mealItem: { 
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#C3B1E1',
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { 
            width: 0,
            height: 2
        },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: { 
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 6
    },
    buttonPressed: {
        opacity: 0.5
    }
});