import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import AppRoutes from "../RouteKeys/appRoutes";
import Ride from "../../screens/nonAuth/Ride";
import SelectRide from "../../screens/nonAuth/SelectRide";

export default function NonAuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ animation: 'flip' }} />
      <Stack.Screen name={AppRoutes.Ride} component={Ride} />
      <Stack.Screen name={AppRoutes.SelectRide} component={SelectRide} />
    </Stack.Navigator>
  );
}
