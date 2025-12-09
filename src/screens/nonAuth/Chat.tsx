import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import SolidText from '../components/SolidText';
import AppFonts from '../../constants/fonts';

export default function Chat() {
    const { colors } = useTheme();

    const renderHeader = () => (
        <View style={styles.header}>
            <SolidText style={styles.headerTitle}>Chat List</SolidText>
            <View style={styles.iconPlaceholder}>
                <Image source={require('../../assets/out.png')} style={styles.headerIcon} />
            </View>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {renderHeader()}
            <View style={styles.content}>
                <Image source={require('../../assets/message.png')} style={styles.illustration} />
                <SolidText style={styles.title}>No Messages, yet.</SolidText>
                <SolidText style={styles.subtitle}>No messages in your inbox, yet!</SolidText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: AppFonts.Bold,
        color: '#1D2939',
    },
    iconPlaceholder: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20, // Circle
        borderWidth: 1,
        borderColor: '#F2F4F7'
    },
    headerIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        transform: [{ rotate: '180deg' }] // To make "out" look like "back" or just decorative
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100, // Move it up slightly visually
    },
    illustration: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontFamily: AppFonts.Bold,
        color: '#1D2939',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: AppFonts.Regular,
        color: '#858585',
        textAlign: 'center',
    },
});