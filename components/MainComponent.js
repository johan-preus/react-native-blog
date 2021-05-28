import React, { Component } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"
import { Icon } from "react-native-elements"
import SafeAreaView from "react-native-safe-area-view"
import Home from "./HomeComponent"

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#5637DD",
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
    },
    {
        drawerBackgroundColor: "#CEC8FF",
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
                <Text>asdf;aklsnrkl;awnerkl;awnfl;jaweofawjkfawjefanwe;n;jfawne;fjaw</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: "#5637DD",
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
