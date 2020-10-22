import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignInScreen = () => {
    const { mainText } = styles


    return (
        <View>
            <Text style={mainText}>Sign In/Up Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 24
    }
})

export default SignInScreen;