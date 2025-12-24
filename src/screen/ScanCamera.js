import { SafeAreaView } from "react-native-safe-area-context"
import { View, TouchableOpacity, StyleSheet } from "react-native"
import ThirdHeader from "../components/ThirdHeader.js"
import { Text } from "react-native"
import { useState } from "react"
import { RNCamera, FaceDetector } from 'react-native-camera';

const ScanCamera = () => {

const [camera,setcamera] = useState("false")
    return (
        <SafeAreaView style={Styles.maincontainer} >
            <ThirdHeader />
            <View style={Styles.buttoncontainer} >
                <View style={Styles.campic} >
                    <RNCamera/>
                </View>
                <TouchableOpacity  onPress={()=>}  style={Styles.button} >
                    <Text>Capture</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ScanCamera
const Styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: "#000", // camera screens usually dark
    },
    campic: {
        backgroundColor: "#ffffff"
    },
    buttoncontainer: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#40dc1dff",
        alignItems: "center",
        justifyContent: "center",

        // shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        // elevation for Android
        elevation: 8,
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
