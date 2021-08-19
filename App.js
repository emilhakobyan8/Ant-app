/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';

import {ApolloProvider} from '@apollo/client';

import { client } from './src/api';
import Ants from "./src/screens/Ants";

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <ApolloProvider client={client}>
            <SafeAreaView style={styles.safeArea}>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
                <Ants/>
            </SafeAreaView>
        </ApolloProvider>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        backgroundColor: '#fff'
    }

});

export default App;
