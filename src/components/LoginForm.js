import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// custom components
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

class LoginForm extends Component {

    render() {
        return (
            <Card>
                <CardSection>

                </CardSection>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({

})

export default LoginForm;