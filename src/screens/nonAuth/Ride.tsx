import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';
import SolidText from '../components/SolidText';
import SolidInput from '../components/SolidInput';
import AppFonts from '../../constants/fonts';
import AppRoutes from '../../routes/RouteKeys/appRoutes';

const { width, height } = Dimensions.get('window');

export default function Ride({ navigation }: any) {
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            {/* Full Screen Map */}
            <MapView
                provider={PROVIDER_DEFAULT}
                style={styles.map}
                initialRegion={{
                    latitude: 51.5549, // Example coordinates based on "Wembley" in image
                    longitude: -0.2795,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                }}
            >
                {/* Example Markers */}
                <Marker coordinate={{ latitude: 51.5549, longitude: -0.2795 }}>
                    <View style={styles.carMarker}>
                        <Image source={require('../../assets/marker.png')} style={styles.carIcon} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: 51.56, longitude: -0.28 }}>
                    <View style={styles.carMarker}>
                        <Image source={require('../../assets/marker.png')} style={styles.carIcon} />
                    </View>
                </Marker>
                <Marker coordinate={{ latitude: 51.55, longitude: -0.27 }}>
                    <View style={styles.carMarker}>
                        <Image source={require('../../assets/marker.png')} style={styles.carIcon} />
                    </View>
                </Marker>
            </MapView>

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/back-arrow.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <SolidText style={styles.headerTitle}>Ride</SolidText>
                <View style={{ width: 40 }} />
            </View>

            {/* Bottom Sheet Container */}
            <View style={styles.bottomSheet}>
                <View style={styles.inputGroup}>
                    <SolidText style={styles.label}>From</SolidText>
                    <SolidInput
                        placeholder="From location"
                        leftImg={require('../../assets/point.png')}
                        rightImg={require('../../assets/target.png')}
                        viewStyle={styles.inputView}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <SolidText style={styles.label}>To</SolidText>
                    <SolidInput
                        placeholder="To location"
                        leftImg={require('../../assets/point.png')} // Change to generic map icon if needed
                        rightImg={require('../../assets/map.png')}
                        viewStyle={styles.inputView}
                    />
                </View>

                <TouchableOpacity
                    style={styles.findButton}
                    onPress={() => navigation.navigate(AppRoutes.SelectRide)}
                >
                    <SolidText style={styles.findButtonText}>Find Now</SolidText>
                </TouchableOpacity>
            </View>
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
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: AppFonts.Bold,
        color: '#1D2939',
    },
    carMarker: {
        // padding: 5,
        // backgroundColor: 'rgba(255,255,255,0.7)',
        // borderRadius: 20,
    },
    carIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        transform: [{ rotate: '90deg' }] // Rotate to match road direction if needed
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
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
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontFamily: AppFonts.Medium,
        color: '#1D2939',
        marginBottom: 8,
    },
    inputView: {
        width: '100%',
        backgroundColor: '#F6F8FA',
        borderWidth: 0,
        height: 56,
        borderRadius: 50,
    },
    findButton: {
        backgroundColor: '#007AFF', // Blue color
        paddingVertical: 18,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    findButtonText: {
        color: 'white',
        fontFamily: AppFonts.Bold,
        fontSize: 18,
    },
});
