import React, { Component } from "react"
import { View, Text, FlatList, StyleSheet } from "react-native"
import { Card, Button } from "react-native-elements"
import { BLOGPOSTS } from "../shared/blogPosts"

export default class Blog extends Component {
    static navigationOptions = {
        title: "Blog Directory",
    }

    render() {
        const renderBlog = ({ item }) => {
            console.log(item)
            console.log(item.title)
            return (
                <Card>
                    {/* <Card.Title>{item.title}</Card.Title> */}
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={{ marginBottom: 15 }}>
                        {item.content.length > 200
                            ? item.content.slice(0, 200) + "..."
                            : item.content}
                    </Text>
                    <Button
                        title="Read"
                        buttonStyle={{
                            backgroundColor: "#034f84",
                        }}
                        onPress={() =>
                            this.props.navigation.navigate("BlogPage", {id: item.id})
                        }
                    />
                </Card>
            )
        }

        return (
            <FlatList
                data={BLOGPOSTS}
                renderItem={renderBlog}
                keyExtractor={(item) => item.id.toString()}
            />
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginBottom: 10,
        textAlign: "center",
    },
})
