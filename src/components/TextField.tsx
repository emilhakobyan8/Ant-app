import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import type { ViewStyle, TextInputProps } from 'react-native'

interface ITextField {
    onChange: Function,
    label: string,
}

const TextField: React.FC<ITextField, TextInputProps> = ({label, inputStyle, ...inputProps}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, inputStyle]}
                {...inputProps}
            />
        </View>
    )
}

export default TextField

interface IStyles {
    button: ViewStyle
}

const styles = StyleSheet.create<IStyles>({
    wrapper: {
      width: '100%',
      marginTop: 16
    },
    label: {
        textAlign:'left',
        color: '#132139',
        fontSize: 18
    },
    input: {
        height: 40,
        backgroundColor: '#efefef',
        paddingHorizontal: 8,
        borderRadius: 4
    }
})
