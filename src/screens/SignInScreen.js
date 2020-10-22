import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header'

const SignInScreen = () => {
    const { mainText } = styles


    return (
        <View style={{ marginTop: 15 }}>
            <Header headerText="Authentication" />
            <Text style={mainText}>Sign In/Up Screen</Text>
        </View >
    );
}

SignInScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 24
    }
})

export default SignInScreen;