import React, { useRef, useEffect, useCallback, useState, useMemo} from 'react';
import { Animated, Text, StyleSheet, Dimensions, Easing } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import {IAnt} from "../../types";

interface IAntProps {
    ant: IAnt
}

const END_POS = Dimensions.get('screen').width
const ANT_SIZE = 40

const Ant: React.FC<IAntProps> = ({ant}) => {
    const currentPosition = useRef(new Animated.Value(-ANT_SIZE)).current
    const [speed, setSpeed] = useState(1 / ant.weight)

    const duration = useMemo(() => {
        return (END_POS - currentPosition._value) / speed
    }, [speed])

    const slide = useCallback(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(currentPosition, {
                    toValue: END_POS,
                    duration: duration * 2,
                    useNativeDriver: true,
                    easing: Easing.linear
                }),
                Animated.timing(currentPosition, {
                    toValue: -ANT_SIZE,
                    duration: 0,
                    useNativeDriver: true,
                    easing: Easing.linear
                })
            ]),
            {iterations: -1},
        ).start();
    }, [ant?.rate, duration])

    useEffect(() => {
        slide()
    }, [])

    useEffect(() => {
        if(ant?.rate){
            setSpeed((1 / (ant.weight * (1 + ant.rate))))
            slide()
        }
    }, [ant?.rate, slide])

    return(
        <Animated.View style={[styles.antImage, {backgroundColor: ant.color.toLowerCase(), transform: [{ translateX: currentPosition }]}]}>
            <Text style={styles.antImageText}>{ant.weight}</Text>
        </Animated.View>
    )
}

export default Ant;

interface IStyles {
    antImage: ViewStyle,
    antImageText: TextStyle
}

const styles = StyleSheet.create<IStyles>({
    antImage: {
        marginTop: 8,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    antImageText: {
        color: '#fff'
    }
})
