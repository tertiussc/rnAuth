import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = ({ headerText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // justifyContent is to position vertically and alignItem is for Horizontal
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,

        // Shaddow
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        // Android specific fix for shaddow
        elevation: 2,
        position: 'relative'
    },
    header: {
        fontSize: 28,
    }
})

export default Header;