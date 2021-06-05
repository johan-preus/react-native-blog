import React, { Component } from "react"
import { View, Text } from "react-native"

export default class Contact extends Component {
    static navigationOptions = {
        title: "Contact",
    }

    render() {
        return (
            <View>
                <Text>Contact Component</Text>
            </View>
        )
    }
}
