import React from "react";
import { View, Image, Platform, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/nonAuth/Home";
import AppRoutes from "../RouteKeys/appRoutes";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const Placeholder = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

export default function BottomTabNavigator() {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name={AppRoutes.Home}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                            <Image
                                source={require('../../assets/home.png')}
                                style={[styles.icon, { tintColor: focused ? 'white' : '#ffffff' }]}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Rides'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                            <Image
                                source={require('../../assets/list.png')}
                                style={[styles.icon, { tintColor: focused ? 'white' : '#fff' }]}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Chats'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                            <Image
                                source={require('../../assets/chat.png')}
                                style={[styles.icon, { tintColor: focused ? 'white' : '#fff' }]}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
                            <Image
                                source={require('../../assets/profile.png')}
                                style={[styles.icon, { tintColor: focused ? 'white' : '#fff' }]}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 30,
        left: 24,
        right: 24,
        backgroundColor: '#292929',
        borderRadius: 40,
        height: 80,
        borderTopWidth: 0,
        paddingBottom: 0,
        elevation: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginHorizontal: 24,
        paddingHorizontal: 12,
        zIndex: 100, // Ensure it stays on top
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
    },
    activeIconContainer: {
        backgroundColor: '#00C853',
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});
