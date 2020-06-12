import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginButton } from '../actions/authAction';
class Login extends Component {

    onEmailChange = (text) => this.props.emailChange(text);
    onPasswordChange = (text) => this.props.passwordChange(text);
    onLoginButton = () => this.props.loginButton(this.props.emailValue, this.props.passwordValue)
    render() {
        const { errorValue } = this.props;
        return (
            <View>
                <TextInput
                    style={{marginVertical: 10, borderWidth: 1}}
                    onChangeText={this.onEmailChange}
                    placeholder="email" />
                <TextInput
                    style={{ marginVertical: 10, borderWidth: 1}}
                    onChangeText={this.onPasswordChange}
                    placeholder="password" />
                    <TouchableOpacity onPress={this.onLoginButton}>
                        <Text> LOGIN </Text>
                    </TouchableOpacity>

                    <Text> {errorValue} </Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { emailValue, passwordValue, errorValue } = state.AuthReducer;
    const { indexValues } = state.IndexReducer;
    return {
        emailValue,
        passwordValue,
        indexValues,
        errorValue
    }
}

export default connect(
    mapStateToProps,
    {
        emailChange,
        passwordChange,
        loginButton
    }
)(Login);