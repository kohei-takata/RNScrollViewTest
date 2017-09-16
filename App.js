/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    ScrollView,
    View
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Welcome to React Native!'};
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.container}>
                <TextInput
                    multiline={true}
                    style={styles.welcome}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center', flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        backgroundColor: 'white',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
