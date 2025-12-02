import SecendHeader from "../components/SecendHeader.js"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet,View } from "react-native";
import { Text } from "react-native/types_generated/index";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

const ParttwoScaner =()=>{
    return(
     <SafeAreaView style={styles.PartScaner} >
        <SecendHeader/>
        <View><Text style={{Color:"black"}} >Living Room Project</Text></View>
     </SafeAreaView>
    )
}

export default ParttwoScaner

const styles =StyleSheet.create({
    PartScaner:{
        flex:1,
        backgroundColor:"#ffffff"
    }
})