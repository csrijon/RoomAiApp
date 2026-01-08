
import Roomsection from "./src/screen/Roomsection.js"
import HomePage from "./src/screen/HomePage.js"
import HelpSupportPage from "./src/screen/HelpSupportPage.js"
import Subscrption from "./src/screen/Subscrption.js"
import Roomsence from "./src/screen/Roomsence"
import Tellmeus from "./src/screen/Tellmeus"
import ReviewPage from "./src/screen/ReviewPage.js"
// import ParttwoScaner from "./src/screen/ParttwoScaner.js"
import ScanerLoadingmainpage from "./src/screen/ScanerLoadingmainpage.js"
import LoginScreen from "./src/screen/LoginScreen.js"
import SignUpScreen from "./src/screen/SignUpScreen.js"
import SetNewPassword from "./src/screen/SetNewPassword.js"
import PasswordReset from "./src/screen/PasswordReset.js"
import Forgetpage from "./src/screen/Forgetpage.js"
import CheckyourEmail from "./src/screen/CheckyourEmail.js"
import ScanCamera from "./src/screen/ScanCamera.js"
// import Mainscanerpage from "./src/screen/MainScanerpage.js"
// import RoomScanScreen from "./src/screen/"
import Launchpage from "./src/screen/Launchpage.js"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View } from "react-native"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// const TopTab = createMaterialTopTabNavigator();


const Stacksscreen = () => {
  return (
    <Stack.Navigator initialRouteName="Launchpage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Launchpage" component={Launchpage} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Forgetpage" component={Forgetpage} />
      <Stack.Screen name="CheckyourEmail" component={CheckyourEmail} />
      <Stack.Screen name="PasswordReset" component={PasswordReset} />
      <Stack.Screen name="SetNewPassword" component={SetNewPassword} />
      <Stack.Screen options={{ animation: "ios_from_left", animationDuration: 500 }} name="DrawerScreen" component={DrawerScreen} />
      <Stack.Screen name="TabsScreen" component={TabsScreen} />
      <Stack.Screen name="Tellmeus" component={Tellmeus} />
      <Stack.Screen name="ReviewPage" component={ReviewPage} />
      <Stack.Screen name="ScanerLoadingmainpage" component={ScanerLoadingmainpage} />
      <Stack.Screen name="ScanCamera" component={ScanCamera}/>
    </Stack.Navigator>
  );
};

const TabsScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 70, paddingBottom: 10, paddingTop: 10,
      }
    }}>


      <Tab.Screen
        name="RoomTab"
        component={Roomsection}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#648DDB",
          tabBarInactiveTintColor: "#6e6e6e",
        }}
      />



      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="grid" size={size} color={color} />
        ),
        tabBarActiveTintColor: "#648DDB",
        tabBarInactiveTintColor: "#6e6e6e",
      }}
        name="My Rooms" component={Roomsence} />

      <Tab.Screen

        options={{
          tabBarIcon: ({ size }) => (
            <View style={styles.tabbariconbackground} >
              <Icon name="plus" size={size} color="#fff" />
            </View>
          ),
          tabBarLabel: "",
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#ffffff",

        }}
        name="ProTab" component={Subscrption} >

      </Tab.Screen>


      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="workspace-premium" size={size} color={color} />

          ),
          tabBarActiveTintColor: "#648DDB",
          tabBarInactiveTintColor: "#6e6e6e",
        }}
        name="Subscription" component={Subscrption} />


      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#648DDB",
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

const styles = StyleSheet.create({
  tabbariconbackground: {
    backgroundColor: "#648DDB",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  }
})