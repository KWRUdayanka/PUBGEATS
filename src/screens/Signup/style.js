import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 200,
        bottom: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    iconStyle: {
        color: '#5a52a5',
        fontSize: 28,
        marginLeft: 15
    },
    itemStyle: {
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#5a52a5',
    }
})