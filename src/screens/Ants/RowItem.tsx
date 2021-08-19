import React from 'react';
import { View, Text } from 'react-native'
import Button from '../../components/Button'

import styles from "./styles";
import {IAnt} from "../../types";

interface IRowItem {
    item: IAnt,
    index: number,
    onPress: (item?: IAnt) => void
}

const RowItem: React.FC<IRowItem> = ({item, index, onPress}) => {
    return (
        <View style={[styles.itemContainer, index % 2 === 0 ? styles.lighterRow : {}]}>
            <View style={styles.column}>
                <Text style={styles.columnLabel}>Name:</Text>
                <Text style={styles.columnText}>{item.name}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.columnLabel}>Color:</Text>
                <Text style={styles.columnText}>{item.color}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.columnLabel}>Weight:</Text>
                <Text style={styles.columnText}>{item.weight}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.columnLabel}>Length:</Text>
                <Text style={styles.columnText}>{item.length}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.columnLabel}>Status:</Text>
                <Text style={styles.columnText}>{item.isCalculating ? 'Calculating' : item.rate ? item.rate.toFixed(2) :'Not Calculated'}</Text>
            </View>
            <View style={styles.calculateButtonWrapper}>
                <Button
                    label="Calculate"
                    onPress={onPress(item)}
                    buttonStyle={styles.calculateButton}
                    labelStyle={styles.calculateButtonLabel}
                />
            </View>
        </View>
    )
};

export default RowItem
