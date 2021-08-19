import React, {useEffect, useReducer} from 'react';
import {FlatList, View} from 'react-native'
import {useQuery} from "@apollo/client";

import {GET_ANTS} from "../../api/ants";
import Button from "../../components/Button"

import styles from "./styles"
import RowItem from "./RowItem";
import generateOdds from "../../helpers/generateOdds";
import {IAnt} from "../../types";


const initialState = {ants: []};

enum ActionKind {
    setAnts = 'setAnts',
    updateItem = 'updateItem',
}

interface ActionType {
    type: ActionKind;
    payload: IAnt;
}

interface StateType {
    ants: IAnt[];
}

const reducer = (state:StateType, action: ActionType) => {
    switch (action.type) {
        case 'setAnts':
            return {...state, ants: action.payload};
        case 'updateItem':
            return {...state, ants: state.ants.map((ant) => {
                if(ant.name === action.payload.name){
                    return ({
                        ...action.payload
                    })
                }
                return ant
                })};
        default:
            throw new Error();
    }
}

const Ants: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {data} = useQuery(GET_ANTS)

    const calculateHandler = item => (calculatedRate) => {
        dispatch({type:'updateItem', payload: {...item, isCalculating: false, rate: calculatedRate}})
    }

    const calculateItem = (item) => () => {
        if (!item.isCalculating){
            const calculate = generateOdds();
            dispatch({type:'updateItem', payload: {...item, isCalculating: true}})
            calculate(calculateHandler(item))
        }
    };

    const calculateAll = () => {
        state.ants.forEach((item) => calculateItem(item)())
    }

    useEffect(() => {
        dispatch({type:'setAnts', payload: data?.ants})
    }, [data])

    return (
        <View style={styles.container}>
            <Button onPress={calculateAll} label="Calculate All" buttonStyle={styles.calculateAllButton} labelStyle={styles.calculateAllButtonLabel}/>
            <FlatList
                data={state.ants}
                renderItem={({item, index}) => <RowItem item={item} index={index} onPress={calculateItem}/>}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

export default Ants
