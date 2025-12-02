import SecendHeader from "../components/SecendHeader.js"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet,View,Text } from "react-native";


const ParttwoScaner =()=>{
    return(
     <SafeAreaView style={styles.PartScaner} >
        <SecendHeader/>
        <View><Text style={styles.boldtext} >Living Room Project</Text></View>
     </SafeAreaView>
    )
}

export default ParttwoScaner

const styles =StyleSheet.create({
    PartScaner:{
        flex:1,
        backgroundColor:"#ffffff"
    },
    boldtext:{
        color:"#040404ff"
    }
})