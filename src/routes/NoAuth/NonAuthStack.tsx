import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import AppRoutes from "../RouteKeys/appRoutes";
import MembershipScreen from "../../screens/nonAuth/MembershipScreen";

export default function NonAuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabNavigator} options={{ animation: 'flip' }} />
    </Stack.Navigator>
  );
}
