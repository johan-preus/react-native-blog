import React, { Component } from "react"
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native"
import { Card, Button } from "react-native-elements"
import { BLOGPOSTS } from "../shared/blogPosts"

export default class BlogPage extends Component {
    static navigationOptions = {
        title: "Blog Page",
    }

    render() {
        const id = this.props.navigation.getParam("id")
        blogPost = BLOGPOSTS.filter((blog) => blog.id === id)[0]

        return (
            <ScrollView>
                <Text style={styles.title}>{blogPost.title}</Text>
                <Text style={styles.content}>{blogPost.content}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: "center",
        margin: 10,
    },
    content: {
        fontSize: 16,
        marginHorizontal: 10,
    },
})
