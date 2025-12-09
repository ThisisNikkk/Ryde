import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from "react-native";
// import SolidView from "../components/SolidView"; // Not used in new design
import SolidText from "../components/SolidText";
import SolidInput from "../components/SolidInput";
import { setAuth } from "../../redux/Reducers/userData";
import { useDispatch } from "react-redux";
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import AppFonts from "../../constants/fonts";
import SolidView from "../components/SolidView";
import AppRoutes from "../../routes/RouteKeys/appRoutes";

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { colors, images } = useTheme() as any;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuth(false));
    navigation.reset({
      index: 0,
      routes: [{ name: AppRoutes.AuthStack, params: { screen: AppRoutes.Login } }],
    });
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <SolidText style={styles.welcomeText}>
        Welcome John
      </SolidText>
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={handleLogout}
      >
        <Image source={require('../../assets/out.png')} style={styles.logoutIcon} />
      </TouchableOpacity>
    </View>
  );

  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <SolidInput
        placeholder="Where do you want to go?"
        leftImg={require('../../assets/search.png')}
        viewStyle={{ width: '100%' }}
        textInputStyle={{ fontSize: 14, fontFamily: AppFonts.Medium }}
      />
    </View>
  );

  const renderMapSection = () => (
    <View style={styles.sectionContainer}>
      <SolidText style={styles.sectionTitle}>
        Your current location
      </SolidText>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_DEFAULT}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            image={require('../../assets/point.png')}
          />
          <Marker
            coordinate={{ latitude: 37.79, longitude: -122.435 }}
            image={require('../../assets/marker.png')}
          />
          <Marker
            coordinate={{ latitude: 37.785, longitude: -122.43 }}
            image={require('../../assets/marker.png')}
          />
          <Marker
            coordinate={{ latitude: 37.783, longitude: -122.436 }}
            image={require('../../assets/marker.png')}
          />
        </MapView>
      </View>
    </View>
  );

  const renderRecentRides = () => (
    <View style={styles.sectionContainer}>
      <SolidText style={styles.sectionTitle}>
        Recent Rides
      </SolidText>
      <View style={styles.rideCard}>
        <View style={styles.rideHeaderRow}>
          <Image source={images.miniMap} style={styles.rideMapThumb} />
          <View style={styles.rideLocInfo}>
            <View style={styles.routeRow}>
              <Image source={require('../../assets/to.png')} style={styles.routeIcon} />
              <SolidText style={styles.addressText}>1901 Thornridge Cir. Shiloh</SolidText>
            </View>
            <View style={styles.routeRow}>
              <Image source={require('../../assets/pin.png')} style={styles.routeIcon} />
              <SolidText style={styles.addressText}>4140 Parker Rd. Allentown</SolidText>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.rideDetailsRow}>
          <SolidText style={styles.detailLabel}>Date & Time</SolidText>
          <SolidText style={styles.detailValue}>16 July 2023, 10:30 PM</SolidText>
        </View>
        <View style={styles.rideDetailsRow}>
          <SolidText style={styles.detailLabel}>Driver</SolidText>
          <SolidText style={styles.detailValue}>Jane Cooper</SolidText>
        </View>
        <View style={styles.rideDetailsRow}>
          <SolidText style={styles.detailLabel}>Car seats</SolidText>
          <SolidText style={styles.detailValue}>4</SolidText>
        </View>
        <View style={styles.rideDetailsRow}>
          <SolidText style={styles.detailLabel}>Payment Status</SolidText>
          <SolidText style={[styles.detailValue, { color: 'lightgreen' }]}>Paid</SolidText>
        </View>
      </View>
    </View>
  );

  return (
    <SolidView
      view={
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }} showsVerticalScrollIndicator={false} bounces={false} overScrollMode="never">
          <View style={styles.container}>
            {renderHeader()}
            {renderSearchBar()}
            {renderMapSection()}
            {renderRecentRides()}
          </View>
        </ScrollView>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#1D2939',
    fontFamily: AppFonts.Bold,
  },
  logoutBtn: {
    padding: 12,
    backgroundColor: '#F2F4F7',
    borderRadius: 50,
    alignSelf: 'center',
  },
  logoutIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  searchContainer: {
    marginBottom: 24,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#1D2939',
    marginBottom: 16,
    fontFamily: AppFonts.Bold
  },
  mapContainer: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
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

export default Home;
