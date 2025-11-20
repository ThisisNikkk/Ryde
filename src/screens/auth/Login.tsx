import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { LocalizationContext } from "../../localization/localization";
import AppRoutes from "../../routes/RouteKeys/appRoutes";
import LinearGradient from 'react-native-linear-gradient';
import FastImage from '@d11/react-native-fast-image';
import SolidBtn from "../components/SolidBtn";
import SolidView from "../components/SolidView";
import AppUtils from "../../utils/appUtils";
import SolidText from "../components/SolidText";
import AppFonts from "../../constants/fonts";
import { hp, wp } from "../../utils/dimension";
import SolidInput from "../components/SolidInput";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/Reducers/userData";

const Login = ({ navigation }: any) => {
    const { colors, images }: any = useTheme();
    const { localization }: any = useContext(LocalizationContext);
    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(setAuth(true)),
            navigation.navigate(AppRoutes.NonAuthStack, {
                screen: AppRoutes.Home
            });
    }
    const handleSignUp = () => {
        navigation.navigate(AppRoutes.SignUp);
    }

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    return (
        <SolidView
            view={
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={isKeyboardVisible ? (Platform.OS === 'ios' ? 0 : 0) : Platform.OS === 'ios' ? 0 : -40}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.44 }}>
                            <FastImage source={images.getStarted} style={style.img} resizeMode="cover" />
                            <LinearGradient
                                colors={['rgba(255,255,255,0)', '#FFFFFF']}
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: 100,
                                }}
                            />
                            <SolidText style={[style.titleText, { color: colors.text }]}>{localization.appkeys?.Welcome}</SolidText>
                        </View>
                        <View style={{ flex: 1, backgroundColor: colors.background }}>
                            <View style={{ gap: 16 }}>
                                <SolidInput
                                    placeholder="Enter Email"
                                    title={localization.appkeys?.Email}
                                    leftImg={images.mail}
                                />
                                <SolidInput
                                    placeholder="Enter Password"
                                    title={localization.appkeys?.Password}
                                    leftImg={images.lock}
                                    rightImg={images.eye}
                                />
                            </View>
                            <SolidBtn
                                titleTxt={localization.appkeys?.LogIn}
                                btnStyle={style.btn}
                                onPress={handlePress}
                            />
                            <View style={style.divider}>
                                <View style={[style.dividerLine, { marginLeft: wp(9) }]}></View>
                                <SolidText style={[style.dividerText, { color: colors.text }]}>{localization.appkeys?.Or}</SolidText>
                                <View style={[style.dividerLine, { marginRight: wp(9) }]}></View>
                            </View>
                            <TouchableOpacity style={style.googleBtn}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={images.google} style={{ width: 20, height: 20, marginRight: 12 }} />
                                    <SolidText style={[style.dividerText, { color: colors.text }]}>{localization.appkeys?.Google}</SolidText>
                                </View>
                            </TouchableOpacity>
                            <SolidText style={[style.footerText, { color: 'rgba(133, 133, 133, 1)' }]}>{localization.appkeys?.DontAccount}
                                <SolidText
                                    onPress={handleSignUp}
                                    style={{ fontFamily: AppFonts.SemiBold, color: colors.primary }}>
                                    {localization.appkeys?.SignUp}
                                </SolidText>
                            </SolidText>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            }
        />
    );
}

const style = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: "center",
    },
    titleText: {
        fontSize: AppUtils.fontSize(28),
        textAlign: "left",
        fontFamily: AppFonts.Bold,
        position: 'absolute',
        left: wp(7),
        top: hp(21),
        letterSpacing: 0.1
    },
    img: {
        width: '100%',
        height: 310,
        alignSelf: 'center'
    },
    btn: {
        shadowOpacity: 0.25,
        shadowColor: '#101010',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 5,
        elevation: 5,
        marginTop: hp(4),
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(3)
    },
    dividerText: {
        fontFamily: AppFonts.SemiBold,
        fontSize: AppUtils.fontSize(15),
    },
    dividerLine: {
        flex: 1,
        height: 1.2,
        marginHorizontal: wp(4),
        backgroundColor: '#CED1DD',
    },
    googleBtn: {
        justifyContent: "center",
        alignItems: "center",
        width: 343,
        alignSelf: "center",
        height: 56,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#EBEBEB',
    },
    footerText: {
        fontFamily: AppFonts.Medium,
        fontSize: AppUtils.fontSize(17),
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: hp(3),
        letterSpacing: 0.2
    },
});


export default Login