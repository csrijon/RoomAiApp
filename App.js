// import React, { useState, useEffect } from "react";
// import { View, Text, } from "react-native";
import Roomsection from "./src/screen/Roomsection.js"
import HomePage from "./src/screen/HomePage.js"
import HelpSupportPage from "./src/screen/HelpSupportPage.js"
// import Subscrption from "./src/screen/Subscrption.js"
import Roomsence from "./src/screen/Roomsence"
// import Tellmeus from "./src/screen/Tellmeus"
// import ReviewPage from "./src/screen/ReviewPage.js"
// import ParttwoScaner from "./src/screen/ParttwoScaner.js"
// import ScanerLoader from "./src/screen/ScanerLoadingmainpage.js"
import Mainscanerpage from "./src/screen/MainScanerpage.js"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const Stacksscreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen options={{ animation: "ios_from_left", animationDuration: 500 }} name="DrawerScreen" component={DrawerScreen} />
      <Stack.Screen name="TabsScreen" component={TabsScreen} />
    </Stack.Navigator>
  );
};

const TabsScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="RoomTab"
        component={Roomsection}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#23bddbff",
          tabBarInactiveTintColor: "#6e6e6e",
        }}
      />
      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="grid" size={size} color={color} />
        ),
        tabBarActiveTintColor: "#23bddbff",
        tabBarInactiveTintColor: "#6e6e6e",
      }}

        name="My Rooms" component={Roomsence} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#23bddbff",
          tabBarInactiveTintColor: "#6e6e6e",
        }}
        name="New Scan" component={Mainscanerpage} />
      <Tab.Screen 
      options={{
        tabBarIcon: ({ color, size }) => (
           <Ionicons name="settings-outline" size={size} color={color} />
        ),
        tabBarActiveTintColor: "#23bddbff",
        tabBarInactiveTintColor: "#6e6e6e",
      }}
      name="Setting" component={HelpSupportPage} />
    </Tab.Navigator>
  );
};

const DrawerScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} >
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Setting" component={HelpSupportPage} />
    </Drawer.Navigator>
  )
}



const App = () => {

  return (
    <NavigationContainer>
      <Stacksscreen />
    </NavigationContainer>
  );
};

export default App;
