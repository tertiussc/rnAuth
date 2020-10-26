import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'

import Header from './src/components/Header'
import LoginForm from './src/components/LoginForm'

class App extends Component {

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
  }



  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;