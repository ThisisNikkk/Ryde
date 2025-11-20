import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import SolidView from '../components/SolidView';
import SolidText from '../components/SolidText';
import { useTheme } from '@react-navigation/native';
import { LocalizationContext } from '../../localization/localization';
import AppFonts from '../../constants/fonts';
import AppUtils from '../../utils/appUtils';
import { hp, wp } from '../../utils/dimension';
import PagerView from 'react-native-pager-view';
import AppRoutes from '../../routes/RouteKeys/appRoutes';
import SolidBtn from '../components/SolidBtn';

const Onboarding = ({ navigation }: any) => {
    const { images, colors }: any = useTheme();
    const { localization }: any = useContext(LocalizationContext);
    const [currentPage, setCurrentPage] = useState(0);
    const pagerRef = useRef<PagerView>(null);
    const styles = style(colors);

    const onboardingData = [
        {
            id: 1,
            title: (
                <Text>
                    The best car in your{"\n"}hands with <Text style={{ color: colors.primary }}>Ryde</Text>
                </Text>
            ),
            description: localization.appkeys?.ob1,
            image: images.ob1,
        },
        {
            id: 2,
            title: localization.appkeys?.Ob2,
            description: localization.appkeys?.ob2,
            image: images.ob2,
        },
        {
            id: 3,
            title: localization.appkeys?.Ob3,
            description: localization.appkeys?.ob3,
            image: images.ob3,
        },
    ];

    const handleNext = () => {
        if (currentPage < onboardingData.length - 1) {
            pagerRef.current?.setPage(currentPage + 1);
        } else {
            navigation.replace(AppRoutes?.Welcome);
        }
    };

    const handlePageSelected = (e: any) => {
        setCurrentPage(e.nativeEvent.position);
    };

    const handleSkip = () => {
        navigation.replace(AppRoutes?.Welcome);
    };

    return (
        <SolidView
            view={
                <>
                    <PagerView
                        ref={pagerRef}
                        style={styles.pagerView}
                        initialPage={0}
                        onPageSelected={handlePageSelected}
                    >
                        {onboardingData.map((item, index) => (
                            <View key={item.id} style={styles.parent}>
                                <SolidText onPress={handleSkip} style={styles.skip}>Skip</SolidText>
                                <Image
                                    source={item.image}
                                    style={styles.img}
                                    resizeMode="contain"
                                />
                                <SolidText
                                    style={styles.title}
                                >
                                    {item.title}
                                </SolidText>
                                <SolidText
                                    style={styles.des}
                                >
                                    {item.description}
                                </SolidText>
                                <View style={styles.paginationContainer}>
                                    {onboardingData.map((_, index) => (
                                        <View
                                            key={index}
                                            style={[
                                                styles.dot,
                                                currentPage === index && styles.activeDot,
                                                {
                                                    backgroundColor:
                                                        currentPage === index
                                                            ? colors.primary
                                                            : "#E2E8F0",
                                                },
                                            ]}
                                        />
                                    ))}
                                </View>
                                <SolidBtn
                                    titleTxt={index === onboardingData.length - 1 ? 'Get Started' : 'Next'}
                                    onPress={handleNext}
                                />
                            </View>

                        ))}
                    </PagerView>
                </>
            }
        />
    );
};

const style = (colors: any) =>
    StyleSheet.create({
        pagerView: {
            flex: 1,
        },
        parent: {
            alignItems: 'center',
        },
        title: {
            fontFamily: AppFonts.Bold,
            fontSize: AppUtils.fontSize(30),
            color: colors.text,
            marginTop: hp(7),
            textAlign: 'center',
            marginHorizontal: wp(4),
        },
        des: {
            fontFamily: AppFonts.Medium,
            fontSize: AppUtils.fontSize(17),
            color: colors.opacityText,
            marginTop: hp(1.5),
            textAlign: 'center',
            marginHorizontal: wp(4),
        },
        img: {
            height: 320,
            width: wp(100),
            marginTop: hp(5),
            resizeMode: 'contain',
        },

        paginationContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: hp(1.4),
            marginHorizontal: wp(4),
        },
        dot: {
            width: 32,
            height: 4,
            borderRadius: 8,
            marginHorizontal: 2.4,
            marginVertical: hp(3),
        },
        activeDot: {
            width: 34,
        },
        skip: {
            fontFamily: AppFonts.Bold,
            fontSize: AppUtils.fontSize(14),
            color: colors.text,
            marginTop: hp(2),
            alignSelf: 'flex-end',
            marginRight: wp(8)
        }
    });

export default Onboarding;
