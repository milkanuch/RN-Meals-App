import { Platform, StyleSheet } from "react-native";


export default StyleSheet.create({
    gridItem: { 
        flex: 1,
        margin: 12, 
        height: 150,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { 
            width: 0,
            height: 2
        },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: { 
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold'
    }
})