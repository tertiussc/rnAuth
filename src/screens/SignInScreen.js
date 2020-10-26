import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from 'firebase'
// Custom imports
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Button from '../components/Button';
import Spinner from '../components/Spinner'

class SignInScreen extends Component {

    state = { loggedIn: null }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC91c7yz1xpRno6KLjmikXlglDMqWv06kI",
            authDomain: "authentication-464cb.firebaseapp.com",
            databaseURL: "https://authentication-464cb.firebaseio.com",
            projectId: "authentication-464cb",
            storageBucket: "authentication-464cb.appspot.com",
            messagingSenderId: "553481766548",
            appId: "1:553481766548:web:d295623fcbd31458e31681",
            measurementId: "G-1LRQP3YPLW"
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button>Log Out</Button>
            case false:
                return <LoginForm />
            default:
                return <View style={styles.spinnerContainerStyle}>
                    <Spinner size="large" />
                </View>
        }
    }

    render() {
        return (
            <View style={{ marginTop: 15 }}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View >
        );
    }
}

SignInScreen.navigationOptions = () => {
    return {
        header: () => false
    }
}

const styles = StyleSheet.create({
    spinnerContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SignInScreen;