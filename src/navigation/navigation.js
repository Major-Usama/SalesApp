import * as React from "react";
import {  Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ContactsScreen from "../screens/ContactsScreen";
import CompaniesScreen from "../screens/CompaniesScreen";
import ReportsScreen from "../screens/ReportsScreen";
import TasksScreen from "../screens/TasksScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import TargetsScreen from "../screens/TargetsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import CodeVerificationScreen from "../screens/CodeVerificationScreen";
import ContactDetailScreen from "../screens/ContactDetailScreen";

const WIDTH = Dimensions.get("window").width;

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen
          options={{ animation: "slide_from_bottom" }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ animation: "slide_from_bottom" }}
          name="CodeVerificationScreen"
          component={CodeVerificationScreen}
        />
          <Stack.Screen name="ContactDetailScreen" component={ContactDetailScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
        <Stack.Screen name="CompaniesScreen" component={CompaniesScreen} />
        <Stack.Screen name="ReportsScreen" component={ReportsScreen} />
        <Stack.Screen name="TasksScreen" component={TasksScreen} />
        <Stack.Screen name="ProjectsScreen" component={ProjectsScreen} />
        <Stack.Screen name="TargetsScreen" component={TargetsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
