
import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import SolidText from '../components/SolidText';
import AppFonts from '../../constants/fonts';
import SolidInput from '../components/SolidInput';

export default function Profile({ navigation }: any) {
    const { colors, images }: any = useTheme();

    const renderHeader = () => (
        <View style={styles.header}>
            <SolidText style={styles.headerTitle}>Your profile</SolidText>
        </View>
    );

    const renderAvatar = () => (
        <View style={styles.avatarSection}>
            <View style={styles.avatarContainer}>
                <Image source={images.profile} style={styles.avatar} />
                <TouchableOpacity style={styles.editAvatarBtn}>
                    <Image source={images.gallary} style={styles.cameraIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
    const renderForm = () => (
        <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
                <SolidText style={styles.label}>First name</SolidText>
                <SolidInput
                    placeholder="Marin"
                    viewStyle={styles.inputView}
                    rightImg={images.edit}
                />
            </View>
            <View style={styles.inputGroup}>
                <SolidText style={styles.label}>Last name</SolidText>
                <SolidInput
                    placeholder="JS Mastery"
                    viewStyle={styles.inputView}
                    rightImg={images.edit}
                />
            </View>
            <View style={styles.inputGroup}>
                <SolidText style={styles.label}>Email</SolidText>
                <SolidInput
                    placeholder="marin@jsmastery.pro"
                    viewStyle={styles.inputView}
                    rightImg={images.edit}
                />
            </View>
            <View style={styles.inputGroup}>
                <SolidText style={styles.label}>Email status</SolidText>
                <View style={styles.verifiedContainer}>
                    <Image source={require('../../assets/check.png')} style={styles.checkIcon} />
                    <SolidText style={styles.verifiedText}>Verified</SolidText>
                </View>
            </View>
            <View style={styles.inputGroup}>
                <SolidText style={styles.label}>Phone number</SolidText>
                <SolidInput
                    placeholder="+5547824162"
                    viewStyle={styles.inputView}
                    rightImg={images.edit}
                />
            </View>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {renderHeader()}
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {renderAvatar()}
                {renderForm()}
            </ScrollView>
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
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: AppFonts.Bold,
        color: '#1D2939',
    },
    scrollContent: {
        paddingBottom: 100,
    },
    avatarSection: {
        alignItems: 'center',
        marginBottom: 32,
    },
    avatarContainer: {
        position: 'relative',
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 60,
    },
    editAvatarBtn: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 32,
        height: 32,
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#F2F4F7'
    },
    cameraIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    formContainer: {

    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontFamily: AppFonts.Regular,
        color: '#858585',
        marginBottom: 8,
    },
    inputView: {
        width: '100%',
        backgroundColor: '#F6F8FA',
        borderWidth: 0,
        borderRadius: 50,
    },
    verifiedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#F6F8FA',
        borderRadius: 50,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#E4E7EC' // Slightly darker border for contrast if needed, or keeping it subtle
    },
    checkIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        tintColor: '#00C853',
        marginRight: 8,
    },
    verifiedText: {
        color: '#1D2939',
        fontFamily: AppFonts.Bold,
        fontSize: 14,
    },
});