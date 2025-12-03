import React, { useState } from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const ScanerLast = () => {
    const [on, setOn] = useState(false);

    const toogleSwitch =()=>{
        setOn(!on)
    }
    return (
        <View style={styles.mainbuttoncontainer} >
            <View>
                <View><MaterialCommunityIcons name="compare" size={28} color="#090909ff" /></View>
                <Text>Fumiture/Materials</Text>
            </View>
            <TouchableOpacity onPress={toogleSwitch} >
                <MaterialCommunityIcons name={on?"toggle-switch":"toggle-switch-off"} size={50} color="#b2b4b2ff" />
            </TouchableOpacity>
           <View>
            <View><MaterialIcons name="lightbulb-outline" size={28} color="#999" /></View>
            <Text>Variant1/3</Text>
           </View>
        </View>
    )
}
export default ScanerLast;

const styles = StyleSheet.create({
    mainbuttoncontainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:30
    }
})