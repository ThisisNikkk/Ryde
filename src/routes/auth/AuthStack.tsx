import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/auth/Splash";
import Welcome from "../../screens/auth/Welcome";
import AppRoutes from "../RouteKeys/appRoutes";
import Onboarding from "../../screens/auth/Onboarding";
import SignUp from "../../screens/auth/SignUp";
import Login from "../../screens/auth/Login";


export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppRoutes.Splash} component={Splash} />
      <Stack.Screen name={AppRoutes.Onboarding} component={Onboarding} />
      <Stack.Screen name={AppRoutes.Welcome} component={Welcome} options={{ animation: 'ios_from_right' }} />
      <Stack.Screen name={AppRoutes.SignUp} component={SignUp} options={{ animation: 'fade' }} />
      <Stack.Screen name={AppRoutes.Login} component={Login} options={{ animation: 'slide_from_bottom' }} />
    </Stack.Navigator>
  );
}
