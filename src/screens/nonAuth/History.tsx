import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import SolidText from '../components/SolidText';
import RideCard from '../components/RideCard';
import AppFonts from '../../constants/fonts';

const mockRides = [
    {
        id: '1',
        date: "16 July 2023, 10:30 PM",
        driver: "Jane Cooper",
        seats: 4,
        status: "Paid",
        from: "1901 Thornridge Cir. Shiloh",
        to: "4140 Parker Rd. Allentown",
    },
    {
        id: '2',
        date: "16 July 2023, 10:30 PM",
        driver: "Jane Cooper",
        seats: 4,
        status: "Paid",
        from: "1901 Thornridge Cir. Shiloh",
        to: "4140 Parker Rd. Allentown",
    },
    {
        id: '3',
        date: "16 July 2023, 10:30 PM",
        driver: "Jane Cooper",
        seats: 4,
        status: "Paid",
        from: "1901 Thornridge Cir. Shiloh",
        to: "4140 Parker Rd. Allentown",
    }
];

export default function History() {
    const { colors } = useTheme();

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={{ width: 20 }} />
            <SolidText style={styles.headerTitle}>History</SolidText>
            <View style={{ width: 20 }} />
        </View>
    );

    const renderTitleRow = () => (
        <View style={styles.titleRow}>
            <SolidText style={styles.sectionTitle}>Popular Car</SolidText>
            <TouchableOpacity style={styles.sortBtn}>
                <SolidText style={styles.sortText}>Ascending</SolidText>
                <Image source={require('../../assets/arrow-down.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {renderTitleRow()}
            <FlatList
                data={mockRides}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <RideCard
                        date={item.date}
                        driver={item.driver}
                        seats={item.seats}
                        status={item.status}
                        from={item.from}
                        to={item.to}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
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
        fontSize: 18,
        fontFamily: AppFonts.Bold,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: AppFonts.Bold,
        color: '#1D2939'
    },
    sortBtn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortText: {
        color: '#007AFF', // Blue color usually
        fontSize: 14,
        fontFamily: AppFonts.Medium,
        marginRight: 4,
    },
    arrowIcon: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        tintColor: '#007AFF'
    },
    listContent: {
        paddingBottom: 120,
    }
});