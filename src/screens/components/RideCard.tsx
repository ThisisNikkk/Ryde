import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import SolidText from './SolidText';
import { useTheme } from '@react-navigation/native';
import AppFonts from '../../constants/fonts';

interface RideCardProps {
    date: string;
    driver: string;
    seats: number;
    price?: string; // Not in original but might be good
    status: string;
    from: string;
    to: string;
}

const RideCard: React.FC<RideCardProps> = ({ date, driver, seats, status, from, to }) => {
    const { colors, images } = useTheme() as any;

    return (
        <View style={styles.rideCard}>
            <View style={styles.rideHeaderRow}>
                <Image source={images.miniMap} style={styles.rideMapThumb} />
                <View style={styles.rideLocInfo}>
                    <View style={styles.routeRow}>
                        <Image source={require('../../assets/to.png')} style={styles.routeIcon} />
                        <SolidText style={styles.addressText} numberOfLines={1}>{from}</SolidText>
                    </View>
                    <View style={styles.routeRow}>
                        <Image source={require('../../assets/pin.png')} style={styles.routeIcon} />
                        <SolidText style={styles.addressText} numberOfLines={1}>{to}</SolidText>
                    </View>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.rideDetailsRow}>
                <SolidText style={styles.detailLabel}>Date & Time</SolidText>
                <SolidText style={styles.detailValue}>{date}</SolidText>
            </View>
            <View style={styles.rideDetailsRow}>
                <SolidText style={styles.detailLabel}>Driver</SolidText>
                <SolidText style={styles.detailValue}>{driver}</SolidText>
            </View>
            <View style={styles.rideDetailsRow}>
                <SolidText style={styles.detailLabel}>Car seats</SolidText>
                <SolidText style={styles.detailValue}>{seats}</SolidText>
            </View>
            <View style={styles.rideDetailsRow}>
                <SolidText style={styles.detailLabel}>Payment Status</SolidText>
                <SolidText style={[styles.detailValue, { color: status === 'Paid' ? 'lightgreen' : colors.text }]}>
                    {status}
                </SolidText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    rideCard: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        marginBottom: 16,
    },
    rideHeaderRow: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    rideMapThumb: {
        width: 80,
        height: 80,
        borderRadius: 12,
    },
    rideLocInfo: {
        marginLeft: 16,
        flex: 1,
        justifyContent: 'center'
    },
    routeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    routeIcon: {
        width: 16,
        height: 16,
        marginRight: 8,
        resizeMode: 'contain',
    },
    addressText: {
        fontSize: 14,
        color: '#344054',
        flex: 1,
        fontFamily: AppFonts.Regular,
    },
    divider: {
        height: 1,
        backgroundColor: '#F2F4F7',
        marginBottom: 16,
        marginTop: 2,
    },
    rideDetailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    detailLabel: {
        color: '#98A2B3',
        fontSize: 14,
        fontFamily: AppFonts.Medium,
    },
    detailValue: {
        color: '#1D2939',
        fontSize: 14,
        textAlign: 'right',
        fontFamily: AppFonts.Medium,
    },
});

export default RideCard;
