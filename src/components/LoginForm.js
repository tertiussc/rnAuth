import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

// custom components
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'
import Input from './Input'

class LoginForm extends Component {
    state = { email: '', password: '' }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@email.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry
                    />
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