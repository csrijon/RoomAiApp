import { SafeAreaView } from "react-native-safe-area-context";
import SecendHeader from "../components/SecendHeader.js"
// import ScanerLoaderCom from "../components/ScanerLoaderCom.js";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";

const ScanerLoadingmainpage = () => {
    return (
        <SafeAreaView style={styles.mainscaner} >
            <SecendHeader />
            {/* <ScanerLoaderCom/> */}
            <View style={styles.genpage} >
                <Text style={styles.gentext} >Generating Your Dream Room</Text>
            </View>
            <LottieView
                source={require("../images/loader.json")}
                autoPlay
                loop
                style={{ width: 2500, height: 250, alignSelf: "center", marginTop: 100 }}
            />

        </SafeAreaView>
    )
}
export default ScanerLoadingmainpage;

const styles = StyleSheet.create({
    mainscaner: {
        flex: 1,
        backgroundColor: "#ffffff",
        position: "relative"
    },
    genpage:{
        marginTop: 20,
        alignItems: "center"
    },
    gentext:{
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 30,
        textAlign: "center",
        letterSpacing: 0.5,
    }
})