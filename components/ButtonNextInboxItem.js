import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
export default class ButtonNextInboxItem extends React.Component {
    render() {
        return (
            <Button
                title="Press me"
                color='blue'
                onPress={() => { clickHandler() }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#200',
    },
});


function clickHandler() {
    console.log('Seperate function')
}
