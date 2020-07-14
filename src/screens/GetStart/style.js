import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
    },
    logo: {
        width: 100,
        height: 100,
        top: 110,
        left: 35
    },
    margin: {
        width: '100%',
        height: 100,
        backgroundColor: '#ffffff',
        top: 370
    },
    text: {
        top: 10,
        left: 50,
        fontSize: 15,
        fontWeight: 'bold'
    },
    regbutton: {
        alignItems: "center",
        top:20,
        left: 50,
        width: "75%",
        height: 50,
        backgroundColor: "#33ff33"
    },
    buttontext: {
        fontSize: 18,
        top: 13,
        fontWeight: "bold"
    }
})