import { StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native'

interface IStyles {
    screen: ViewStyle
}

const styles = StyleSheet.create<IStyles>({
    screen: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff'
    },
    screenTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#132139',
    },
    form: {
        marginTop: 32,
        width: '100%',
        paddingVertical: 32,
        paddingHorizontal: 32,
    },
    signInButton: {
        marginTop: 16,
        backgroundColor: '#132139',
        borderRadius: 4,
        paddingVertical: 16,
        width: 200,
    },
    signInButtonLabel: {
        color: '#aebed6'
    }
})

export default styles
