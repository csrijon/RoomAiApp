// import React, { useState, useEffect } from "react";
// import { View, Text, } from "react-native";
// import Roomsection from "./src/screen/Roomsection.js"
import HomePage from "./src/screen/HomePage.js"
// import HelpSupportPage from "./src/screen/HelpSupportPage.js"
// import Subscrption from "./src/screen/Subscrption.js"
// import Roomsence from "./src/screen/Roomsence"
// import Tellmeus from "./src/screen/Tellmeus"
// import ReviewPage from "./src/screen/ReviewPage.js"
// import ParttwoScaner from "./src/screen/ParttwoScaner.js"
// import ScanerLoader from "./src/screen/ScanerLoadingmainpage.js"
// import Mainscanerpage from "./src/screen/MainScanerpage.js"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Stacksscreen = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  )
}
const App = () => {

  return (
    <NavigationContainer>
      <Stacksscreen/>
    </NavigationContainer>
  );
};

export default App;
