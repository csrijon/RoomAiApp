import { SafeAreaView } from "react-native-safe-area-context";
import SecendHeader from "../components/SecendHeader.js"
import ScanerLoaderCom from "../components/ScanerLoaderCom.js";
import { StyleSheet } from "react-native";
const ScanerLoadingmainpage = () => {
    return (
        <SafeAreaView style={styles.mainscaner} >
            <SecendHeader />
            <ScanerLoaderCom/>
        </SafeAreaView>
    )
}
export default ScanerLoadingmainpage;

const styles = StyleSheet.create({
    mainscaner: {
        flex: 1,
        backgroundColor: "#ffffff"
    }
})