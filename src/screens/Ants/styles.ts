import { StyleSheet, Dimensions } from 'react-native'
import type { ViewStyle, TextStyle } from 'react-native'

interface IStyles {
    container: ViewStyle;
    itemContainer: ViewStyle;
    lighterRow: ViewStyle;
    column: ViewStyle;
    columnLabel: TextStyle;
    columnText: TextStyle;
    calculateAllButton: ViewStyle;
    calculateAllButtonLabel: TextStyle;
    calculateButtonWrapper: ViewStyle;
    calculateButton: ViewStyle;
    calculateButtonLabel: TextStyle;
}


const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create<IStyles>({
    container: {
        height: deviceHeight / 2,
        backgroundColor: '#fff'
    },
    itemContainer: {
        backgroundColor: '#132139',
        justifyContent: 'space-around',
    },
    lighterRow: {
      backgroundColor: '#325692'
    },
    column: {
      flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#aebed6'
    },
    columnLabel: {
        color: '#aebed6'
    },
    columnText: {
        color: '#aebed6',
        textAlign: 'left'
    },
    calculateAllButton: {
      backgroundColor: "#132139"
    },
    calculateAllButtonLabel: {
      color: "#aebed6"
    },
    calculateButtonWrapper: {
      width: '100%',
      alignItems: 'flex-end',
        paddingRight: 16,
        paddingVertical: 8
    },
    calculateButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: 100,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#aebed6'
    },
    calculateButtonLabel: {
        color: '#132139'
    },
    header: {
      flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loaderContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles
