import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Dimensions, Modal } from 'react-native';
import { useTheme } from '@react-navigation/native';
import SolidText from '../components/SolidText';
import AppFonts from '../../constants/fonts';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';

const { width } = Dimensions.get('window');

const rideOptions = [
    { id: '1', name: 'Jane Cooper', rating: 4.9, price: '$60', time: '10 min', seats: 4, car: require('../../assets/suv.png'), avatar: require('../../assets/profile.png') },
    { id: '2', name: 'Esther Howard', rating: 4.9, price: '$65', time: '12 min', seats: 4, car: require('../../assets/suv.png'), avatar: require('../../assets/profile.png') },
    { id: '3', name: 'Leslie Alexander', rating: 5.0, price: '$70', time: '10 min', seats: 4, car: require('../../assets/suv.png'), avatar: require('../../assets/profile.png') },
    { id: '4', name: 'Robert Fox', rating: 4.9, price: '$68', time: '16 min', seats: 4, car: require('../../assets/suv.png'), avatar: require('../../assets/profile.png') },
];

export default function SelectRide({ navigation }: any) {
    const { colors } = useTheme();
    const [selectedRide, setSelectedRide] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleRideSelect = (id: string) => {
        setSelectedRide(id);
        setModalVisible(true);
    };

    const renderHeader = () => (
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/back-arrow.png')} style={styles.backIcon} />
            </TouchableOpacity>
            <SolidText style={styles.headerTitle}>Choose A Rider</SolidText>
            <View style={{ width: 40 }} />
        </View>
    );

    const renderRideItem = ({ item }: any) => {
        const isSelected = selectedRide === item.id;
        return (
            <TouchableOpacity
                style={[styles.rideItem, isSelected && styles.selectedRideItem]}
                onPress={() => handleRideSelect(item.id)}
            >
                <Image source={item.avatar} style={styles.avatar} />
                <View style={styles.rideInfo}>
                    <View style={styles.nameRow}>
                        <SolidText style={styles.driverName}>{item.name}</SolidText>
                        <View style={styles.ratingContainer}>
                            <Image source={require('../../assets/star.png')} style={styles.starIcon} />
                            <SolidText style={styles.ratingText}>{item.rating}</SolidText>
                        </View>
                    </View>
                    <View style={styles.detailsRow}>
                        <Image source={require('../../assets/dollar.png')} style={styles.dollarIcon} />
                        <SolidText style={styles.priceText}>{item.price}</SolidText>
                        <View style={styles.verticalDivider} />
                        <SolidText style={styles.detailText}>{item.time}</SolidText>
                        <View style={styles.verticalDivider} />
                        <SolidText style={styles.detailText}>{item.seats} Seats</SolidText>
                    </View>
                </View>
                <Image source={item.car} style={styles.carImage} />
            </TouchableOpacity>
        );
    };

    const selectedRideData = rideOptions.find(r => r.id === selectedRide);

    const renderRideInfoModal = () => {
        if (!selectedRideData || !modalVisible) return null;

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <SolidText style={styles.modalTitle}>Ride Information</SolidText>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Image source={require('../../assets/close.png')} style={styles.closeIcon} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.driverProfile}>
                            <Image source={selectedRideData.avatar} style={styles.largeAvatar} />
                            <View style={styles.driverTitleRow}>
                                <SolidText style={styles.largeDriverName}>{selectedRideData.name}</SolidText>
                                <Image source={require('../../assets/star.png')} style={styles.starIcon} />
                                <SolidText style={styles.ratingText}>{selectedRideData.rating}</SolidText>
                            </View>
                        </View>

                        <View style={styles.infoCard}>
                            <View style={styles.infoRow}>
                                <SolidText style={styles.infoLabel}>Ride Price</SolidText>
                                <SolidText style={styles.infoValueGreen}>{selectedRideData.price}</SolidText>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.infoRow}>
                                <SolidText style={styles.infoLabel}>Pickup time</SolidText>
                                <SolidText style={styles.infoValue}>{selectedRideData.time}</SolidText>
                            </View>
                            <View style={styles.divider} />
                            <View style={styles.infoRow}>
                                <SolidText style={styles.infoLabel}>Car Seats</SolidText>
                                <SolidText style={styles.infoValue}>{selectedRideData.seats}</SolidText>
                            </View>
                        </View>

                        <View style={styles.routeContainer}>
                            <View style={styles.routeRow}>
                                <Image source={require('../../assets/point.png')} style={styles.routeIcon} />
                                <SolidText style={styles.addressText} numberOfLines={1}>1901 Thornridge Cir. Shiloh</SolidText>
                            </View>
                            <View style={styles.routeRow}>
                                <Image source={require('../../assets/pin.png')} style={styles.routeIcon} />
                                <SolidText style={styles.addressText} numberOfLines={1}>4140 Parker Rd. Allentown, New Mexico</SolidText>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.confirmRideButton}>
                            <SolidText style={styles.confirmButtonText}>Confirm Ride</SolidText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    };

    return (
        <View style={styles.container}>
            {/* Map Background (Visual Context) */}
            <MapView
                provider={PROVIDER_DEFAULT}
                style={styles.map}
                initialRegion={{
                    latitude: 51.5549,
                    longitude: -0.2795,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                }}
            />

            {renderHeader()}

            {!modalVisible && (
                <View style={styles.bottomSheet}>
                    <FlatList
                        data={rideOptions}
                        keyExtractor={item => item.id}
                        renderItem={renderRideItem}
                        contentContainerStyle={styles.listContent}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            )}

            {renderRideInfoModal()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    header: {
        position: 'absolute',
        top: 60,
        left: 24,
        right: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
    },
    backButton: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    backIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    headerTitle: {
        fontSize: 24,
        fontFamily: AppFonts.Bold,
        color: '#1D2939',
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        paddingBottom: 40,
        maxHeight: '60%',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 10,
    },
    listContent: {
        paddingBottom: 12,
    },
    rideItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F4F7',
    },
    selectedRideItem: {
        backgroundColor: '#E6F2FF', // Lighter blue to match image better
        borderRadius: 20, // Updated radius
        paddingHorizontal: 12, // More padding when selected
        marginHorizontal: -12, // compensate margin
        borderBottomWidth: 0,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 8,
        backgroundColor: '#F2F4F7',
        marginLeft: 8,
    },
    rideInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    driverName: {
        fontSize: 18,
        fontFamily: AppFonts.Bold, // Bold name
        color: '#1D2939',
        marginRight: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 4,
        tintColor: '#FF4D00' // Darker Orange/Red as in visual if possible, or gold
    },
    ratingText: {
        fontSize: 14,
        fontFamily: AppFonts.Medium,
        color: '#1D2939',
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dollarIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 4,
        tintColor: '#007AFF', // Blue dollar
    },
    priceText: {
        fontSize: 16,
        fontFamily: AppFonts.Bold,
        color: '#1D2939', // Dark color for price value
        marginRight: 8,
    },
    verticalDivider: {
        width: 1,
        height: 14,
        backgroundColor: '#D0D5DD',
        marginHorizontal: 8,
    },
    detailText: {
        fontSize: 14,
        fontFamily: AppFonts.Regular,
        color: '#858585',
    },
    carImage: {
        width: 80,
        height: 45,
        resizeMode: 'contain',
        marginLeft: 0,
        marginRight: 10,
    },
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 24,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: AppFonts.Bold,
        color: '#1D2939',
    },
    closeIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    driverProfile: {
        alignItems: 'center',
        marginBottom: 24,
    },
    largeAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
        backgroundColor: 'green'
    },
    driverTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    largeDriverName: {
        fontSize: 20,
        fontFamily: AppFonts.Bold,
        color: '#1D2939',
        marginRight: 8,
    },
    infoCard: {
        backgroundColor: '#F5F9FF', // Light blue bg
        borderRadius: 16,
        padding: 16,
        marginBottom: 24,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
    },
    infoLabel: {
        fontSize: 16,
        fontFamily: AppFonts.Regular,
        color: '#1D2939',
    },
    infoValue: {
        fontSize: 16,
        fontFamily: AppFonts.SemiBold,
        color: '#1D2939',
    },
    infoValueGreen: {
        fontSize: 16,
        fontFamily: AppFonts.SemiBold,
        color: '#039855', // Green color
    },
    divider: {
        height: 1,
        backgroundColor: '#E4E7EC', // Light divider
        marginVertical: 4,
    },
    routeContainer: {
        marginBottom: 24,
    },
    routeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    routeIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 12,
    },
    addressText: {
        fontSize: 14,
        fontFamily: AppFonts.Medium,
        color: '#1D2939',
        flex: 1,
    },
    confirmRideButton: {
        backgroundColor: '#007AFF', // Blue color
        paddingVertical: 18,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmButtonText: {
        color: 'white',
        fontFamily: AppFonts.Bold,
        fontSize: 18,
    },
});
