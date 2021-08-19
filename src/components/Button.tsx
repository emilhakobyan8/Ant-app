import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native'

interface IButton {
    onPress: Function,
    label: string,
    labelStyle: TextStyle
    buttonStyle: ViewStyle
}

const Button: React.FC<IButton> = ({onPress, label, buttonStyle, labelStyle}) => (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle]}>
        <Text style={[styles.textAlign, labelStyle]}>
            {label}
        </Text>
    </Pressable>
)

export default Button

interface IStyles {
    button: ViewStyle
}

const styles = StyleSheet.create<IStyles>({
    button: {
        width: 120,
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    label: {
        textAlign:'center'
    }
})
