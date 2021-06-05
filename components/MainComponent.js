import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"
import { Icon } from "react-native-elements"
import SafeAreaView from "react-native-safe-area-view"
import Home from "./HomeComponent"
import About from "./AboutComponent"
import Blog from "./BlogComponent"
import Contact from "./ContactComponent"
import BlogPage from "./BlogPageComponent"

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#034f84",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="home"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
)

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#034f84",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="info-circle"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
)

const BlogNavigator = createStackNavigator(
    {
        Blog: { screen: Blog },
        BlogPage: { screen: BlogPage },
    },
    {
        initialRouteName: 'Blog',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#034f84",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="comment" //other possibilities: blog, bookmark, books, comment-alt
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
)

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#034f84",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
            headerLeft: (
                <Icon
                    name="address-card"
                    type="font-awesome"
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            ),
        }),
    }
)

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
        >
            <View style={styles.drawerHeader}>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Drawer</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="home"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
        Blog: {
            screen: BlogNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="comment"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="info-circle"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => (
                    <Icon
                        name="address-card"
                        type="font-awesome"
                        size={24}
                        color={tintColor}
                    />
                ),
            },
        },
    },
    {
        drawerBackgroundColor: "#92a8d1",
        contentComponent: CustomDrawerContentComponent,
    }
)

const AppNavigator = createAppContainer(MainNavigator)

export default class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop:
                        Platform.OS === "ios"
                            ? 0
                            : Expo.Constants.statusBarHeight,
                }}
            >
                <AppNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: "#034f84",
        height: 140,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
    },
    drawerHeaderText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 20,
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60,
    },
    stackIcon: {
        marginLeft: 10,
        color: "#fff",
        fontSize: 24,
    },
})
