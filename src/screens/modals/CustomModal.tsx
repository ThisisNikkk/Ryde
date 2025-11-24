import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Pressable,
    Platform,
    Image,
} from 'react-native';
import { LocalizationContext } from '../../localization/localization';
import { hp, wp } from '../../utils/dimension';
import AppFonts from '../../constants/fonts';
import SolidBtn from '../components/SolidBtn';
import { BlurView } from '@react-native-community/blur';
import AppUtils from '../../utils/appUtils';
import SolidText from '../components/SolidText';
import FastImage from '@d11/react-native-fast-image';
interface SuccessProps {
    isVisible: boolean;
    onClose?: () => void;
    onSubmitYes?: any;
    onSubmitNo?: any;
    type?: any;
    onChangeText?: any;
    value?: any;
    Subtext?: any;
    btnTxtFirst: any;
    firstBtn?: any;
    secondBtn?: any;
    mainText?: any;
    headImg?: any;
    btnTxtSecond?: any;
    imgStyle?: any;
    mainTextStyle?: any;
    subtextStyle?: any;
}

const CustomModal: React.FC<SuccessProps> = ({
    isVisible,
    onClose,
    onSubmitYes,
    onSubmitNo,
    Subtext,
    btnTxtFirst,
    firstBtn,
    secondBtn,
    mainText,
    headImg,
    btnTxtSecond,
    imgStyle,
    mainTextStyle,
    subtextStyle,
}) => {
    const { colors, images } = useTheme() as any;
    const { localization } = useContext(LocalizationContext) as any;
    const styles = createStyles(colors);
    return (
        <Modal
            transparent
            visible={isVisible}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                {/* ✅ Place BlurView absolutely */}
                <BlurView
                    style={styles.absolute}
                    blurType="dark"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="white"
                />

                {/* Modal content above Blur */}

                <View style={styles.popupContainer}>
                    {headImg && (
                        <FastImage
                            source={headImg}
                            resizeMode="contain"
                            style={[
                                {
                                    height: 100,
                                    width: 100,
                                    alignSelf: 'center',
                                    marginTop: hp(3),
                                },
                                imgStyle,
                            ]}
                        />
                    )}
                    {mainText && (
                        <SolidText
                            style={[
                                {
                                    alignSelf: 'center',
                                    color: colors.text,
                                    fontFamily: AppFonts.SemiBold,
                                    fontSize: AppUtils.fontSize(22),
                                    textAlign: 'center',
                                    paddingHorizontal: 20,
                                    marginTop: hp(1),
                                },
                                mainTextStyle,
                            ]}
                        >
                            {mainText}
                        </SolidText>
                    )}
                    {Subtext && (
                        <SolidText
                            style={[
                                {
                                    alignSelf: 'center',
                                    color: colors.text,
                                    fontFamily: AppFonts.Regular,
                                    fontSize: AppUtils.fontSize(16),
                                    textAlign: 'center',
                                    paddingHorizontal: 20,
                                    marginTop: hp(1),
                                    lineHeight: 25,
                                },
                                subtextStyle,
                            ]}
                        >
                            {Subtext}
                        </SolidText>
                    )}

                    {firstBtn && (
                        <SolidBtn
                            titleTxt={btnTxtFirst}
                            onPress={onSubmitYes}
                            btnStyle={{
                                alignSelf: 'center',
                                height: 50,
                                marginTop: hp(3),
                                width: '90%',
                                marginBottom: secondBtn ? 0 : 30,
                            }}
                            txtStyle={{
                                color: colors.background,
                                fontSize: AppUtils.fontSize(16),
                                fontFamily: AppFonts.SemiBold,
                            }}
                        />
                    )}
                    {secondBtn && (
                        <SolidBtn
                            titleTxt={btnTxtSecond}
                            onPress={onSubmitNo}
                            btnStyle={{
                                alignSelf: 'center',
                                marginTop: 15,
                                width: wp(82),
                                borderRadius: 11,
                                marginBottom: hp(5),
                            }}
                            txtStyle={{
                                color: colors.background,
                                fontSize: AppUtils.fontSize(18),
                                fontFamily: AppFonts.Medium,
                            }}
                        />
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default CustomModal;

const createStyles = (colors: any) =>
    StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        popupContainer: {
            width: '90%',
            borderRadius: 20,
            shadowOffset: { height: 0, width: 3 },
            shadowRadius: 2,
            zIndex: 999,
            overflow: 'hidden',
            backgroundColor: 'white',
        },
        selectContain: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp(1),
        },
        solidSty: {
            height: hp(5.8),
        },
        substy: {
            marginTop: 1,
            paddingLeft: 2,
        },
        viewRecSty: {
            marginTop: hp(1),
            marginBottom: hp(2),
        },
        absolute: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    });
