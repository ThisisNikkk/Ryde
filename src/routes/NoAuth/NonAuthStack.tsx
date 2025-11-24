import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/nonAuth/Home";
import AppRoutes from "../RouteKeys/appRoutes";
import Map from "../../screens/nonAuth/Map";

export default function NonAuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={AppRoutes.Map} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoutes.Home} component={Home} options={{ animation: 'flip' }} />
      <Stack.Screen name={AppRoutes.Map} component={Map} options={{ animation: 'flip' }} />
    </Stack.Navigator>
  );
}
