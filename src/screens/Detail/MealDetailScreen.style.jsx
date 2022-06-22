import { StyleSheet } from "react-native";

export default StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    innerContainer: {
        overflow: 'hidden',
        alignItems: 'center'
    },
    image: { 
        borderRadius: 20,
        width: '90%',
        height: 250
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#f0f0f0'
    },
    detailText: { 
        color: '#f0f0f0'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: { 
        width: '80%'
    }
});