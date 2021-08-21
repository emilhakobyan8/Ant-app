import React, { useState } from 'react';
import { View, Text } from 'react-native'
import TextField from "../../components/TextField";
import styles from './styles'
import Button from "../../components/Button";

interface IAuthScreen {
    authenticate: Function
}

const AuthScreen: React.FC<IAuthScreen> = ({ authenticate }) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handlePressSignIn = () => {
        if(login && password){
            authenticate()
        } else {
            alert('Please fill the fields!')
        }
    }

    return(
        <View style={styles.screen}>
            <Text style={styles.screenTitle}>Sign In</Text>
            <View style={styles.form}>
                <TextField value={login} onChangeText={setLogin} placeholder="Login" label="Login" />
                <TextField value={password} onChangeText={setPassword} placeholder="Login" label="Password" secureTextEntry={true} />
            </View>
            <Button onPress={handlePressSignIn} label="Sign In" buttonStyle={styles.signInButton} labelStyle={styles.signInButtonLabel}/>
        </View>
    )
}

export default AuthScreen;
