import React, {useEffect, useReducer, useMemo} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native'
import {useQuery} from "@apollo/client";

import {GET_ANTS} from "../../api/ants";
import Button from "../../components/Button"

import styles from "./styles"
import RowItem from "./RowItem";
import generateOdds from "../../helpers/generateOdds";
import {IAnt} from "../../types";
import Ant from "./Ant";


const initialState = {ants: []};

interface IAntsProps {
    logOut: Function
}

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

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'setAnts':
            return {...state, ants: action.payload};
        case 'updateItem':
            return {
                ...state, ants: state.ants.map((ant) => {
                    if (ant.name === action.payload.name) {
                        return ({
                            ...action.payload
                        })
                    }
                    return ant
                })
            };
        default:
            throw new Error();
    }
}


const Ants: React.FC<IAntsProps> = ({logOut}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {data, loading} = useQuery(GET_ANTS)

    const calculateHandler = item => (calculatedRate) => {
        dispatch({type: 'updateItem', payload: {...item, isCalculating: false, rate: calculatedRate}})
    }

    const calculateItem = (item) => () => {
        if (!item.isCalculating) {
            const calculate = generateOdds();
            dispatch({type: 'updateItem', payload: {...item, isCalculating: true}})
            calculate(calculateHandler(item))
        }
    };

    const calculateAll = () => {
        state.ants.forEach((item) => calculateItem(item)())
    }

    const handlePressLogOut = () => {
        logOut()
    }

    useEffect(() => {
        dispatch({type: 'setAnts', payload: data?.ants})
    }, [data])

    const antImages = useMemo(() => {
        return (
            state?.ants?.map((ant, index) => (
                <Ant ant={ant} key={ant.name} index={index}/>
            ))
        )
    }, [state?.ants])

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color="#123234"/>
            </View>)
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Button onPress={calculateAll} label="Calculate All" buttonStyle={styles.calculateAllButton}
                            labelStyle={styles.calculateAllButtonLabel}/>
                    <Button onPress={handlePressLogOut} label="Log Out" buttonStyle={styles.calculateAllButton}
                            labelStyle={styles.calculateAllButtonLabel}/>
                </View>
                <FlatList
                    data={state.ants}
                    renderItem={({item, index}) => <RowItem item={item} index={index} onPress={calculateItem}/>}
                    keyExtractor={(item, index) => index}
                />
            </View>
            <View style={styles.antsContainer}>
                {antImages}
            </View>
        </>
    )
}

export default Ants
